$(document).ready(function() {
	
	navopen = false;
	clicked = false;
	
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
	
	function hide1() {
		$("#ttl").css("margin-left", "1vh");
		$("#sidenav").css("margin-left", "-26%");
		navopen = false;
		setTimeout(function(){
			$("#cont").css("margin-top", "100%");
		}, 300);
		setTimeout(function(){
			$("#openbutton").css("margin-top", "-16%");
			$("#ttl").css("margin-top", "-16%");
			$("#ttl3").css("margin-left", "-25%")
		}, 600);
		setTimeout(function(){
			$("#appbar").css("margin-top", "-16%");
		}, 900);
	}
	
	function hide2() {
		navopen = false;
		setTimeout(function(){
			$("#cont").css("margin-top", "100%");
		}, 0);
		setTimeout(function(){
			$("#openbutton").css("margin-top", "-16%");
			$("#ttl").css("margin-top", "-16%");
			$("#ttl3").css("margin-left", "-25%")
		}, 300);
		setTimeout(function(){
			$("#appbar").css("margin-top", "-16%");
		}, 600);
	}
	
	$(".mi").click(function(){
		hide1();
	});
	
	$("#2").click(function(){
		setTimeout(function(){
			document.location = "index.html"
		}, 1650);
	});
	
	$("#3").click(function(){
		setTimeout(function(){
			document.location = "index.html"
		}, 1650);
	});
	
	$("#4").click(function(){
		setTimeout(function(){
			document.location = "index.html"
		}, 1650);
	});
	
	$("#5").click(function(){
		setTimeout(function(){
			document.location = "index.html"
		}, 1650);
	});
	
	$(".listing").mouseenter(function(){
		$(".arrow", this).css("opacity", "0.45");
	});
	
	$(".listing").mouseleave(function(){
		$(".arrow", this).css("opacity", "0");
	});
	
	$(".listing").mouseup(function(){
		thinga = this;
		if(clicked != true){
			$(thinga).css("opacity", "0.54");
			setTimeout(function(){
				if(navopen){
					hide1();
				}else{
					hide2();
				}
			}, 215);
			setTimeout(function(){
				document.location = "index.html"
			}, 1650);
			
		}else{
			
		}
		clicked = true;
	});
	
});