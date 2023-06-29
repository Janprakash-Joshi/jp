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
  

  //nav menu 
var show=document.getElementById('show');
var hode=document.getElementById('hide');
var head=document.getElementById('head');
show.onclick=()=>{
   head.classList.add('flex');
   show.classList.add('none');
   hide.classList.add('block');
}
hide.onclick=()=>{
  head.classList.remove('flex');
  show.classList.remove('none');
  hide.classList.remove('block');
}


//email validate

const newsLetterBtn = document.getElementById('newsLetterBtn');
newsLetterBtn.onclick = () => {
  const  newsLetterEmail = document.getElementById('newsLetterEmail').value;
  var a=document.getElementById('newsLetterEmail');
  if (validateEmail(newsLetterEmail)) {
    a.classList.remove('wrongEmail');
      alert('Thank You')
  } else {
    
    a.placeholder="Invalid Email";
    a.value=null;
    a.classList.add('wrongEmail');
  }
  
}


function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}