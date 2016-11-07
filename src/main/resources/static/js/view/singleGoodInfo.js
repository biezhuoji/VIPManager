define(function (require) {
	let Mustache = require('mustache')
	var GoodView = Backbone.View.extend({
		tagName:'tr',
		initialize:function (){
			this.render()
			this.listenTo(this.model,'destroy',this.remove)
			this.listenTo(this.model,'change', this.render)
			this.listenTo(this.model,'remove',this.devareGoodInfo)
		},

		events: {
			'click a.deleteGoodInfo':     'deleteGoodInfo',
			'click a.changeGoodInfo':     'modifyGoodsInfo',
			'click a[name=saveChange]':   'saveChange',
			'click a[name=cancelChange]': 'cancelChange'
		},

		template: {
			"singleGoodInfoTem": require('singleGoodInfoTem'),
			"goodModifyTem":     require('goodModifyTem'),
		},
		
		deleteGoodInfo: function () {
			this.model.destroy()
		},

		modifyGoodsInfo: function (e) {
			console.log(11)
			var $target = this.$(e.target)
			var template = this.template.goodModifyTem
			$target.parent().parent().html(Mustache.render(template,this.model.toJSON()))
		},

		saveChange: function () {
			
			var data = {
				'goodsNumber':this.$('input[name=Number]').val(),
				'goodsName':this.$('input[name=goodsName]').val(),
				'goodsPrice':this.$('input[name=price]').val(),
				'goodsCount':this.$('input[name=count]').val()
			}

			this.model.set(data)
			this.model.save()
		},

		cancelChange: function() {
			this.render()
		},

		render: function() {
			var data = this.model.toJSON()
			console.log(data)
			var template = this.template.singleGoodInfoTem
			this.$el.html(Mustache.render(template,data))
		}
	})

	return GoodView
})