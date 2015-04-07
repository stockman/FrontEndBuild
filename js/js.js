// you can enter your JS here!

/*
so what they are doing is loading the image
then preloading the next image and then fading (opacity to 0) it in to the next image
also they are stashing the picture at the bottom of the page and hiding for quick reload.

Don't know if I need the pic counter

*/


(function($) {

// #load variables
/* the map */
// #get hotel name for map creation
var hotel_encoded = $('h1.hotel_name').clone().children().remove().end().text();
// a real hotel for demo
hotel_encoded = 'Banff Boutique Inn - Pension Tannenhof'
hotel_encoded = encodeURIComponent(hotel_encoded);
// console.log(hotel_encoded);

var mappie = '<iframe width="300" height="200" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=' + hotel_encoded + '&key=AIzaSyD1Z5-p_E_ls9hwu__Ie84MwtSB_8ha8xk"></iframe>';
$('.map').html('');
$('.map').append(mappie);

/* the fader */


var list = new Array();
var increment = 0;
var timer = null;
var updatetimer = null;


$(function(){
$.when(
    $("#photos_distinct img").each(function(i, e){
        image = $(this).attr('src');
        list.push(image);
    })
    ).then(function(){
        rotate()
  });
});



function rotate(){
  $("#deactive").fadeOut(1000, function(){
  });

  var t = list[increment].replace('thumb','large');

  $("#active").attr('src', t);
  updatetimer = function () {
    timer = setTimeout(function(){
        increment++;

        if(increment == list.length){
            increment = 0;
        }

        $("#deactive").attr('src', t);

        $("#deactive").fadeIn(2000, function(){
            rotate();
        });
    }, 3300);
  }
  updatetimer();
}

var photos_d = $('#photos_distinct ul li a');
photos_d.on('mouseover', function () {
      var t = $(this).attr('href');

    window.clearTimeout(timer)
$("#active").attr('src', t);


console.log('stop');
});


photos_d.on('mouseout', function () {
    updatetimer();
    console.log('start');
});




}(jQuery));
