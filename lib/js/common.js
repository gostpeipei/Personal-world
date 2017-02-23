(function(){
	function getClient() {
    return {
        width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0,
   		 }
	}
	// 在640px屏幕下字体为64px  
	function setFontSize(){
		var oHtml = document.documentElement;
		var screenWidth = oHtml.offsetWidth;
		var newfontSize = screenWidth/(640/64);
		oHtml.style.fontSize = newfontSize + "px";

		// 同时设置html元素的宽高
		if(window.screen.width <= 640){
			oHtml.style.width = window.screen.width + "px"
			oHtml.style.height = window.screen.height + "px"
		}else{
			oHtml.style.width = getClient().width + "px"
			oHtml.style.height = getClient().height + "px"
		}

		console.log(oHtml.style.width,oHtml.style.height)
	}
	setFontSize();

	window.addEventListener("resize",function(){
		setFontSize();
	})
})()

