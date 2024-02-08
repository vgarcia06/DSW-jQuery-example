$(document).ready(function() {
	$("#imagetoggler").click(function(){
		$("img").toggle();
	});
	 $("h1").click(function() {
		$("p").css({"color":"red", "background-color": "yellow"});
		$("img").css("border","25px solid black"); 
	});
});
$(document).ready(function(){
  $("p1").click(function(){
    $(this).hide();
  });
})
