define(function(require) {
	require('underscore')
	require('backbone')
	let manageModel = require('manageModel')
	let $ = require('jquery') 
	let Collection = Backbone.Collection.extend({
		url: '/admin',
		model: manageModel,
		parse: function(response) {
		    return response.result
		}
	})
	return Collection
})