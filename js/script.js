$('body').scrollspy({target: '.navbar-fixed-top'})

//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("nav-scrolled nav-darker");
    } else {
        $(".navbar-fixed-top").removeClass("nav-scrolled nav-darker");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

var d = new Date();
var year = d.getFullYear();
$("#year").text(year);