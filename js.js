var val = 0;
var myInterval = null;
var sw = false;
var i;
var scroll;
var scrollconv;
var scrolllen;
var conv = "";
var shortc = 0;
var ratio = 1;
var def = 0;
var shortb = 0;

function pleasestop() {
	clearInterval(myInterval);
}

function pleasemove() {
		pleasestop();
		val = 0;
		myInterval = setInterval(function(){
						val++;
						$(".progressbar").progressbar("value", val);
				}, 5);
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomColor() {
  $("#colorpad").css("background-color", getRandomColor());
}

function randomOpacity() {
	return (Math.random() * 100) / 100;
}

function convertjap(inp) {
	scrollconv = inp.toString();	
	scrolllen = scrollconv.length;
	conv = "";
	for (i = 0; i < scrolllen; i++){
	    switch(scrollconv[i]) {
	    	case "0":
	    		conv += "零";
	    		break;
	    	case "1":
	    		conv += "一";
	    		break;
	    	case "2":
	    		conv += "二";
	    		break;
	    	case "3":
	    		conv += "三";
	    		break;
	    	case "4":
	    		conv += "四";
	    		break;
	    	case "5":
	    		conv += "五";
	    		break;
	    	case "6":
	    		conv += "六";
	    		break;
	    	case "7":
	    		conv += "七";
	    		break;
	    	case "8":
	    		conv += "八";
	    		break;
	    	case "9":
	    		conv += "九";
	    		break;	
	    }
	}
	return conv;	
}

var image = ["66030163_p0.png","65657746_p0.png"];
function getRandomImage() {
	return image[Math.floor(Math.random() * 2)];
}

$(document).ready(function() {
	def = $(document).height();
	ratio = $(document).height() / def;
	$(".fadej").click(function() {
		var sign = $(this);
		sign.fadeOut("slow", function() {
			setTimeout(function() {
				sign.fadeIn("slow");
			}, 5000); 
		});
	});
	var scrollp = $(window).scrollTop() / 10;
	$(".parallax").css({
		"background-position-y" : - scrollp + "px",
	});
	$(window).scroll( function() {
		scrollp = $(window).scrollTop() / 10;
		$(".parallax").css({
			"background-position-y" : - scrollp + "px",
		});
	});
	var colors = setInterval(function() {
			$(".border").animate(
				{
					"backgroundColor": getRandomColor()
				}, 5000);		
			}, 5000);
	let logo = $("#logo path");
	for (let i = 0; i < logo.length; i++) {
		console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
	}
	$(".progressbar").progressbar({
		max: 500,
		value: val,
		complete: function() {
			pleasestop();
		}
	});
	$("#probar").progressbar({max : $(document).height() - window.innerHeight});
	window.onscroll = function() {myFunction()};
	function myFunction() {
	    var navbar = $(".nav");
	    if (document.body.scrollTop > 100 || document.documentElement.scrollTop >= 100) {
	        navbar.animate(
	        	{
	        	"opacity" : '0.8'
	        	},
	        	{
				duration : 400,
				queue: false
				});
	    }
	    else {
	    	navbar.animate(
	        	{
	        	"opacity" : '0.3'
	        	},
	        	{
				duration : 400,
				queue: false
				});
	    }
      	scroll = document.documentElement.scrollTop;
	    $("#probar").progressbar("value", scroll);
	    $("#active2").text("" + document.documentElement.scrollTop + "");
	    $("#active1").text("" + document.body.scrollTop + "");
	    $("#active").text("" + convertjap(scroll) + "");
	}

	$(".nav").hover(function() {
			if (document.documentElement.scrollTop > 100) {
				shortc = 0.1;
			}
			else {
				shortc = 0;
			}
			if (window.innerWidth < 1214) {
				shortb = 0;
			}
			else {
				shortb = 1;
			}
			$(".nav").animate(
				{
				"opacity" : + (0.5 + shortc*5),
				"height" : + (50 + 20*shortb)
				},
				{
				duration : 400,
				queue: false
				});
	},
		function() {
			$(".nav").animate(
				{
				"opacity" : '' + (0.3 + shortc*5) + '',
				"height" : '50px'
				},
				{
				duration : 400,
				queue: false
				}); 
		} 
	);
	$(window).resize(function() {
		ratio = $(document).height() / def;
		$("#probar").progressbar("option", "max", $(document).height() - window.innerHeight);
	});
});