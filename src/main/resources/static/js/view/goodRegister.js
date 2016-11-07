define(function (require) {
	let goodsCollection = require('goodsCollection')
	let View = Backbone.View.extend({
		el: '.main',
		events: {
			'click button[name=save]':'addGoodInfo',
			'click button[name=cancel]':'cancelSave',
		},
		initialize: function() {
			this.collection = new goodsCollection
			this.render()
		},
		template: require('goodRegisterTem'),
		render: function () {
			let template = this.template
			this.$el.html(template)
		},
		cancelSave:function(){
			this.$("input[name=inputID]").val('')
			this.$("input[name=inputname]").val('')
			this.$("input[name=inputSingleMoney]").val('')
			this.$("input[name=inputNumber]").val('')
		},
	   
		addGoodInfo:function (){
			var goodsNumber = this.$("input[name=inputID]").val()
			var goodsName = this.$("input[name=inputname]").val()
			var goodsPrice = this.$("input[name=inputSingleMoney]").val()
			var goodsCount = this.$("input[name=inputNumber]").val()
			var data = {
				'goodsNumber':goodsNumber,
				'goodsName' :goodsName,
				'goodsPrice':goodsPrice,
				'goodsCount':goodsCount
			}

			this.collection.create(data)
		}
	})
	return View
})