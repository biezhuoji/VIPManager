define(function(require) {
	require('jquery-ui')
	require('underscore')
	require('backbone')
	let $ = require('jquery')
	let Router = require('router')
	let router = new Router()
	let View = Backbone.View.extend({
		el: '#body',
		events: {
			'click .firstpage':    	   'render',
			'click .registermenu': 	   'registerPage',
			'click .lossmenu': 	   	   'lossPage',
			'click .pswmenu': 	   	   'pswPage',
			'click .addmanagermenu':   'addAdminPage',
			'click .managerlistmenu':  'managerList',
			'click .glyphicon-remove': 'close',
			'click .setdiscountmenu':  'setDiscount',
			'click .goodregister':     'goodRegisterPage',
			'click .goodmanage':  	   'goodManagePage',
			'click .memberlistmenu':   'memberListPage',
			'click .depositmenu':      'depositPage',
			'click .moneyoutmenu':     'moneyOutPage',
			'click .withdrawmenu':     'withdrawPage',
			'click .goodconsumemenu':  'goodConsumePage',
			'click .cousumelist':      'cousumeListPage',
			'click #logout':           'logOut',
			'click .orderList':        'orderListPage'
		},
		initialize () {
			this.render()
		},
		render () {
			if(localStorage) {
				let user = localStorage.getItem("login_name")
				this.$(".username").html(user)
			}
			this.$( "#accordion" ).accordion();
			// router.navigate("", {trigger: true})	

		},
		close (e) {
			e.stopPropagation()
			let self = this
			let target = $(e.target)
			let currentLi = target.parent()
			let preLi = currentLi.prev()
			let klass = preLi.attr("class")
			let li = currentLi.siblings()
			$.each(li, function () {
				if($(this).css("background") == '#94E1F6') {

				}
			})
			preLi.css("background","#94E1F6")
			currentLi.remove()
		},
		menuList (e) {
			let html = e.html()
			let tagName = e.prop('tagName')
			let li = this.$(".menulist li")
			let klass = e.attr('class')
			let isExited = false
			let currentLi = this.$("li."+klass)
			$.each(li, function() {
				if(this.className == klass) {
					isExited = true
				}
				$(this).css("background","#F1F9FA")
			})
			if(tagName == 'P' && !isExited) {
				this.$(".menulist").append('<li class='+klass+' style="background:#94E1F6">'+html+'<span class="glyphicon glyphicon-remove"></span></li>')
			}
			if(isExited) {
				currentLi.css("background","#94E1F6")
			}
		},
		addAdminPage (e) {
			let target = $(e.target)
		    this.menuList(target)
		    router.navigate("manage/add", {trigger: true})	
		},
		managerList (e) {
			let target = $(e.target)
		    this.menuList(target)
		    router.navigate("manage/list", {trigger: true})	
		},
		registerPage (e) {
			let target = $(e.target)
			this.menuList(target)
			router.navigate("member/register", {trigger: true})	
		},
		lossPage (e) {
			let target = $(e.target)
			this.menuList(target)
			router.navigate("member/loss", {trigger: true})	
		},
		pswPage (e) {
			let target = $(e.target)
		    this.menuList(target)
		    router.navigate("member/pswModify", {trigger: true})	
		},
		setDiscount (e) {
			let target = $(e.target)
		    this.menuList(target)
		    router.navigate("member/setDiscount", {trigger: true})	
		},
		goodRegisterPage (e) {
			let target = $(e.target)
		    this.menuList(target)
		    router.navigate("goods/goodregister", {trigger: true})	
		},
		goodManagePage (e) {
			let target = $(e.target)
		    this.menuList(target)
		    router.navigate("goods/goodmanage", {trigger: true})	
		},
		memberListPage (e) {
			let target = $(e.target)
		    this.menuList(target)
		    router.navigate("member/list", {trigger: true})
		},
		depositPage (e) {
			let target = $(e.target)
		    this.menuList(target)
		    router.navigate("money/deposit", {trigger: true})
		},
		moneyOutPage (e) {
			let target = $(e.target)
		    this.menuList(target)
		    router.navigate("money/out", {trigger: true})
		},
		withdrawPage (e) {
			let target = $(e.target)
		    this.menuList(target)
		    router.navigate("money/withdraw", {trigger: true})
		},
		goodConsumePage (e) {
			let target = $(e.target)
		    this.menuList(target)
		    router.navigate("consume/order", {trigger: true})
		},
		cousumeListPage (e) {
			let target = $(e.target)
		    this.menuList(target)
		    router.navigate("consume/list", {trigger: true})
		},
		logOut () {
			$.ajax({
				type: 'GET',
				url: '/quit',
				success: function(resp) {
					window.location.href="/"+resp
				}
			})			
		},
		orderListPage (e){
			let target = $(e.target)
			this.menuList(target)
			router.navigate("consume/orderList",{trigger: true})
		}
	})
	new View
})