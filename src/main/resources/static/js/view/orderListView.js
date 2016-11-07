define(function(require) {
	let Tips = require('tips')
	let Collection = require('consumeRecordCollection')
	let singleOrderView = require('singleOrderView')
	let router = new Backbone.Router()
	var OrderListView = Backbone.View.extend({
		el:'.main',
		events:{
			'click button[name=search]': 'search',
		},
		initialize:function() {
			this.collection = new Collection()
			this.collection.fetch({reset:true})
			this.listenTo(this.collection,'reset',this.render)
		},
		template:require('orderListTem'),
		search () {
			let cardNumber = this.$('input.searchKey').val()
			this.collection.fetch({reset: true, data: {"cardNumber": cardNumber}, success: function () {
				router.navigate('/consume/orderList/search')
			}})
		},
		render:function() {
			var html = []
			this.$el.html(this.template)
			this.collection.each(function(model){
				html.push(new singleOrderView({model:model}).el)
			})
			this.$('.tbody').html(html)
		}

	})
	return OrderListView
})