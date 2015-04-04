// you can enter your JS here!

/*
so what they are doing is loading the image
then preloading the next image and then fading (opacity to 0) it in to the next image
also they are stashing the picture at the bottom of the page and hiding for quick reload.

Don't know if I need the pic counter

*/


(function($) {

// settings
var $slider = $('.carousel'); // class or id of carousel slider
var $slide = 'li'; // could also use 'img' if you're not using a ul
var $transition_time = 1000; // 1 second
var $time_between_slides = 14000; // 4 seconds

function slides(){
  return $slider.find($slide);
}

slides().fadeOut();

// set active classes
slides().first().addClass('active');
slides().first().fadeIn($transition_time);

// auto scroll 
$interval = setInterval(
    function(){
      var $i = $slider.find($slide + '.active').index();
    
      slides().eq($i).removeClass('active');
      slides().eq($i).fadeOut($transition_time);
    
      if (slides().length == $i + 1) $i = -1; // loop to start
    
      slides().eq($i + 1).fadeIn($transition_time);
      slides().eq($i + 1).addClass('active');
    }
    , $transition_time +  $time_between_slides 
);


}(jQuery));
