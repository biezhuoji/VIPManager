define(function(require) {
	let Mustache = require('mustache')
	var singleOrderView = Backbone.View.extend({
		tagName:'tr',
		events:{
			'click .deleteSingleOrder':'deleteSingleOrder'
		},
		initialize:function() {
			this.render()
			this.listenTo(this.model,'change',this.render)
			this.listenTo(this.model,'destroy',this.remove)
		},
		template:{
			'singleOrderViewTem':require('singleOrderTem')
		},
		render:function() {
			var template = this.template.singleOrderViewTem
			var data = this.model.toJSON()
			this.$el.html(Mustache.render(template,data))
		},
		deleteSingleOrder:function() {
			this.model.destroy()
		}
	})
	return singleOrderView
})