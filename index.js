$(document).ready(function() {
	
	navopen = false;
	
	$("#openbutton").click(function(){
		if (navopen) {
			$("#ttl").css("margin-left", "1vh");
			$("#sidenav").css("margin-left", "-26%");
			navopen = false;
			setTimeout(function(){
				$("#list").css("opacity", "0");
			}, 300);
		} else {
			$("#ttl").css("margin-left", "19%");
			$("#sidenav").css("margin-left", "0px");
			navopen = true;
			setTimeout(function(){
				$("#list").css("opacity", "1");
			}, 300);
		}
	});
	
	$(".mi").click(function(){
		$("#ttl").css("margin-left", "1vh");
		$("#sidenav").css("margin-left", "-26%");
		navopen = false;
		setTimeout(function(){
			$("#openbutton").css("margin-top", "-16%")
			$("#ttl").css("margin-top", "-16%")
		}, 300);
		setTimeout(function(){
			$("#appbar").css("margin-top", "-16%")
		}, 650);
//		$("body").css("opacity", "0");
	});
	
});