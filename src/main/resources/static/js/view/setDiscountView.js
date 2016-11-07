define(function (require) {
	let model = require('discountModel')
	let Tip = require('tips')
	let Collection = require("discountCollection")
	let singleDiscountView = require('singleDiscount')
	let View = Backbone.View.extend({
		el: '.main',
		events: {
			'click button.changerank': 'save',
		},
		initialize: function() {
			this.collection = new Collection
			this.collection.fetch({reset: true})
			this.listenTo(this.collection, 'reset', this.singleInfo)
			this.render()
		},
		template: require('discountTem'),
		render: function () {
			let template = this.template
			this.$el.html(template)
		},
		save: function () {
			let data = {
				"memberRank": this.$(".memberank").val(),
   				"discount":   this.$("input[name=discountval]").val()
			}
			this.model = new model(data)
			this.model.save()
		},
		singleInfo () {
			let html = []
			this.collection.forEach( function (model) {
				html.push(new singleDiscountView({model:model}).el)
			})
			this.$(".mybody").html(html)
		}
	})
	return View
})