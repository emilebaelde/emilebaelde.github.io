$(document).ready(function() {


    var scrollLink = $('.nav-link'); //bootstrap nav-link class.

    // Smooth scrolling pas op werkt niet
    scrollLink.click(function(e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top - 75
        }, 1000 );
    });

    // Active link switching
    $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function() {

            var sectionOffset = $(this.hash).offset().top - 20;

            if ( sectionOffset <= scrollbarLocation ) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        })

    });


    document.getElementById("test").setAttribute("d", "M101.5,71.5h61v49.22c-3.66-7.29-10.94-19.48-24.26-30.5C123.96,78.4,109.55,73.57,101.5,71.5z");

});