$(document).ready(function(){
    $('#visit_pick_date,#visit_off_date,#tarih3').datepicker({})
    $(window).scroll(function(){
        $('.part2, .part3, .part4, .part5, .part6, .part7, footer').each(function(){
            var topBorder = $(this).offset().top;
            var windowBottom = $(window).scrollTop()+$(window).height();
            if(windowBottom > topBorder)
            {
                $(this).animate({'opacity':'1'},1000);
            }
        })  
    })
});