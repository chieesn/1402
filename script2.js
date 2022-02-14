//Store top of each li element in array
var sections = $("li")
  .map(function () {
    return $(this).offset().top;
  })
  .get();

//Store all images in array
var images = $("img")
  .map(function () {
    return $(this);
  })
  .get();

//Display first image
images[0].css("display", "block");

//How soon to swap image
var offsetScroll = 500;

//Use this to choose which image will display at each breakpoint
function imageDisplay(j) {
  for (let i = 0; i < images.length; i++) {
    images[i].css("display", "none");
  }
  images[j].css("display", "block");
}

//Image swapping
$(window).scroll(function () {
  var scroll = $(window).scrollTop() + offsetScroll;
  for (let i = 0; i < sections.length; i++) {
    if (scroll > sections[i]) {
      imageDisplay(i);
    }
  }
});

//Function to scroll to specific section
function scrollSection(i) {
  $("html, body").animate(
    {
      scrollTop: sections[i]
    },
    800
  );
}

//Create buttons and previews for all list items
for (let i = 0; i < sections.length; i++) {
  $(".nav-buttons").append(
    '<li><a class="btn" href="#" role="button"></a><div class="preview"></li>'
  );
}
var btns = $(".btn")
  .map(function () {
    return $(this);
  })
  .get();

var thumbs = $(".preview")
  .map(function () {
    return $(this);
  })
  .get();

//Scroll to sections using buttons and add thumbnails to previews
for (let i = 0; i < sections.length; i++) {
  $(btns[i]).click(function () {
    scrollSection(i);
  });
  $(thumbs[i]).css("content", "url(" + images[i].attr("src") + ")");
}


// Text Animation


// Text Animation


// SVG HEART ANIMATION USING d3 and GSAP
var paper = d3.select("#canvas");
var wsvg = $("#canvas").width();
var hsvg = $("#canvas").height();

var d =Math.ceil((Math.floor(Math.random() * 700) + 100)/10)*10;
var count = 0;

function rNumTime(){
  d = Math.ceil((Math.floor(Math.random() * 600) + 100)/10)*10;
}

setInterval(function(){
  count++;
  var x = Math.floor(Math.random() * (wsvg-100)) + 50;
  var y = Math.floor(Math.random() * (hsvg-100)) + 50;
  var b = paper.append("use").attr("xlink:href", "#heart").attr("id", "h"+count).attr("transform", "translate("+x+", "+y+")");
  setTimeLine();
  rNumTime();
}, d);

function setTimeLine(){
  var s = (Math.random() * (0.7 - 0.2) + 0.5).toFixed(1);
  var heart = $("#h"+count);
  
  var tl = new TimelineMax({repeat:1, yoyo:true});
  
  tl.from(heart, 0.7, {scale: 0, transformOrigin:"50% 50%"})
    .to(heart, 0.7, {scale: s, transformOrigin:"50% 50%"})
    .to(heart, 0.3, {scale: 1, transformOrigin:"50% 50%", opacity: 0});
  // Tried an onComplete here but it wasn't working properly, this was just the easier know-how
  setTimeout(function(){
    remove(heart);
  }, 1700);
}

function remove(h){
  h.remove();
}

$(window).on("resize", function(){
  wsvg = $("#canvas").width();
  hsvg = $("#canvas").height();
});




//-------heart--------
(function($){

  $(function(){

    var $heart  = $('.heart'),
        $h1     = $('h1'),
        $q      = $('q'),
        $close  = $('.close');

    function showQuote(){
      var $this = $(this);
      $q = $('q#' + $this.data('partner'));
      $close.show();
      $h1.removeClass('show').addClass('hide');
      $this.siblings('.heart').addClass('shrink');
      $q.slideDown();
    }

    function hideQuote(){
      var $this = $(this);
      $this.hide();
      $h1.removeClass('hide').addClass('show');
      $q.slideUp(function(){
        $heart.removeClass('shrink');
      });
    }

    $heart.on('click', showQuote);
    $close.on('click', hideQuote);

  });

})(jQuery);