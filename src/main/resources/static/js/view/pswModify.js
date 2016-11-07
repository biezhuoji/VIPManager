define(function (require) {
	let collection = require('memberCollection')
	let mustache = require('mustache')
	let Tip = require('tips')
	let View = Backbone.View.extend({
		el: '.main',
		events: {
			'click button.pswbtn':  'pswModify',
			'click .maskbutton':    'hideMask',
		},
		initialize () {
			this.$("#mask").show(); 
			this.collection = new collection()
			this.listenTo(this.collection, 'reset', this.infoRender)
			this.render()
		},
		template: {
			'pswTem':        require('pswTem'),
			'maskRenderTem': require('maskRenderTem'),
		},
		showMask () {  
		    this.$("#mask").css("height",$(".bottompanel").height());     
		    this.$("#mask").css("width",$(".bottompanel").width());     
		    this.$("#mask").show();    
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
			let template = this.template.pswTem
			let data = []
			this.$el.html(mustache.render(template, data))
			this.showMask()
			this.$("#mask").html(this.template.maskRenderTem)
			this.$('.maskbutton').html("开始修改")
		},
		infoRender () {
			let template = this.template.pswTem
			let data = []
			let self = this
			if(this.collection.length > 0){
				this.$("#mask").hide()
				this.collection.forEach(function (model) {
					data = model.toJSON()
					self.model = model
				})
				this.status = data.status
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
		pswModify () {
			let self = this
			let newpsw = this.$("#newpsw").val()
			let pswconfirm = this.$("#pswconfirm").val()
			let data
			if(newpsw == pswconfirm && this.status == '1'){
				data = {
					"cardNumber": 		 this.cardNumber,
				    "oldMemberPassword": this.$("#originpsw").val(),
				    "newMemberPassword": this.$("#newpsw").val(),
				}
				$.ajax({
					type: "PUT",
					url: '/member/updatePassword',
					contentType: "application/json; charset=utf-8",
					data: JSON.stringify(data),
					dataType: 'json',
					success: function (resp) {
						new Tip(resp.status.message)
						if(resp.status.code == 1){
					  		self.render()
						}
					},
					error: function () {
						console.log("error");
					}
				})
			} else if(self.status == "0") {
				new Tip("该卡已经挂失，无法修改密码")
			} else {
				new Tip("密码输入不一致")
			}
			
		},
	})
	return View
})