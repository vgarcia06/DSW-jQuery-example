$(document).ready(function() {
	$("#imagetoggler").click(function(){
		$("img").toggle();
	});
	 $("h1").click(function() {
		 $("p").hide();
		$("img").css("border","25px solid black"); 
	});
});
$(document).ready(function(){
  $("button").click(function(){
    $("p").hide();
  });
});
 
