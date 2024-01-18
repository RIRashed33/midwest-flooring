(function ($) {
    $(document).ready(function ($) {
        $('.brands-slider').owlCarousel({
            margin:10,
            dots: false,
            autoWidth:true,
            margin: 0,
            responsive: {
                0: {
                    loop:true,
                },
                1200: {
                    loop: false
                }
            }
        });





    });
}(jQuery));