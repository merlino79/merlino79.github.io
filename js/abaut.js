$(function() {



    $(window).scroll(function() {

        var scrollTop = $(this).scrollTop();
        //console.log(scrollTop);


        $('.box-img').css('top', -(scrollTop) + 'px');




    });
    window.addEventListener('scroll', reveal);



    function reveal() {

        var reveals = document.querySelectorAll('.reveal');
        //console.log(reveals);

        for (var i = 0; i < reveals.length; i++) {

            var windowheigth = window.innerHeight;
            var revealtop = reveals[i].getBoundingClientRect().top;
            console.log(revealtop);
            var revealpoint = 70;
            var reveal = reveals[i];
            // console.log(revealpoint);

            if (revealtop < windowheigth - revealpoint) {
                reveal.classList.add('active');
            } else {
                reveal.classList.remove('active');
            }
        }
    }
    $('button').click(function() {
        $('.box-skills').toggle();
    })

});