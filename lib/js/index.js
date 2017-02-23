'use strict';
$(function(){
	var speed = -2;
	var lastTime = new Date();
	var curTime = 0;
	var delta = 0;
	var waterW = $('.water').outerWidth();
	var waterLen =  $('.water').length - 1;
	$('.water').each(function(i,v){
		this.left = parseInt((waterW - 0.11*waterW) * i);
		v.style.left = this.left +"px";
	}).on('mouseenter',function(){
		speed = -0.8;
	}).on('mouseleave',function(){
		speed = -2;
	})

var timer = setInterval(function(){
		$('.water').each(function(i,v){
			v.left += speed/330 * waterW;
			$(this).css('left', v.left + "px");
			if( v.left <= -waterW ){
				v.left+= waterW * waterLen;
			}
		})
	}, 10)	
})
