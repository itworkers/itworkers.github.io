$(function() {

    'use strict';


    // smooth scroll
    $("a").on('click', function(event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({

                scrollTop: $(hash).offset().top

            }, 850, function() {

                window.location.hash = hash;

            });

        }

    });

    // hide navbar on mobile after click
    $('.nav a').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });

    // navbar on scroll
    $(window).on('scroll', function() {

        if ($(document).scrollTop() > 50) {

            $(".navbar-fixed-top").css({
                "background-color": "#fff",
                "box-shadow": "0 2px 2px 0 rgba(0, 0, 0, 0), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0)"
            });

            $(".navbar-brand").css({
                "color": "#333"
            });

            $(".navbar-nav li a").css({
                "color": "#333"
            });



            $(".navbar-default .navbar-toggle i").css({
                "color": "#333"
            });

        } else {

            $(".navbar-fixed-top").css({
                "background-color": "transparent",
                "transition": ".5s ease-out",
                "box-shadow": "none"
            });

            $("a.navbar-brand").css({
                "color": "#fff"
            });

            $(".navbar-nav li a").css({
                "color": "#fff"
            });

            $(".navbar-default .navbar-toggle i").css({
                "color": "#fff"
            });

            $(".navbar-default .navbar-collapse .navbar-nav li a").css({
                "color": "#fff"
            });
        }

    });

    // filterizr
    $('.filtr-container').imagesLoaded( function() {
        var filterizr = $('.filtr-container').filterizr();
    });

    // work filter
    $('.work-menu li').on('click', function() {
        $('.work-menu li').removeClass('active');
        $(this).addClass('active');
    });

    // testimonial
    $('.testimonial').owlCarousel({
        itemsMobile: [360, 1],
        items: 1,
        loop: false,
        nav: true,
        dots: false,
    })

    // particle js
    particlesJS('particles-js',
  
        {
            "particles": {
              "number": {
                "value": 80,
                "density": {
                  "enable": true,
                  "value_area": 800
                }
              },
              "color": {
                "value": "#ffffff"
              },
              "shape": {
                "type": "circle",
                "stroke": {
                  "width": 0,
                  "color": "#000000"
                },
                "polygon": {
                  "nb_sides": 5
                },
                "image": {
                  "src": "img/github.svg",
                  "width": 100,
                  "height": 100
                }
              },
              "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false
                }
              },
              "size": {
                "value": 5,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 40,
                  "size_min": 0.1,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
              },
              "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              }
            },
            "interactivity": {
              "detect_on": "canvas",
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "repulse"
                },
                "onclick": {
                  "enable": true,
                  "mode": "push"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 400,
                  "line_linked": {
                    "opacity": 1
                  }
                },
                "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 8,
                  "speed": 3
                },
                "repulse": {
                  "distance": 200
                },
                "push": {
                  "particles_nb": 4
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
            "retina_detect": true,
            "config_demo": {
              "hide_card": false,
              "background_color": "#b61924",
              "background_image": "",
              "background_position": "50% 50%",
              "background_repeat": "no-repeat",
              "background_size": "cover"
            }
        }

    );

    // fakeLoader
    $("#fakeLoader").fakeLoader({
        timeToHide:1200, 
        zIndex:"9999",
        spinner:"spinner2",
        bgColor:"#43a047", 
    });     
});