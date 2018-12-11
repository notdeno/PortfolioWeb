$(document).ready(function () {
    $(this).scroll(function () {
        let scroll = $(this).scrollTop();
        let trigger = $("#skills").offset();
        let triggerFade = $("#work").offset();
        let triggerPulse = $(".trigger--pulse").offset();
        let triggerFadeInUp = $(".trigger__form-fadeIn").offset();
        let triggerSkillsBounceRight = $(".trigger-skills-bounce-right").offset();
        if (scroll > trigger.top) {
            $(".navbar").removeClass("bg-transparent").addClass("bg-dark");
            $(".hide_first").removeClass('hide_first').addClass('show');
            $(".d-none").removeClass('d-none').addClass('d-inline');
        }
        else {
            $(".navbar").removeClass("bg-dark").addClass("bg-transparent");
            $(".d-inline").removeClass('d-inline').addClass('d-none');
        }
        if (scroll > triggerFade.top) {
            $(".hide_second").removeClass('hide_second').addClass('show');
        }
        if (scroll > triggerPulse.top) {
            $(".bttn--full-orange").addClass('pulse');
        }
        if(scroll > triggerFadeInUp.top){
            $(".form-fadeInUp").removeClass("form-fadeInUp").addClass('fadeInUp');
        }
        if(scroll > triggerFadeInUp.top){
            $(".form-fadeInleft").removeClass("form-fadeInleft").addClass('fadeInLeft');
        }
        if(scroll > triggerSkillsBounceRight.top){
            $(".progres").removeClass("progres").addClass('bounceInRight');
            $(".progres-left").removeClass("progres-left").addClass('bounceInLeft');
        }
    });
    $(".link--scroll-contact").click(function () {
        $("body, html").animate({ scrollTop: $("#contact").offset().top }, 1000);
    });
    $(".link--scroll-skills").click(function () {
        $("body, html").animate({ scrollTop: $("#skills").offset().top }, 1000);
    });
    $(".link--scroll-home").click(function () {
        $("body, html").animate({ scrollTop: 0}, 1000);
    });
    $(".link--scroll-work").click(function () {
        $("body, html").animate({ scrollTop: $("#work").offset().top }, 1000);
    });

});