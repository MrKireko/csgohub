$(document).ready(function() {
	
	navopen = false;
	
	$("#openbutton").click(function(){
		if (navopen) {
			$("#ttl").css("margin-left", "1vh");
//			$("#ttl3").css("margin-left", "3vh");
			$("#sidenav").css("margin-left", "-26%");
			navopen = false;
			setTimeout(function(){
				$("#list").css("opacity", "0");
			}, 300);
		} else {
			$("#ttl").css("margin-left", "19%");
//			$("#ttl3").css("margin-left", "26.5%");
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
	});
	
	$("#2").click(function(){
		setTimeout(function(){
			document.location = "index.html"
		}, 1350);
	});
	
	$("#3").click(function(){
		setTimeout(function(){
			document.location = "index.html"
		}, 1350);
	});
	
	$("#4").click(function(){
		setTimeout(function(){
			document.location = "index.html"
		}, 1350);
	});
	
	$("#5").click(function(){
		setTimeout(function(){
			document.location = "index.html"
		}, 1350);
	});
	
	$(".listing").mouseenter(function(){
		$(".arrow", this).css("opacity", "0.45");
	});
	
	$(".listing").mouseleave(function(){
		$(".arrow", this).css("opacity", "0");
	});
	
	$(".listing").mouseup(function(){
		$(this).css("opacity", "0.54");
	});
	
});