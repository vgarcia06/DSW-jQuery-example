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
  $("button").click(function(){
    $("p").hide();
  });
});
 
