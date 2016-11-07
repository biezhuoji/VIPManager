define(function(require){
	let Tip = require('tips')
	let mustache = require('mustache')
	let View = Backbone.View.extend({
		tagName: 'tr',
		events: {
			'click a.modify':         	'modifyRender',
			'click .managerModify': 	'modify',
			'click .cancel':        	'cancel',
			'click a.delete': 			'deleteOne',
			'click .info':      		'markOne',
		},
		initialize () {
			let self =this
			this.currentpage = 1
			this.listenTo(this.model, 'sync', this.render)
			this.listenTo(this.model, 'change', function () {
				new Tip("修改成功")
			})
			this.listenTo(this.model, 'destroy', function() {
				new Tip("删除成功")
				this.remove()
			})
			this.listenTo(this.model, 'remove', this.deleteOne)
			this.render()
		},
		template: {
			'singleInfoTem': require('singleManageInfoTem'),
			'modifyTem':     require('managerModifyTem'),
		},
		render () {
			let template = this.template.singleInfoTem
			this.$el.html(mustache.render(template, this.model.toJSON()))
		},
		cancel () {
			this.render()
		},
		modifyRender (e) {
			let target = $(e.target)
			let template = this.template.modifyTem
			console.log(template)
			console.log(this.model.toJSON())
			this.$el.html(mustache.render(template, this.model.toJSON()))
		},
		modify () {
			let data = {
			    "adminAccount":  this.$("input[name = adminAccount]").val(),
			    "adminPhone": 	 this.$("input[name = adminPhone]").val(),
			    "adminName":     this.$("input[name = adminName]").val()
			}
			console.log(this.model)
			this.model.save(data)
		},
		deleteOne (e) {
			let self = this
			if(e.target) {
			  	$( "#dialog-confirm" ).dialog({
			    	resizable: false,
			    	height:180,
			    	modal: true,
			    	buttons: {
				        "Delete": function() {
				        	self.model.destroy()
				        	$( this ).dialog( "close" )
				        },
				      	Cancel: function() {
				        	$( this ).dialog( "close" )
				    	}
			    	}
			 	})
			} else {
				this.model.destroy()
			}
		},
		markOne () {
			let count = 0
			let inputs = $("input.info")
			let length = inputs.length
			this.model.isMarked = !this.model.isMarked
			inputs.each(function () {
				if(!$(this).prop("checked")) {
					$(".markall").prop("checked", false)
					return
				}
				count++
			})
			if(count == length){
				$(".markall").prop("checked", true)
			}
		}
	})
	return View
})