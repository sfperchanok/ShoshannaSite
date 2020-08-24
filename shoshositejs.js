function playAudio() {
  var audio1 = new Audio('lalasong.mp3');
  var audio2 = new Audio('lala2.mp3');
  var audio3 = new Audio('lala3.mp3');

  while (true) {
    audio1.play();
    audio2.play();
    audio3.play();
  }
}

function showdropdn() {
  var x = document.getElementById("dropAbout");
  x.style.display = "block";
}

function hidedropdn() {
  var x = document.getElementById("dropAbout");
  x.style.display = "none";
}

var x = document.getElementById("dropAbout");
x.style.display = "none";

/*var b = document.getElementByID("pup");
b.style.display = "none";

var a = document.getElementByID("me");
a.style.display = "block";

var c = document.getElementByID("doggo");
c.style.display = "none";*/

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
/*function plusSlides(n) {
  showSlides(slideIndex += n);
  hideImage1();
}
*/

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
