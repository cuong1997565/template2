$(function() {

		$('.n0,.bottoms').click(function(event) {
			/* Act on the event */
			$('body').animate({scrollTop: 0},1000,"easeInOutExpo");
			return false;
		});

		$('.n1').click(function(event) {
			/* Act on the event */
			$('body').animate({scrollTop: $('#pfo').offset().top},1000, "easeInOutExpo");
			return false;
		});

		$('.n2').click(function(event) {
			/* Act on the event */
			$('body').animate({scrollTop: $('#ab').offset().top},1000, "easeInOutExpo");
		});

		$('.n3').click(function(event) {
			/* Act on the event */
			$('body').animate({scrollTop: $('#ct').offset().top},1000, "easeInOutExpo");
		});

		$('.fa.fa-chevron-circle-down').click(function(event) {
			/* Act on the event */
			$('body').animate({scrollTop: $('.footer').offset().top},1500, "easeInOutExpo");
		});

		$(window).scroll(function(event) {
			/* Act on the event */
			local = $('body').scrollTop();
			console.log(local);

			if (local>50) {
				$('nav.navbar.navbar-default').addClass('hides');
			} else {
				$('nav.navbar.navbar-default').removeClass('hides');
			}
	});
});