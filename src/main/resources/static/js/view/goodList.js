define(function(require){
	let Tip = require('tips')
	let mustache = require('mustache')
	let goodsCollection = require("goodsCollection")
	let singleGoodInfo = require('singleGoodInfo')
	let router = new Backbone.Router()
	var App = Backbone.View.extend({
		el:'.main',
		initialize: function (){
			let template = require('goodListTem')
			this.$el.html(template)
			this.collection = new goodsCollection
			this.collection.fetch({reset:true})
			this.listenTo(this.collection,'reset',this.render)
		},
		events:{
			'click button[name=searchBtn]':'searchGoods',
			'click a[name=page]':          'switchPage',
		},
		data: {
			'num':        3,
			'pageCount':  0,
		},
		searchGoods:function(){
			console.log(11)
			var search_key = this.$("#form-control").val()
			if(search_key.length<1){
				//this.ShowWarn('请输入关键字！');
				alert('请输入要查询的商品编号！')
			}else {
				this.collection.fetch({data:{key:search_key},reset:true,success:function (collection){
					router.navigate('goods/search')
				}})	
			}
		},
		render:function(){
			let self = this
			this.html = []
			this.collection.forEach(function(model) {
				self.html.push(new singleGoodInfo({model:model}).el)
			})
			this.$("#tbody").html(this.html.slice(0,this.data.num))
			this.data.pageCount = Math.ceil(this.html.length/this.data.num)
			this.pagination()
		},
		pagination () {
			let html = []
			for(let i = 1; i <= this.data.pageCount; i++) {
				html.push('<li><a href="#" class=page_'+i+' name="page">'+i+'</a></li>')
			}
			this.$(".pagination").html(html.join(''))
		},
		switchPage (e) {
			let target = $(e.target)
			let num = this.data.num
			let page = (target.attr("class")).split('_')[1]
			let start = (page-1) * num
			let end = page * num
			this.$("#tbody").html(this.html.slice(start, end))
		},
	})
	return App
})