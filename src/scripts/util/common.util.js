/**
 * Created by Administrator on 2016/9/13.
 */

var $ = require('../libs/jquery.js');
var common ={
    renderHtml :function(str){
        $('body').prepend(str)
    }
}
module.exports = common;