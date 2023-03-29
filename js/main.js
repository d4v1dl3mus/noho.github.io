(function($) {
    "use strict";

    // Dropdown on mouse hover
    $(document).ready(function() {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function() {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function() {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // Back to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }

        if ($(this).scrollTop() > 100) {
            $('.btn-whatsapp').fadeIn('slow');
        } else {
            $('.btn-whatsapp').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Team carousel
    $(".team-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: false,
        margin: 30,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });


    /*     // Testimonials carousel
        $(".testimonial-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: 1000,
            dots: true,
            loop: true,
            margin: 30,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 1
                },
                768: {
                    items: 2
                }
            }
        }); */

    //navbar fixed
    $(document).ready(function() {
        let altura = $('.menu').offset().top;
        $(window).on('scroll', function() {
            if ($(window).scrollTop() > altura) {
                $('.menu').addClass('menu-fixed');
                $('#img-nav-logo').addClass('img-nav-logo-high');
                $('#img-nav-logo').removeClass('img-nav-logo-low');
            } else {
                $('.menu').removeClass('menu-fixed');
                $('#img-nav-logo').removeClass('img-nav-logo-high');
                $('#img-nav-logo').addClass('img-nav-logo-low');
            }
        })
    });

})(jQuery);