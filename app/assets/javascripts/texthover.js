$(document).ready(function() {
	$('.aboutmedescription').on('mouseover', function() {
		$(this).css('background-color', 'rgba(0, 0, 0, 0.5)');
		$('.aboutme2').css('-webkit-filter', 'grayscale(100%)', '-moz-filter', 'grayscale(100%)', '-o-filter', 'grayscale(100%)','-ms-filter', 'grayscale(100%)', 'filter', 'grayscale(100%)');
	});
	$('.aboutmedescription').on('mouseout', function() {
		$(this).css('background-color', 'transparent');
		$('.aboutme2').css('-webkit-filter', 'grayscale(0%)', '-moz-filter', 'grayscale(0%)', '-o-filter', 'grayscale(0%)','-ms-filter', 'grayscale(0%)', 'filter', 'grayscale(0%)');
	});

	$('.rightarrow').on('click', function(e) {
		e.preventDefault();
		$('.enterpage').slideDown(300);
	})
})