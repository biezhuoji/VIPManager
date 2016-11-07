define(function(require) {
	require('underscore')
	require('backbone')
	let $ = require('jquery') 
	let Model = Backbone.Model.extend({
		urlRoot:  '/admin',
	    isMarked: false,
	    validate: function(attrs, options) {
	       if (attrs.adminAccount == "") {
	         	return "请输入账户名"
	       }
	       if (attrs.adminPassword == "") {
	         	return "请输入密码"
	       }
	     }
	})
	return Model
})