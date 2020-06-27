$(function(){
	$("button").on({
		mouseover:function(){
			$("button").css({
				left:(Math.random()*700)+"px",
                top:(Math.random()*700)+"px"
			})
		}
	})
})


var singIt = document.getElementById("playIt");
singIt.play();