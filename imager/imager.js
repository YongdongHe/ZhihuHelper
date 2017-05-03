
// function getImageMsgByIndex(index){
// 	console.log(index);
// 	$(this).find('img').each(function(index){
// 		console.log(this.src);
// 	});
// }
// $('div.List-item').each(getImageMsgByIndex);


function openImagerWindow(){
	$(".QuestionHeader-title-imager").text($("h1.QuestionHeader-title").eq(0).text());
	if($("#imager_root").is(':visible')){
		$("#imager_root").hide();
		$("#btn_imager").text("看图");
	}else{
		$("#imager_root").show();
		$("#btn_imager").text("返回");
	}
}



