define(function(require) {
	require('underscore')
	require('backbone')
	let discountModel = require('discountModel')
	let $ = require('jquery') 
	let Collection = Backbone.Collection.extend({
		url: '/memberRank',
		model: discountModel,
		parse: function(response) {
		    return response.result
		}
	})
	return Collection
})