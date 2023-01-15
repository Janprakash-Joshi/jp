//loader
var loader=document.getElementById('loader');
setTimeout(() => {
    loader.classList.add('none');
}, 2500);

// mood

var mood=document.getElementById('moodIcon');
mood.onclick=()=>{
    document.body.classList.toggle('darkmood');
   
    let moodIcon=document.getElementById('moodIcon');
    let chooseimg=document.getElementById('chooseimg');
    let trustimg=document.getElementById('trustimg');
    if(document.body.classList.contains('darkmood')){
        
       
        moodIcon.src='../Images/sun.svg';
        chooseimg.style.filter='invert(1)';
        trustimg.style.filter='invert(1)';
       
        
    }
    else{
       
        moodIcon.src='../Images/moon.svg';
        chooseimg.style.filter='none';
        trustimg.style.filter='none';
       
    }
}



 //navBar 
topbtn=document.getElementById('topbtn');
topbtn.classList.add('none');
window.addEventListener("scroll",function(event){
    var scroll=this.scrollY;
    if(scroll > 250){
 var nav=document.getElementById('nav');
 nav.classList.add('nav1fix');
 topbtn.classList.remove('none');
 
    }
    if(scroll < 250){
        var nav=document.getElementById('nav');
        nav.classList.remove('nav1fix');
        topbtn.classList.add('none');  
    }

    if(scroll>50){
      var smallnav=document.getElementById('smallNav');
     smallnav.style.backgroundColor='var(--dark)';
     smallnav.style.boxShadow='var(--shadow)';
    }
    if(scroll<50){
      var smallnav=document.getElementById('smallNav');
      smallnav.style.backgroundColor='transparent';
    }
});


//small nav

var service=document.getElementById('services1');
var sub1=document.getElementById('sub11');
var sub2=document.getElementById('sub22');
var project=document.getElementById('project1');
var c=0;
service.onclick=()=>{
  
  if(c==0){
    sub1.style.display=' inline-block';
    c++;
  }
  else{
    sub1.style.display='none';
    c--;
  }
   
}
project.onclick=()=>{
  if(c==0){
    sub2.style.display=' inline-block';
    c++;
  }
  else{
    sub2.style.display='none';
    c--;
  }
}

var list=document.getElementById('list');
var Tlist=document.getElementById('Tlist');
var menu=document.getElementById('menu-item2')
Tlist.classList.add('none');


list.onclick=()=>{
  
    menu.classList.add('inline-block');
    list.classList.add('none');
    Tlist.classList.remove('none');
  

  
}
Tlist.onclick=()=>{
 
    menu.classList.remove('inline-block');
    list.classList.remove('none');
    Tlist.classList.add('none');
  
 
  
}


 //email validation

 function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

    var newsLetterEmailSubmit=document.getElementById('newsLetterEmailBtn').onclick=()=>{
    var newsLetterEmail = document.getElementById('newsLetterEmail').value;
   var isValid= validateEmail(newsLetterEmail);
if (isValid) {
  console.log("Valid email address");
} else {
  console.log("Invalid email address"+isValid);
  window.alert("Invalid email address");
}
 }
 