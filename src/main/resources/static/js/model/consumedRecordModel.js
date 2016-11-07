define(function(require) {
	require('underscore')
	require('backbone')
	var $ = require('jquery') 
	var Model = Backbone.Model.extend({
		urlRoot:  '/consumedRecord',
	})
	return Model
})