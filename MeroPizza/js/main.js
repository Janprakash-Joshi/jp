//video playback speed
function changeSpeed() {
    var video = document.getElementById("myVideo");
    video.playbackRate = 0.5;
  }
  changeSpeed();

//navbar scroll
  window.addEventListener('scroll', function() {
    var element = document.getElementById('head');
    var scrollPosition = document.documentElement.scrollTop;
    
    if (scrollPosition > 1) {
      element.classList.add('head1');
    } else {
      element.classList.remove('head1');
    }
  });

