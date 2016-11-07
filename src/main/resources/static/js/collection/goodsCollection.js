define(function(require) {
	require('underscore')
	require('backbone')
	var goodsModel = require('goodsModel')
	var $ = require('jquery') 
	var Collection = Backbone.Collection.extend({
		url: '/goods',
		model: goodsModel,
		parse: function(response) {
		    return response.result
		}
	})
	return Collection
})