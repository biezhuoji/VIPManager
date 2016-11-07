define(function(require) {
	require('underscore')
	require('backbone')
	let consumeRecordModel = require('consumeRecordModel')
	let $ = require('jquery') 
	let Collection = Backbone.Collection.extend({
		url: '/consumeRecord',
		model: consumeRecordModel,
		parse: function(response) {
		    return response.result
		}
	})
	return Collection
})