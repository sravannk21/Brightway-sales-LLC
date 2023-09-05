$(document).ready(function() {
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
})