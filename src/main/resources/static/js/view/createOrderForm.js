define(function(require) {
	let memberCollection = require('memberCollection')
	let consumeRecordCollection = require('consumeRecordCollection')
	let mustache = require('mustache')
	let Tip = require('tips')
	let View = Backbone.View.extend({
		el: '.main',
		events: {
			'click .maskbutton': 	   'hideMask',
			'click .glyphicon-search': 'search',
			'dblclick tr':             'orderRender',
			'input #count':            'compute',
			'input #ordernum':         'validate',
			'click .submitbtn':        'orderCreate',
			'click .saveorder':        'orderCreate',
			'click a[name=page]':      'switchPage',
		},
		initialize () {
			this.Regex = /^[0-9].*$/
			this.collection = {
				"memberCollection": new memberCollection(),
				"consumeRecordCollection": new consumeRecordCollection()
			}
			this.listenTo(this.collection.memberCollection, 'reset', this.infoRender)
			this.listenTo(this.collection.consumeRecordCollection, 'sync', function (resp) {
				let status  = resp.attributes.status
				if(status.code == '1') {
					console.log(this.isCompleted)
					if(this.isCompleted) {
						this.orderComplete()
					} else {
						new Tip('订单创建成功')
						this.render()
					}
				} else {
					if(!this.isCompleted) {
						this.$('#ordernum').addClass('has-error')
						this.$('p.ordernumerr').html(status.message)
					}
				}
			})
			this.render()
		},
		data: {
			'num':        4,
			'pageCount':  0,
		},
		template: {
			'createOrderTem':  require('createOrderTem'),
			'goodInfoTem':     require('goodInfoTem'),
			'maskRenderTem':   require('maskRenderTem'),
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
			this.collection.memberCollection.fetch({reset: true, data: {key:value}})
		},
		render () {
			let template = this.template.createOrderTem
			let data = []
			this.isCompleted = false
			this.$el.html(mustache.render(template, data))
			this.showMask()
			this.$("#mask").html(this.template.maskRenderTem)
			this.$('.maskbutton').html("会员消费")
		},
		compute () {
			let count = this.$("#count").val()
			let price = this.$("#price").val()
			let discount = this.discount
			let regex = /^[1-9]*[1-9][0-9]*$/
			if(!this.goodCount) {
				this.$('p.counterr').html('请先选择商品')
				return false
			}
			if(regex.test(count) && this.goodCount) {
				if(this.goodCount >= parseFloat(count)) {
					this.$('#goodcount').removeClass('has-error')
					this.$('#goodcount').addClass('has-success')
					this.$('p.counterr').html('')
					let allPrice = count * price
					let disMoney = parseFloat(allPrice * discount)
					if(parseFloat(this.money) >= disMoney) {
						this.$('#account').val(allPrice)
						this.$('#dismoney').val(disMoney)
						this.isEnough = true
					} else {
						this.$('#goodcount').removeClass('has-success')
						this.$('#goodcount').addClass('has-error')
						this.$('p.counterr').html('余额不足,不能完成支付')
						this.isEnough = false
					}
				} else {
					this.$('#account').val('')
					this.$('#dismoney').val('')
					this.$('#goodcount').removeClass('has-success')
					this.$('#goodcount').addClass('has-error')
					this.$('p.counterr').html('库存不足')
				}
			} else {
				this.$('#account').val('')
				this.$('#dismoney').val('')
				this.$('#goodcount').removeClass('has-success')
				this.$('#goodcount').addClass('has-error')
				
				if(count == '') {
					this.$('p.counterr').html('请填入商品数量')
				} else {
					this.$('p.counterr').html('商品数量应为正整数')
				}				
			}
		},
		orderRender (e) {
			let target = $(e.target)
			let td = target.parent().children()
			this.goodCount = parseFloat($(td[3]).html())
			this.$('#goodname').val($(td[0]).html())
			this.$('#goodnum').val($(td[1]).html())
			this.$('#price').val($(td[2]).html())

			this.$('#goodcount').removeClass('has-error')
			this.$('#goodcount').addClass('has-success')
			this.$('p.counterr').html('')
			this.$('#count').val('')

		},
		orderCreate (e) {
			let target = $(e.target)
			let count = this.$("#count").val()
			let orderNum = this.$("#ordernum").val()
			this.ordernum = orderNum
			if(this.status == '0') {
				new Tip('该卡已经挂失,无法购买商品')
				return false
			}
			if(orderNum == '') {
				this.$('#ordernum').addClass('has-error')
				this.$('p.ordernumerr').html('订单号不能为空')
				return false
			}
			if(count == '') {
				this.$('#goodcount').addClass('has-error')
				this.$('p.counterr').html('请填入商品数量')
				return false
			}
			
			if(target.attr('class') == 'btn btn-primary saveorder') {
				this.isCompleted = false
			} 
			if(!this.isEnough) {
				this.$('#goodcount').removeClass('has-success')
				this.$('#goodcount').addClass('has-error')
				this.$('p.counterr').html('余额不足,不能完成支付')
				return false
			}
			if(this.isCompleted) {
				this.orderComplete()
			} else {
				if(target.attr('class') == 'btn btn-primary submitbtn') {
					this.isCompleted = true
				}
				if(count <= parseFloat(this.goodCount)) {
					let data = {
						"cardNumber": this.$("#cardnum").val(),
						"goodsNumber":this.$('#goodnum').val(),
						"orderNumber": orderNum,
						"goodsCount": count
					}
					this.collection.consumeRecordCollection.create(data)
				} else {
					this.$('#goodcount').addClass('has-error')
					this.$('p.counterr').html('库存不足')
				}
			}
		},
		orderComplete () {
			let self = this
			$.ajax({
				url:'/orderSettlement',
				data: JSON.stringify({
					"orderNumber": self.ordernum
				}),
				dataType:'json',
				contentType:'application/json;charset=UTF-8',
				type: "POST",
				success: function (resp) {
					new Tip('订单结算成功')
					self.render()
				},
				error: function () {
					console.log("error")
				}	
			})
			
		},
		search () {
			let goodName = this.$(".searchval").val() 
			let self = this
			$.ajax({
				url:'/goods',
				data: {
					"key": goodName
				},
				dataType:'json',
				type: "GET",
				success: function (resp) {
					$.each(resp.result, function () {
						this.discount = self.discount
					})
					self.html = resp.result
					self.$(".mybody").html(mustache.render(self.template.goodInfoTem, self.html.slice(0,self.data.num)))
					self.data.pageCount = Math.ceil(self.html.length/self.data.num)
					self.pagination()
				},
				error: function () {
					console.log("error")
				}	
			})
		},
		infoRender () {
			let template = this.template.createOrderTem
			let data = []
			let self = this
			if(this.collection.memberCollection.length > 0){
				this.$("#mask").hide()
				this.collection.memberCollection.forEach(function (model) {
					data = model.toJSON()
				})
				this.money = data.money
				this.status = data.status
				this.$el.html(mustache.render(template, data))
				$.ajax({
					url: '/memberRank/discount',
					type: 'GET',
					dataType: 'JSON',
					contentType:"application/json; charset=UTF-8",
					data: {
						"memberRank": data.memberRank
					}
				})
				.done(function(resp) {
					self.discount = resp.result.discount
				})
				.fail(function(err) {
					console.log(err)
				})
			} else {
				new Tip("该会员不存在")
			}
		},
		validate () {
			let orderNum = this.$('#ordernum').val()
			if(orderNum != '' ) {
				this.$('#ordernum').removeClass('has-error')
				this.$('#ordernum').addClass('has-success')
				this.$('p.ordernumerr').html('')
			}
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
			this.$(".mybody").html(mustache.render(this.template.goodInfoTem,this.html.slice(start, end)))
		},
	})
	return View
})