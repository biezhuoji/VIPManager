define(function(require) {
	let collection = require('memberCollection')
	let mustache = require('mustache')
	let Tip = require('tips')
	let View = Backbone.View.extend({
		el: '.main',
		events: {
			'click .maskbutton':   'hideMask',
			'click .depositbtn':   'confirm',
			'input #money':        'validate',
		},
		initialize () {
			this.Regex = /^[0-9].*$/
			this.collection = new collection()
			this.listenTo(this.collection, 'reset', this.infoRender)
			this.render()
		},
		template: {
			'withdrawTem':   require('withdrawTem'),
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
			let template = this.template.withdrawTem
			let data = []
			this.$el.html(mustache.render(template, data))
			this.showMask()
			this.$("#mask").html(this.template.maskRenderTem)
			this.$('.maskbutton').html("提现")
		},
		infoRender () {
			let template = this.template.withdrawTem
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
			let data = {
			    "cardNumber": this.cardNumber,
			    "money": money
			}
			if(this.status == '1' && this.Regex.test(money) && money <= leftmoney) {
				$.ajax({
					url: '/moneyOut',
					type: 'PUT',
					dataType: 'JSON',
					contentType:"application/json; charset=UTF-8",
					data: JSON.stringify(data)
				})
				.done(function(resp) {
					console.log(resp);
					new Tip("会员提现成功")
				    self.render()
				})
				.fail(function() {
					new Tip("会员提现失败")
				})
				.always(function() {
					console.log("complete");
				})
			} else {
				if(money == '') {
					self.$('p.moneyerr').html('提现金额不能为空')
				} else {
					new Tip("该会员已经挂失，无法进行转账操作")
				}
			}
		},
		validate () {
			let money = parseFloat(this.$('#money').val())
			let leftmoney = parseFloat(this.$('#leftmoney').val())
			if(!this.Regex.test(money) || money > leftmoney) {
				this.$('#withdraw').removeClass("has-success")
				this.$('#withdraw').addClass("has-error")
				if ( money > leftmoney) {
					self.$('p.moneyerr').html('余额不足')
				} else {
					this.$('p.moneyerr').html('请输入合法金额')
				}
			} else {
				this.$('p.moneyerr').html('')
				this.$('#withdraw').removeClass("has-error")
				this.$('#withdraw').addClass("has-success")
			}
		}
	})
	return View
})