var slideIndex = 0;


function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
 
 

}
var cnt;
var slider=document.getElementById('slider');
cnt=document.getElementById('cnt');
cnt.onclick=()=>{
  slider.style.display='block';
  showSlides();
}
