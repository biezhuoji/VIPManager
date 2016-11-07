define(function (require) {
	let Mustache = require('mustache')
	let Tip = require('tips')
	var singleMemberView = Backbone.View.extend({
		tagName:'tr',
		events:{
			'click a.deleteSingleMember':'deleteSingleMember',
			'click a.modify':'modify',
			'click a.memberModify':'saveChange',
			'click a.cancel':'cancelChange',
			'click a.active': 'active',
		},
		initialize:function(){
			this.render()
			this.listenTo(this.model,'destroy',this.remove)
			this.active = false
			this.listenTo(this.model,'sync', function () {
				if(this.active) {
					new Tip('激活成功')
					this.$('#active').remove()
				    this.active = false
				}
				else {
					new Tip('修改成功')
					this.render()
				}
				
			})
		},
		template: {
			"singleMemberInfoTem": require('singleMemberInfoTem'),
			"modifyMemberTem":     require('modifyMemberTem')
		},
		render:function() {
			var template = this.template.singleMemberInfoTem
			var data = this.model.toJSON()
			if(data.status == '1') {
				data.status = '正常'
				data.opertion = ''
			} else {
				data.status = '挂失'
				data.opertion = '激活'
			}
			this.$el.html(Mustache.render(template,data))
		},
		deleteSingleMember:function (){
			this.model.destroy()
		},
		modify:function(e){
			var $target = $(e.target)
			var template = this.template.modifyMemberTem
			$target.parent().parent().html(Mustache.render(template,this.model.toJSON()))
		},
		saveChange:function(){
			var data = {
				'cardNumber':$('input[name=cardNumber]').val(),
				'memberRank':$('.memberrank option:selected').val(),
				'memberName':$('input[name=memberName]').val(),
				'memberPhone':$('input[name=memberPhone]').val(),
				'cardType':$('input[name=cardType]').val(),
				'money':$('input[name=money]').val()
			}
			this.model.set(data)
			this.model.save()
		},
		cancelChange:function() {
			this.render()
		},
		active () {
			let data = this.model.toJSON()
			this.active = true
			data.status = 1
			this.model.save(data)
		}
	})
	return singleMemberView
})