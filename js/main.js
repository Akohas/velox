
$(document).ready(function(){
    $('.tabs li').click(function(){
        $('.tabs li').removeClass('active');
        $(this).addClass('active');
         
        var num_active = $('.tabs').find('.active').index();
        $('.tabs_divs div').removeClass('active');
        $('.tabs_divs div').eq(num_active).addClass('active');
    }); 
}); 