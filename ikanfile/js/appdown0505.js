$(function() {
if(MAC.UserAgent.mobile){
var appdw1 = '/*<div class="layui-waper"><div class="layer-iframe"><div class="layer-content layer_notice"><a href="javascript:;" class="close">进入情趣吧</a><a href="/art/detail/16830.html" class="link">免费领VIP会员</a></div></div></div>*/';
(function() {
    if (!isWeiXin()) {
        if ($.cookie('appdw1') == null) {
            $('body').append(appdw1);
            setTimeout(function() {
				$("body").addClass("hidden");
			},
            10);
        }
    }
    function isWeiXin() {
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            return true;
        } else {
            return false;
        }
    }
})();
}else{
var appdw2 = '<div class="layer-shade"></div><div class="layui-layer"><div class="layer-wraper anim-scale"><div class="layer-poster"><a href="/art/detail/16830.html" target="_blank"></a></div><div class="layer-content"><span class="layer-title">APP</span><p>开发中，即将上线，敬请期待！</p><div class="code"></div><a class="link" href="/art/detail/16830.html" target="_blank">免费领取VIP会员</a><a class="close" href="javascript:;"></a></div></div></div>';
(function() {
    if (!isWeiXin()) {
        if ($.cookie('appdw2') == null) {
            $('body').append(appdw2);
            setTimeout(function() {
            },
            500);
        }
    }
    function isWeiXin() {
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            return true;
        } else {
            return false;
        }
    }
})();
 }
});
$(document).ready(function(){
  $(".layui-waper a").click(function(){ 
    $(".layui-waper").remove();
	$("body").removeClass("hidden");
	$.cookie('appdw1', 'the_value', { expires: 1, path: '/' });
  }); 
   $(".layui-layer a").click(function(){ 
	$(".layer-shade").remove();
	$(".layui-layer").remove();
	$.cookie('appdw2', 'the_value', { expires: 1, path: '/' });
  }); 
});