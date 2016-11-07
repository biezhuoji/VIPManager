define(function(require) {
	let collection = require('memberCollection')
	let mustache = require('mustache')
	let Tip = require('tips')
	let View = Backbone.View.extend({
		el: '.main',
		events: {
			'click .maskbutton': 	   'hideMask',
			'click .depositbtn':       'confirm',
			'input #money':            'validate',
		},
		initialize () {
			this.Regex = /^[0-9].*$/
			this.collection = new collection()
			this.listenTo(this.collection, 'reset', this.infoRender)
			this.render()
		},
		template: {
			'moneyOutTem':    require('moneyOutTem'),
			'maskRenderTem':  require('maskRenderTem'),
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
			let template = this.template.moneyOutTem
			let data = []
			this.$el.html(mustache.render(template, data))
			this.showMask()
			this.$("#mask").html(this.template.maskRenderTem)
			this.$('.maskbutton').html("转账")
		},
		infoRender () {
			let template = this.template.moneyOutTem
			let data = []
			if(this.collection.length > 0){
				this.$("#mask").hide()
				this.collection.forEach(function (model) {
					data = model.toJSON()
				})
				this.status = data.status
				this.$el.html(mustache.render(template, data))
			} else {
				new Tip("该会员不存在")
			}
		},
		confirm () {
			let self = this
			let money = parseFloat(this.$('#money').val())
			let leftmoney = parseFloat(this.$('#leftmoney').val())
			let cardNumberOut = this.$("#cardin").val()
			let data = {
			    "cardNumberIn": cardNumberOut,
		        "cardNumberOut": this.cardNumber,
		        "money": money
			}
			if(cardNumberOut == "") {
				this.$('#cardoutnum').addClass("has-error")
				this.$('p.carderr').html("卡号不能为空")
				return false
			}
			this.collection.fetch({
				reset: false, 
				data: {key:cardNumberOut},
				success: function () {
					let length = self.collection.length
					let status 
					if(length > 0) {
						status = self.collection.toJSON()[0].status
					}
					if(length == 1 && status == '1') {
						if(self.status == '1' && self.Regex.test(money) && money <= leftmoney) {
							$.ajax({
								url: '/moneyMove',
								type: 'PUT',
								dataType: 'JSON',
								contentType:"application/json; charset=UTF-8",
								data: JSON.stringify(data)
							})
							.done(function(resp) {
								new Tip("会员转账成功")
							    self.render()
							})
							.fail(function() {
								new Tip("会员转账失败")
							})
							.always(function() {
								console.log("complete");
							})
						} else {
							if(money == '') {
								self.$('p.moneyerr').html('转账金额不能为空')
							} else {
								new Tip("该会员已经挂失，无法进行转账操作")
							}
						}
					} else {
						self.$('#cardoutnum').addClass("has-error")
						if(status == '0') {
							self.$('p.carderr').html("该卡已挂失，不能进行转入操作")
						} 
						if(length == '0') {
							self.$('p.carderr').html("该卡号不存在")
						}
					}
				}

			})
		},
		validate () {
			let money = parseFloat(this.$('#money').val())
			let leftmoney = parseFloat(this.$('#leftmoney').val())
			let cardNumberOut = this.$("#cardin").val()
			if(!this.Regex.test(money) || money > leftmoney) {
				this.$('#moneyout').removeClass("has-success")
				this.$('#moneyout').addClass("has-error")
				if ( money > leftmoney) {
					self.$('p.moneyerr').html('余额不足')
				} else {
					this.$('p.moneyerr').html('请输入合法金额')
				}
			} else {
				this.$('p.moneyerr').html('')
				this.$('#moneyout').removeClass("has-error")
				this.$('#moneyout').addClass("has-success")
			}

		}
	})
	return View
})