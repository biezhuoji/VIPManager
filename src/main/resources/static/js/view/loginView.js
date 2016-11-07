define(function (require) {
	//var _ = require('underscore')
	var backbone = require('backbone')
	var $ = require('jquery')
	//var Mustache = require('mustache')
	
	var User = Backbone.Model.extend({
		validate: function() {
		   	var Tip = require('tips')
			
			var password = $("#passwordInput").val()
			if(!(/^[0-9]+$/i.test(password)) || (password.length<6)){
			 	new Tip('请输入6个以上的字母、数字、下划线组合');
			}
			
			var userName = $("#adminInput").val()
				if(!(/^\w+$/i.test(password)) || (password.length<1)){
				 	new Tip('请输入字母、数字组合');
				}
			}
 	})

	var UserView = Backbone.View.extend({
		events:{
			'click button[name=submitBtn]':'submitInfo'
		},
		submitInfo:function (){
			var adminAccount = this.$("#adminInput").val()
			var adminPassword = this.$("#passwordInput").val()
			
			var data = {
				'adminAccount':adminAccount,
				'adminPassword':adminPassword
			}

			this.model.create(data)
			this.model.fetch({reset:true})
		}
		
	})

	

	
})
