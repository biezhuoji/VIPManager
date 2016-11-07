define(function(require) {
	let collection = require('memberCollection')
	let mustache = require('mustache')
	let Tip = require('tips')
	let View = Backbone.View.extend({
		el: '.main',
		events: {
			'click .maskbutton': 	   'hideMask',
			'click .lossbtn':          'confirm',
		},
		initialize () {
			this.$("#mask").show(); 
			this.collection = new collection()
			this.listenTo(this.collection, 'reset', this.infoRender)
			this.render()
		},
		template: {
			'lossTem':       require('lossTem'),
			'maskRenderTem': require('maskRenderTem'),
		},
		showMask () {  
		    this.$("#mask").css("height",$(".bottompanel").height());     
		    this.$("#mask").css("width",$(".bottompanel").width());     
		    this.$("#mask").show()   
		},
		hideMask () { 
			let value = this.$('.maskvalue').val() 
			this.cardNumber = value  
			if(value == '') {
				new Tip("请填入卡号")
				return false
			}
			this.collection.fetch({reset: true, data: {key:value}})
		},
		render () {
		    console.log($("#mask"))
			let template = this.template.lossTem
			let data = []
			this.$el.html(mustache.render(template, data))
			this.showMask()
			this.$("#mask").html(this.template.maskRenderTem)
			this.$('.maskbutton').html("挂失")
		},
		infoRender () {
			let template = this.template.lossTem
			let data = []
			if(this.collection.length > 0){
				this.$("#mask").hide()
				this.collection.forEach(function (model) {
					data = model.toJSON()
				})
				if(data.status == '1') {
					data.status = '正常'
				}
				else {
					data.status = '挂失'
				}
				this.$el.html(mustache.render(template, data))
			} else {
				new Tip("该会员不存在")
			}
		},
		confirm () {
			let self = this
			let value = this.$('#losscardstate').val()
			if(value == "挂失")　{
				this.$('.losstip').html("该卡已经挂失")
				setTimeout(function () {
			    	self.render()
			    }, 3000)
			}　else {
				let data = {
				    "cardNumber": this.cardNumber,
				    "status": 0
				}
				$.ajax({
					url: '/member/updateStatus',
					type: 'PUT',
					dataType: 'JSON',
					contentType:"application/json; charset=UTF-8",
					data: JSON.stringify(data)
				})
				.done(function(resp) {
					console.log(resp);
					new Tip("会员挂失成功")
				    self.render()
				})
				.fail(function() {
					new Tip("会员挂失失败")
				})
				.always(function() {
					console.log("complete");
				});
			}
		}
	})
	return View
})