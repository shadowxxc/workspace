/**
 * Created by Administrator on 2016/9/13.
 */
var $ = require('./libs/jquery.js');

var common = require('./util/common.util.js');

var tplHeader = require('./tpls/header.string');
var tplIndex = require('./tpls/index-body.string');
var tplFoot = require('./tpls/foot.string');

var list = require('./modules/index.js');

$(function () {
    common.renderHtml(tplHeader + tplIndex + tplFoot);
    list();
})