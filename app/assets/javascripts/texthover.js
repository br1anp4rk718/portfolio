$(document).ready(function() {
	$('.aboutmedescription').hover(function() {
		$('.aboutmedescription').css('background-color', 'rgba(0, 0, 0, 0.5)');
		$('.enterpage').css('-webkit-filter', 'grayscale(100%)', '-moz-filter', 'grayscale(100%)', '-o-filter', 'grayscale(100%)','-ms-filter', 'grayscale(100%)', 'filter', 'grayscale(100%)');
	
	}, function() {
		$('.aboutmedescription').css('background-color', 'transparent');
		$('.enterpage').css('-webkit-filter', 'grayscale(0%)', '-moz-filter', 'grayscale(0%)', '-o-filter', 'grayscale(0%)','-ms-filter', 'grayscale(0%)', 'filter', 'grayscale(0%)');
	});
})