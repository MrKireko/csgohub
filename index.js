$(document).ready(function() {
	
	navopen = false;
	
	$("#openbutton").click(function(){
		if (navopen) {
			$("#ttl").css("margin-left", "1vh");
			$("#sidenav").css("margin-left", "-26%");
			navopen = false;
		} else {
			$("#ttl").css("margin-left", "19%");
			$("#sidenav").css("margin-left", "0px");
			navopen = true;
		}
	});
	
});