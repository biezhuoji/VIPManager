define(function(require) {
	require('underscore')
	require('backbone')
	let consumeRecordModel = require('consumeRecordModel')
	let $ = require('jquery') 
	let Collection = Backbone.Collection.extend({
		url: '/consumedRecord',
		model: consumeRecordModel,
		parse: function(response) {
		    return response.result
		}
	})
	return Collection
})