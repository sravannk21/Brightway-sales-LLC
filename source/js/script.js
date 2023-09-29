$(document).ready(function() {
    $('#brands').owlCarousel({
        loop:true,
        margin:10,
        autoplay: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    }),
    $('#showrooms').owlCarousel({
        loop:true,
        margin:10,
        autoplay: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    }),

    $('.js-waypoint-1').waypoint(function(direction) {
        $('.js-waypoint-1').addClass('animate__animated animate__fadeInLeft')
    },
    {
        offset: '50%'
    }),


    $('.js-waypoint-2').waypoint(function(direction) {
        $('.js-waypoint-2').addClass('animate__animated animate__fadeInRight')
    },
    {
        offset: '50%'
    }),


    $('.js-waypoint-3').waypoint(function(direction) {
        $('.js-waypoint-3').addClass('animate__animated animate__fadeInUp')
    },
    {
        offset: '50%'
    })

    
    $('.js-waypoint-4').waypoint(function(direction) {
        $('.js-waypoint-4').addClass('animate__animated animate__fadeInRight')
    },
    {
        offset: '50%'
    })

    $('.js-waypoint-5').waypoint(function(direction) {
        $('.js-waypoint-5').addClass('animate__animated animate__fadeInLeft')
    },
    {
        offset: '50%'
    })

    $('.js-waypoint-6').waypoint(function(direction) {
        $('.js-waypoint-6').addClass('animate__animated animate__bounceIn')
    },
    {
        offset: '50%'
    })
    $('.js-waypoint-7').waypoint(function(direction) {
        $('.js-waypoint-7').addClass('animate__animated animate__fadeInRight')
    },
    {
        offset: '50%'
    })
    $('.js-waypoint-8').waypoint(function(direction) {
        $('.js-waypoint-8').addClass('animate__animated animate__fadeInLeft')
    },
    {
        offset: '50%'
    })
    $('.js-waypoint-9').waypoint(function(direction) {
        $('.js-waypoint-9').addClass('animate__animated animate__fadeInLeft')
    },
    {
        offset: '50%'
    })
    $('.js-waypoint-10').waypoint(function(direction) {
        $('.js-waypoint-10').addClass('animate__animated animate__fadeInLeft')
    },
    {
        offset: '50%'
    })
    $('.js-waypoint-11').waypoint(function(direction) {
        $('.js-waypoint-11').addClass('animate__animated animate__fadeInLeft')
    },
    {
        offset: '50%'
    })
    $('.js-waypoint-12').waypoint(function(direction) {
        $('.js-waypoint-12').addClass('animate__animated animate__fadeInLeft')
    },
    {
        offset: '50%'
    })
})