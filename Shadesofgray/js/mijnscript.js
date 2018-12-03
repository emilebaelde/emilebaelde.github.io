$(document).ready(function() {


    var scrollLink = $('.test'); //bootstrap nav-link class.

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
    // Counter
    jQuery('.statistic-counter').counterUp({
        delay: 10,
        time: 2000
    });
});
$('.statistic-counter_two, .statistic-counter, .count-number').counterUp({
    delay: 10,
    time: 2000
});
