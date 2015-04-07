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




// var place_encode = encodeURIComponent(str);



// #1st step inject the html infto 
// var pickie = "img/5_large.jpg";
// var picList =  document.getElementById("photos_distinct");
var picList =  $("#photos_distinct ul");
var t = picList.children('li').find('img')
var pickie = "img/" + t.first().data('resized');




/* the fader */
// #







var list = new Array();
var increment = 0;

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
console.log(t);
$("#active").attr('src', t);

setTimeout(function(){
    increment++;

    if(increment == list.length){
        increment = 0;
    }

    $("#deactive").attr('src', t);

    $("#deactive").fadeIn(2000, function(){
        rotate();
    });
}, 2000);
}









// var piclister = picList.children('ul');
// console.log(d);

/*


listItems.each(function(idx, li) {
    var product = $(li);

    // and the rest of your code
});

$('#photos_distinct').children('ul');
var photolist = picker.getElementsByTagName("li");
console.log(photolist[0]);

// var nums = $('#photos_distinct').children('ul');
var nums = document.getElementById("ul");
var listItem = nums.getElementsByTagName("li");
console.log(listItem[0]);



var newNums = [];

for (var i=0; i < listItem.length; i++) {
  // console.log(listItem[i]);
    newNums.push( parseInt( listItem[i].innerHTML, 10 ) );
}

console.log(newNums)
*/

/*

var t = $('#photos_distinct').find('img');
console.log(t);
*/
// function setPic() {
// /*  $("#photo_container").fadeIn('slow', function() {
//     $("#photo_container").css("background", "url(" + pickie + ")"); 
//   });*/
// // $('#photo_container').after('<div></div>')
//   $('#photo_container').fadeTo('slow', 0.3, function()
// {
//     $(this).css('background-image', 'url(' + pickie + ')');
// }).delay(10).fadeTo('slow', 1);
  
// }

// setPic();

/*




// settings
var $slider = $('.carousel'); // class or id of carousel slider
var $slide = 'li'; // could also use 'img' if you're not using a ul
var $transition_time = 1000; // 1 second
var $time_between_slides = 4000; // 4 seconds

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
      slideThis();
    }
    , $transition_time +  $time_between_slides
);


var $i = $slider.find($slide + '.active').index();
function slideThis(){
        
      var t = slides().eq($i).children('a').children('img');
      console.log(t.data('resized'));

      slides().eq($i).removeClass('active');
      slides().eq($i).fadeOut($transition_time);
    
      if (slides().length == $i + 1) $i = -1; // loop to start
    
      slides().eq($i + 1).fadeIn($transition_time);
      slides().eq($i + 1).addClass('active');
      // console.log($transition_time +  $time_between_slides);
}



// #they are using the thumbnail data-resized to achive this not onclick.
var getphots = $("#photos_distinct ul li a img");
var photon = getphots;
// var photon = getphots.data("resized");
// var hello = photon.attr("data-resized") ;



// var photos_distinct = document.getElementById("photos_distinct");
// you need to get the ul li a value

 console.log(photon);
/*var show = photos_distinct.getAttribute("data-list-size");
console.log(show);
photos_distinct.setAttribute("data-list-size", +show+3);*/

// #ok so option 1 select the unique and clicks to do something.


function skipTo($el) {

    pickie = "img/" + $el.data('resized');

  setPic()
}

$('#photos_distinct ul li a').on('mouseover', function () {
      var $el = $(this).children('img');
  skipTo($el);
});
    // console.log($el.data('resized'));
    // function slideCurrent(){
/*      i = $el;
      var t = slides().eq($i).children('a').children('img');
      console.log(t);*/
      // $time_between_slides = 4000;
    // }
    // console.log($el);
    // console.log($slider.find($slide));







}(jQuery));
