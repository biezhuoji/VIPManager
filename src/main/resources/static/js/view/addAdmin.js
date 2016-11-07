define(function (require) {
	let manageModel = require('manageModel')
	let Tip = require('tips')
	let View = Backbone.View.extend({
		el: '.main',
		events: {
			'click button.addmanage': 'save',
		},
		initialize: function() {
			this.render()
		},
		template: require('addAdminTem'),
		render: function () {
			let template = this.template
			this.$el.html(template)
		},
		save: function () {
			let data = {
				'adminAccount':  this.$("#adminAccount").val(),
				'adminPassword': this.$("#adminPassword").val(),
				'adminName':     this.$("#adminName").val(),
				'adminPhone':    this.$("#adminPhone").val()
			}
			this.model = new manageModel(data)
			this.model.on('sync', function(resp) {
				new Tip(resp.attributes.status.message)
			})
			if(!this.model.isValid()) {
				new Tip(this.model.validationError)
			}
			this.model.save({validate: true})
		},
	})
	return View
})