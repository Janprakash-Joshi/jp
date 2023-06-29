//video playback speed
function changeSpeed() {
  var video = document.getElementById("myVideo");
  video.playbackRate = 0.5;
}
changeSpeed();



//review slider 

const sliderContainer = document.getElementById('slider-container');
const reviews = sliderContainer.getElementsByClassName('review');

let currentIndex = 0;

reviews[currentIndex].style.display = 'block';


function showNextReview() {

  reviews[currentIndex].style.display = 'none';


  currentIndex = (currentIndex + 1) % reviews.length;


  reviews[currentIndex].style.display = 'block';
}
setInterval(showNextReview, 5000);






