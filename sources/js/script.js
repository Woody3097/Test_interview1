$(document).ready(function(){
    //Slider part
    $('.slider').slick({
        adaptiveHeight: true
    })
    let currentSlide = $('.header__right').slick('slickCurrentSlide') + 1;
    $('.header__counter-current').text('01')
    $('.header__counter-all').text( '0' + $(".header__right").slick("getSlick").slideCount)
    $(".slider").on("afterChange", function(event, slick, currentSlide){
        $('.header__counter-current').text('0' + (currentSlide + 1));
    });

    //Nav burger part
    const menu_top= $('.nav').height();
    //fixed nav on ready
    if($(window).offsetTop > menu_top) $('nav').addClass('fixed');
    $('.nav__burger').click(el => {
        if($(window).scrollTop() <= menu_top){
            $('nav').toggleClass('fixed');
        }
        $('.nav__burger-body').toggleClass('active')
    })

    $('.nav__burger-link').click(() => {
            $('.nav__burger-body').toggleClass('active')
    })

    $(window).scroll(function(){
        if($(window).scrollTop() <= menu_top){
            if($('.nav__burger-body').hasClass('active')){
                $('nav').addClass('fixed');
            }
            else{
               $('nav').removeClass('fixed');
            }
        }
        if($(window).scrollTop() > menu_top){
            if(!$('nav').hasClass('fixed')) {
                $('nav').addClass('fixed');
            }
        }
        //animation
        scrollTracking($('.project__body'), $('.project__item'));
        scrollTracking($('.contact__body'), $('.contact__input'));
        scrollTracking($('.about__left'), $('.about__picture'));
    });


    //scroll animation

    function callAnimation(el){
        el.show('slow', function(){
            $(this).next().show('slow', arguments.callee)
        });
    }

    function scrollTracking(mainEl, el){

        let wt = $(window).scrollTop();
        let wh = $(window).height();
        let et = mainEl.offset().top;
        let eh = mainEl.outerHeight();
        let dh = $(document).height();

        if (wt + wh >= et || wh + wt == dh || eh + et < wh){
            el.show('slow', function(){
                $(this).next().show('slow', arguments.callee);
            });
        }
    }

    //animation on ready
    scrollTracking($('.project__body'), $('.project__item'));
    scrollTracking($('.contact__body'), $('.contact__input'));
    scrollTracking($('.about__left'), $('.about__picture'));

});