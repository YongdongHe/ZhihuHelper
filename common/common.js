console.log('知乎小助手已启用');
function injectJS(){
	$.get(chrome.extension.getURL('jquery.js'), function(data){
	    var domHead = document.getElementsByTagName('HEAD').item(0); 
		var domScript= document.createElement("script"); 
		domScript.type ="text/javascript"; 
		domScript.text= data;
		domHead.appendChild(domScript); 	
		console.log('jQuery is loaded.')
		initUI();
	});
}

function initUI(){
	initImagerUI();
}
function initImagerUI(){
	$.get(chrome.extension.getURL('imager/imager.html'), function(data){
	    $("body").append(data);
	    $('#btn_imager').click(function(event) {
    		openImagerWindow();
    	});
	});
}
setTimeout(initHelper,1000);
function initHelper(){
	injectJS();
}


