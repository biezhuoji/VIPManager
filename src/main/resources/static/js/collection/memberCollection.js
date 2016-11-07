define(function(require) {
	require('underscore')
	require('backbone')
	let memberModel = require('memberModel')
	let $ = require('jquery') 
	let Collection = Backbone.Collection.extend({
		url: '/member',
		model: memberModel,
		parse: function(response) {
		    return response.result
		}
	})
	return Collection
})