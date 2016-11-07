define(function (require) {
	let collection = require('manageCollection')
	let singleManageInfoView = require('singleManageInfo')
	let router = new Backbone.Router()
	let View = Backbone.View.extend({
		el: '.main',
		events: {
			'click button.add': 		'save',
			'click .glyphicon-search':  'search',
			'click .markall': 			'markAll',
			'click button.del':         'remove',
			'click a[name=page]':       'switchPage',
		},
		initialize () {
			this.collection = new collection
			this.collection.fetch({reset: true})
			this.listenTo(this.collection, 'reset', function(){
				this.manageInfo()
			})
			this.listenTo(this.collection, 'remove', function() {
				this.manageInfo()
			})
			this.render()
		},
		data: {
			'num':        3,
			'pageCount':  0,
		},
		template: {
			listTem:   require('managerListTem'),
			modifyTem: require('managerModifyTem')
		},
		render () {
			let template = this.template.listTem
			this.$el.html(template)
		},
		manageInfo () {
			this.html = []
			let self = this
			this.collection.forEach( function (model) {
				self.html.push(new singleManageInfoView({model:model}).el)
			})
			this.$(".tbody").html(this.html.slice(0,this.data.num))
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
			this.$(".tbody").html(this.html.slice(start, end))
		},
		remove () {
			let models = []
			let self = this
			this.collection.forEach( function (model) {
				if(model.isMarked) {
					models.push(model)
				}
			})
			this.isRemoved = true
			$( "#dialog-confirm" ).dialog({
		    	resizable: false,
		    	height:180,
		    	modal: true,
		    	buttons: {
			        "Delete": function() {
			        	self.collection.remove(models)
			        	$( this ).dialog( "close" )
			        },
			      	Cancel: function() {
			        	$( this ).dialog( "close" )
			    	}
		    	}
	     	})
		},
		markAll () {
			if(this.$(".markall").prop("checked")) {
				this.$("input.info").each(function () {
					$(this).prop("checked", true)
				})
				this.collection.forEach( function (model) {
					model.isMarked = true
				})
			}
			else {
				this.$("input.info").each(function () {
					$(this).prop("checked", false)
				})
				this.collection.forEach( function (model) {
					model.isMarked = false
				})
			}
		},
		search () {
			let value = this.$(".searchval").val()
			this.collection.fetch({reset: true, data:{key:value}})
			router.navigate("manage/search")	
		}
	})
	return View
})