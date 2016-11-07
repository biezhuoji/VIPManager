define(function (require) {
	let collection = require('consumedRecordCollection')
	let router = new Backbone.Router()
	let mustache = require('mustache')
	let View = Backbone.View.extend({
		el: '.main',
		events: {
			'click button[name=search]': 'search',
			'click a[name=page]':        'switchPage',
		},
		initialize () {
			this.collection = new collection
			this.listenTo(this.collection, 'reset', function(){
				this.renderInfo()
			})
			this.render()
		},
		template: {
			consumedListTem: require('consumedListTem'),
			infoRender: require('singleConsumeRecordTem')
		},
		data: {
			'num':        6,
			'pageCount':  0,
		},
		render () {
			let template = this.template.consumedListTem
			this.$el.html(template)
		},
		search () {
			let cardNumber = this.$('input.searchKey').val()
			this.collection.fetch({reset: true, data: {"cardNumber": cardNumber}})
		},
		renderInfo () {
			let template = this.template.infoRender
			let self = this
			this.html = []
			this.collection.each(function(model) {
				let data = model.toJSON()
				let createTime = data.createTime
				data.createTime = new Date(parseInt((createTime.toString().slice(0, 10)) * 1000)).toLocaleString().substr(0,17)
				self.html.push(data)
			})
			this.$(".tbody").html(mustache.render(template,this.html.slice(0,this.data.num)))
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
			let template = this.template.infoRender
			this.$(".tbody").html(mustache.render(template,this.html.slice(start,end)))
		},

	})
	return View
}) 