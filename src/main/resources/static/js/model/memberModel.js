define(function(require) {
	let Model = Backbone.Model.extend({
		urlRoot:  '/member',
	    validate: function(attrs, options) {
	    	if(attrs.cardNumber == "" || attrs.memberName == "" || attrs.memberPassword == "" || attrs.memberPhone == "" || attrs.memberRank == "" || attrs.money == "" || attrs.status === ""){
	    		return "参数不全"
	    	}
	    }
	})
	return Model
})