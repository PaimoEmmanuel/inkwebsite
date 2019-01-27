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
    var slides = document.getElementsByClassName("mySlidess");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
     setTimeout(showSlides, 2000); // Change image every 2 seconds
  }
  let i = 0;
  var readMore = document.getElementsByClassName("read-more");
  var hide = document.getElementsByClassName("hide");
  readMore[0].addEventListener("click", showMore);
  function showMore() {
    hide[0].className = hide[0].className.replace("hide", "");
    }

