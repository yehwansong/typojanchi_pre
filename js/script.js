
jQuery( document ).ready(function() {
	// var w = window.innerWidth
	// var h = window.innerHeight
	// if(w>h >  123/90){
	// 	jQuery('.schedule_wrap').css({'width':jQuery('.text_whole_sub_wrap').outerWidth(true)})
	// }else{
	// 	jQuery('.schedule_wrap').css({'width':'100vw'})
	// }





    var timeout;
    $(document).on('mousemove', function (event) {
    	$('.plants_ani_1').addClass('plants_ani_1_moving')
    	$('.corners_ani_2_inner').addClass('corners_ani_2_inner_moving')
        if (timeout !== undefined) {
            window.clearTimeout(timeout);
        }
        timeout = window.setTimeout(function () {
    	$('.plants_ani_1').removeClass('plants_ani_1_moving')
    	$('.corners_ani_2_inner').removeClass('corners_ani_2_inner_moving')
        }, 100);
    });
    $('.schedule_wrap').css({'width':$('.text_whole_sub_wrap').outerWidth(false)})
    $(window).resize(function(){
    $('.schedule_wrap').css({'width':$('.text_whole_sub_wrap').outerWidth(false)})
})
});


