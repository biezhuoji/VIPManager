define(function (require) {
	let memberModel = require('memberModel')
	let Tip = require("tips")
	let registerView = Backbone.View.extend({
		el: '.main',
		events: {
			'click button.save':   'save',
		},
		initialize () {
			this.render()
		},
		template: require('regiserTem'),
		render () {
			let template = this.template
			this.$el.html(template)
		},
		save () {
			let inputs = this.$("input[type=text]")
			let radio = this.$("input[type = radio]")
			let memberRank = this.$(".memberRank").find('option:selected').val()
			let status = 0
			let pswInput = this.$("input#psw").val()
			if(radio[0].checked) {
				status = 1
			}
			let data = {
				'cardNumber': 		this.$(inputs[0]).val(),
				'memberRank':   	memberRank,
				'memberName': 		this.$(inputs[1]).val(),
				'memberPhone': 		this.$(inputs[2]).val(),
				'memberPassword': 	pswInput,
				'status': 			status,
				'money':   			this.$(inputs[3]).val()
			}
			this.model = new memberModel(data)
			this.model.on('sync', function(resp) {
				new Tip(resp.attributes.status.message)
			})
			if(!this.model.isValid()) {
				new Tip(this.model.validationError)
			}
			this.model.save()
		},
	})
	return registerView
})