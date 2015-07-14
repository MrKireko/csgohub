$(document).ready(function() {
	
	navopen = false;
	
	$("#openbutton").mouseup(function(){
		if (navopen) {
			$("#ttl").css("margin-left", "1vh");
			navopen = false;
		} else {
			$("#ttl").css("margin-left", "15%");
			navopen = true;
		}
	});
	
});