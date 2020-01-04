jQuery(document).ready(function( $ ) {

  $('.smoothscroll').on('click', function(e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {

        $('html, body').animate({
          scrollTop: target.offset().top - 70
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  $(".navbar-collapse a").on('click', function() {
    $(".navbar-collapse.collapse").removeClass('in');
  });

		if($('#react').length) {

			var doughnutData = [{
	        value: 40,
	        color: "#74cfae"
	      },
	      {
	        value: 60,
	        color: "#3c3c3c"
	      }
	    ];
	    var myDoughnut = new Chart(document.getElementById("react").getContext("2d")).Doughnut(doughnutData);
		};

		if($('#nodejs').length) {
			var doughnutData = [{
					value: 35,
					color: "#74cfae"
				},
				{
					value: 65,
					color: "#3c3c3c"
				}
			];
			var myDoughnut = new Chart(document.getElementById("nodejs").getContext("2d")).Doughnut(doughnutData);
		}

		if($('#laravel').length) {
			var doughnutData = [{
					value: 45,
					color: "#74cfae"
				},
				{
					value: 55,
					color: "#3c3c3c"
				}
			];
			var myDoughnut = new Chart(document.getElementById("laravel").getContext("2d")).Doughnut(doughnutData);
		}

		if($('#symfony').length) {
			var doughnutData = [{
					value: 35,
					color: "#74cfae"
				},
				{
					value: 65,
					color: "#3c3c3c"
				}
			];
			var myDoughnut = new Chart(document.getElementById("symfony").getContext("2d")).Doughnut(doughnutData);
		}
});
