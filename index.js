var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

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


var sindex = 1;
show(sindex);

function plus(n) {
  show(sindex += n);
}

function current(n) {
  show(sindex = n);
}

function show(n) {
  var i;
  var slides1 = document.getElementsByClassName("picture1");
  var dots1 = document.getElementsByClassName("honda");
  if (n > slides1.length) {sindex = 1}    
  if (n < 1) {sindex = slides1.length}
  for (i = 0; i < slides1.length; i++) {
      slides1[i].style.display = "none";  1
  }
  for (i = 0; i < dots1.length; i++) {
    dots1[i].className = dots1[i].className.replace(" activa", "");
}
  slides1[sindex-1].style.display = "block";  
  dots1[sindex-1].className += " activa";

}
