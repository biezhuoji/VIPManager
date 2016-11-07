define(function (require) {
	let Mustache = require('mustache')
	let Tip = require('tips')
	let View = Backbone.View.extend({
		tagName: 'tr',
		initialize:function (){
			this.render()
			this.listenTo(this.model,'sync', function(resp){
				new Tip("折扣修改成功")
				this.render()
			})
		},
		events: {
			'click button.modify':       			'modifyRender',
			'click button.confirm':    				'modifyDiscount',
			'click button.cancel':    				'render',
			'input input[name=discount]': 			'validate',
			'propChanged input[name=discount]': 	'validate',
		},
		template: {
			"singleDiscountTem": require('singleDiscountTem'),
			"discountModifyTem": require('discountModifyTem'),
		},
		render: function() {
			let data = this.model.toJSON()
			let template = this.template.singleDiscountTem
			this.$el.html(Mustache.render(template, data))
		},
		modifyRender: function (e) {
			let $target = this.$(e.target)
			let template = this.template.discountModifyTem
			this.$el.html(Mustache.render(template,this.model.toJSON()))
		},
		modifyDiscount () {
			let discount = this.$("input[name=discount]").val()
			if(discount <= 0 || discount >1) {
				this.$("p.err").html("折扣率应在0~1之间")
			} else {
				let memberRank = this.$("td.memberank").html()
				let data = {
					"discount":   discount,
					"memberRank": memberRank,
				}
				this.model.save(data)
			}
		},
		validate () {
			let discount = this.$("input[name=discount]").val()
			let tipP = this.$("p.err")
			if(discount <= 0 || discount >1) {
				tipP.html("折扣率应在0~1之间")
				this.$("#has-").attr('class', 'has-error')
			} else {
				tipP.html('')
				this.$("#has-").attr('class', 'has-success')
			}
		}
	})

	return View
})