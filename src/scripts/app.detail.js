/**
 * Created by Administrator on 2016/9/13.
 */
var $ = require('./libs/jquery.js');

var common = require('./util/common.util.js');

var tplHeader = require('./tpls/header.string');
var tplDetailBody = require('./tpls/detail.body.string');
var tplFoot = require('./tpls/foot.string');

$(function () {
    common.renderHtml(tplHeader + tplDetailBody + tplFoot);
})