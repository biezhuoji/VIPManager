define(function (require) {
	let manageModel = require('manageModel')
	let Tip = require('tips')
	let Collection = require('memberCollection')
	let singleMemberView = require('singleMemberView')
	let router = new Backbone.Router()
	var MemberView =  Backbone.View.extend({
		el:'.main',
		events:{
			'click button[name=search]':'searchMember',
			'click a[name=page]':       'switchPage',
		},
		initialize:function() {
			this.$el.html(this.template)
			this.collection = new Collection
			this.collection.fetch({reset:true})
			this.listenTo(this.collection,'reset',this.render)
		},
		data: {
			'num':        3,
			'pageCount':  0,
		},
		template: require('memberListTem'),
		render:function() {
			let self = this
			this.html = []
			this.collection.each(function(model){
				self.html.push(new singleMemberView({model:model}).el)
			})
			this.$(".tbody").html(this.html.slice(0,this.data.num))
			this.data.pageCount = Math.ceil(this.html.length/this.data.num)
			this.pagination()
		},
		searchMember:function(){
			var key = $('input.searchKey').val()
			this.collection.fetch({data:{key:key},reset:true})
			router.navigate("member/search")
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
			this.$(".tbody").html(this.html.slice(start, end))
		},
	})
	return MemberView
})