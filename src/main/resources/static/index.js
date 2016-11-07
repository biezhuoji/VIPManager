/*
 * html to js
 * Author : mukezhai@gmail.com
 * Date : 2015-06-03
 */

var through = require('through2')
var gutil = require('gulp-util')
var fs = require('fs')

/*
 * 删除没有对应html文件的js文件
 * param { String } path 文件路径
 */
function checkExist(path){
	if(!fs.existsSync(path)){
        fs.unlinkSync(path + '.js')
        gutil.log('delete:', path + '.js')
    }
}

function removeSpace(content){
    var lines = content.split(/[\r\n]/g)
    var result = []
    for(var i=0,l=lines.length; i<l; i++){
        result.push(lines[i].trim())
    }
    return result.join('')
}

/*
 * 插件入口函数
 */
function html2js(){
	return through.obj(function(file, enc, callback){
        if(file.isBuffer()){
        	if(file.path.lastIndexOf('.html.js') == file.path.length - 8){
        		checkExist(file.path.substring(0, file.path.length - 3))
        	}
        	if(file.path.lastIndexOf('.html') != file.path.length - 5){
        		return callback()
        	}
        	var tpl = file.contents.toString()
            tpl = removeSpace(tpl)
		    tpl = tpl.replace(/\"/g,"\\\"")
		    tpl = tpl.replace(/\'/g,"\\'")
		    tpl = tpl.trim()
		    tpl = 'define(function(require){ return \'' + tpl + '\'})'
		    fs.writeFileSync(file.path + '.js', tpl)
		    gutil.log('compile:', file.path)
        	callback(null, file)
        }
        else{
            callback(null, file)
        }
    })
}

module.exports = html2js
