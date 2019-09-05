
jQuery( document ).ready(function() {
	var w = window.innerWidth
	var h = window.innerHeight 
	// if(w>h >  123/90){
	// 	jQuery('.schedule_wrap').css({'width':jQuery('.text_whole_sub_wrap').outerWidth(true)})
	// }else{
	// 	jQuery('.schedule_wrap').css({'width':'100vw'})
	// }


var now = new Date();
var then = new Date("october 4, 2019"); 
var gap = then.getTime() - now.getTime();
gap = Math.floor(gap / (1000 * 60 * 60 * 24));
$('.text_whole_sub_wrap > span').html("D-" + gap);
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
function ranpos_0(){
    var posx = (Math.random() * (w - 200))+ 100;
    var posy = (Math.random() * (h - 200))+ 100;
$('.kaleidoscope_tile_image .image_sub').css({'left':posx})
$('.kaleidoscope_tile_image .image_sub').css({'top':posy})
}
function ranpos(){
    var posx = (Math.random() * (w - 200))+ 100;
    var posy = (Math.random() * (h - 200))+ 100;
	$('.clocks_tile_image').css({'left':posx})
	$('.clocks_tile_image').css({'top':posy})
	$('.plants_tile_image').css({'left':posx})
	$('.plants_tile_image').css({'top':posy})
	window.setTimeout(function () {
		ranpos()	
	},3000)
};
function ranpos_2(){
    var posx = (Math.random() * (w - 500))+ 250;
    var posy = (Math.random() * (h - 500))+ 250;
	$('.corners_tile_image').css({'left':posx})
	$('.corners_tile_image').css({'top':posy})
	window.setTimeout(function () {
		ranpos_2()	
	},3000)
};


// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
var timecounter = 0
rotate_clock()
function rotate_clock(){
	timecounter ++
	$('.clocks_tile_image>img:nth-child(1)').css({'transform':'rotate('+timecounter*6+'deg)'})
	window.setTimeout(function () {
		rotate_clock()
	},1000)
}



// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
var ran_num = 1
if(ran_num == 2 || ran_num == 3 ){ranpos()}
if(ran_num == 5 ){ranpos_2()}
if(ran_num == 4 ){ranpos_0()}
var tile_image = document.getElementsByClassName('tile_image')
tile_image[ran_num].style.display = "block";

$('.blue_edge_1').removeClass('blue_edge_1_animate')
$('.blue_edge_2').removeClass('blue_edge_2_animate')
$('.blue_edge_3').removeClass('blue_edge_3_animate')

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

    var timeout;
    $(document).on('mousemove', function (event) {
jQuery('.clocks_tile_image>img:nth-child(2)').css({'transform':'translate('+((event.pageX - w/2)/w)*-50+'px,'+((event.pageY - h/2)/h)*-50+'px)'})
jQuery('.clocks_tile_image>img:nth-child(2)').css({'opacity':0.9 - (Math.abs((event.pageX - w/2)/w)+Math.abs((event.pageY - h/2)/h)/2)})
    	// $('.tile_image').css({'left':event.pageX})
    	// $('.tile_image').css({'top':event.pageY})
$('.kaleidoscope_tile_image .image_sub').css({'left':event.pageX})
$('.kaleidoscope_tile_image .image_sub').css({'top':event.pageY})

$('.polyhedrons_tile').css({'left':event.pageX})
$('.polyhedrons_tile').css({'top':event.pageY})
$('.polyhedrons_tile_s').css({'left':event.pageX})
$('.polyhedrons_tile_s').css({'top':event.pageY})
if(event.pageX < w/2){
$('.corners_ani_2_inner').removeClass('corners_left')
$('.corners_ani_2_inner').addClass('corners_right')
}else{
$('.corners_ani_2_inner').removeClass('corners_right')
$('.corners_ani_2_inner').addClass('corners_left')
}
if(event.pageY > h/2){
$('.corners_ani_2_inner').removeClass('corners_bottom')
$('.corners_ani_2_inner').addClass('corners_top')
}else{
$('.corners_ani_2_inner').removeClass('corners_top')
$('.corners_ani_2_inner').addClass('corners_bottom')	
}
    	$('.plants_ani_1').addClass('plants_ani_1_moving')
    	// $('.plants_ani_1').removeClass('plants_ani_2_moving')
    	// $('.corners_ani_2_inner').addClass('corners_ani_2_inner_moving')
        if (timeout !== undefined) {
            window.clearTimeout(timeout);
        }
// var sundries_tile = document.getElementsByClassName)
        var k = $('.sundries_tile').length;
           		addbouncing(k)
        		function addbouncing(k){
		        	console.log(k)
		        	console.log($('.sundries_tile_wrap>img:nth-child('+k+')'))
			        $('.sundries_tile_wrap>img:nth-child('+k+')').addClass('sundries_tile_moving')
	        		k--
			    	if(k>1){
			    		window.setTimeout(function () {
			    			addbouncing(k)	
				   		},300)
				   	}else{
			    		k = $('.sundries_tile').length;
			    	}
			    }
        timeout = window.setTimeout(function () {

		     //    window.setTimeout(function (){
		     //    	$('.sundries_tile_wrap>img').removeClass('sundries_tile_moving')
		    	// },3000)
		    	window.setTimeout(function () {
    	$('.plants_ani_1').removeClass('plants_ani_1_moving')
    	// $('.plants_ani_1').addClass('plants_ani_2_moving')
    	},1000)
    	$('.corners_ani_2_inner').removeClass('corners_ani_2_inner_moving')
        }, 100);
    });

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
$( window ).resize(function() {
	if(w/h > 2){
		$('.text_whole_wrap').css({'transform':'translateX(-50%) translateY(-50%) scale('+h/(w/2)+')'})
	}
});
if(w/h > 2){
	$('.text_whole_wrap').css({'transform':'translateX(-50%) translateY(-50%) scale('+h/(w/2)+')'})
}
});


