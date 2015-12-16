
// var slider = function(array, linkname) {
// 	for(i=0; i <= array.length; i++) {
// 		if (array[i]== linkname) {
// 			if (array[i+1] > array.length) {
// 				return array[0];
// 			}
// 			return array[i+1];
// 		}
		
// 	}
// }

// $(document).ready(function() {
// 	$('.rightarrow').on('click', function(e) {
// 		var x = $(this).parent('.enterpage');
// 		var y = ["/users", "/aboutme", "/projects"];
// 		var imagelink = ['url("http://localhost:3000/assets/japan.jpg")', 'url("http://localhost:3000/assets/FullSizeRender.jpg")', 'url("http://localhost:3000/assets/projects.jpg")'];
// 		var bg = $(x).css('background-image');
// 		var nextimage = slider(imagelink, bg);
		
// 		$(x).animate({
// 			left:'-100%'
// 		}, 400, function() {
// 			var testing = $(x).css('background-image', nextimage);
// 			$(testing).css('left', 'inherit', 'background-size', 'inherit');

// 			// var pathname = window.location.pathname;
			

// 			// var test = (window.location.href=slider(y, pathname));
// 		});

// 	});
// });
// var parentcontainer = $(this).parent('.enterpage');

$(document).ready(function() {
	$('#frontpage .rightarrow').on('click', function() {
		$('#frontpage').animate({
			left: '-100%'
		}, 1800, function() {
			$(this).css('right', '100%');
		})
	});

	$('#aboutme2 .rightarrow').on('click', function() {
		$('#aboutme2').animate({
			left:'-100%'
		}, 1800);		
	});

	$('#aboutme2 .leftarrow').on('click', function() {
		$('#frontpage').animate({
			left: "0%",
		}, 1800);
	});

	$('#projects .leftarrow').on('click', function() {
		$('#aboutme2').animate({
			left: "0%",
		}, 1800);
	})
})