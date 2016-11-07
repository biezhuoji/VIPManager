define(function(require) {
	require('underscore')

	require('backbone')

	let $ = require('jquery') 

	let registerView = require('register')

	let lossView = require('loss')

	let pswView = require('pswModify')

	let managerListView = require('managerList')

	let addAdminView = require('addAdmin')

	let setDiscountView = require('setDiscount')

	let goodregisterView = require('goodRegister')

	let goodmanageView = require('goodList')

	let memberListView = require('memberView')

	let depositView = require('deposit')

	let moneyOutView = require('moneyOut')

	let withdrawView = require('withdraw')

	let goodConsumeView = require('createOrderForm')

	let consumedList = require('consumedList')

	let orderListView = require('orderListView')

	var Router = Backbone.Router.extend({
		routes: { 
			'':                    'firstPage',
			'member/register':     'registerPage',
			'member/loss': 	       'lossPage',
			'member/pswModify':    'pswModifyPage',
			'manage/add':          'addManager',
			'manage/list':         'managerListPage',
			'member/setDiscount':  'setDiscountPage',
			'goods/goodregister':  'goodRegisterPage',
			'goods/goodmanage':    'goodManagePage',
			'member/list':    	   'memberListPage',
			'money/deposit':       'depositPage',
			'money/out': 		   'moneyOutPage',
			'money/withdraw':      'withdrawPage',
			'consume/order':       'goodConsumePage',
			'consume/list':        'consumeListPage',
			'consume/orderList':   'orderListPage'
		},
		initialize () {
			this.view = []
		},
		firstPage () {
			$(".main").html('')
		},
		clearView () {
			if(this.view.length > 0){
				$.each(this.view, function() {
					this.$el.empty().off()
				})
				this.view = []
			}
		},
		addManager () {
			this.clearView()
			let view = new addAdminView
			this.view.push(view)
		},
		managerListPage () {
			this.clearView()
			let view = new managerListView
			this.view.push(view)
		},
		registerPage () {
			this.clearView()
			let view = new registerView
			this.view.push(view)
		},
		lossPage () {
			this.clearView()
			let view = new lossView
			this.view.push(view)
		},
		pswModifyPage () {
			this.clearView()
			let view = new pswView
			this.view.push(view)
		},
		setDiscountPage () {
			this.clearView()
			let view = new setDiscountView
			this.view.push(view)
		},
		goodRegisterPage () {
			this.clearView()
			let view = new goodregisterView
			this.view.push(view)
		},
		goodManagePage () {
			this.clearView()
			let view = new goodmanageView
			this.view.push(view)
		},
		memberListPage () {
			this.clearView()
			let view = new memberListView
			this.view.push(view)
		},
		depositPage () {
			this.clearView()
			let view = new depositView
			this.view.push(view)
		},
		moneyOutPage () {
			this.clearView()
			let view = new moneyOutView
			this.view.push(view)
		},
		withdrawPage () {
			this.clearView()
			let view = new withdrawView
			this.view.push(view)
		},
		goodConsumePage () {
			this.clearView()
			let view = new goodConsumeView
			this.view.push(view)
		},
		consumeListPage () {
			this.clearView()
			let view = new consumedList
			this.view.push(view)
		},
		orderListPage() {
			this.clearView()
			let view = new orderListView
			this.view.push(view)			
		}

	})
	return Router
})