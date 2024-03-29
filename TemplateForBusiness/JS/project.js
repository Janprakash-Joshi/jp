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
    let trusted=document.getElementById('trustedLogo');
    let trustedlogo=trusted.querySelectorAll('img');
    if(document.body.classList.contains('darkmood')){
        
       
        moodIcon.src='../Images/sun.svg';
        trustedlogo.forEach(logo=>{
            logo.style.filter='invert(1)';
        })
        
    }
    else{
    
        moodIcon.src='../Images/moon.svg';
        trustedlogo.forEach(logo=>{
            logo.style.filter='none';
        })
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

//counter

let count = 0;

function incrementCounter() {
  count++;
  const xyz=setInterval(() => {
      count += 1;
      if(count<245){
        document.getElementById("business").innerHTML = count+'+';
      }
      if(count<340){
        document.getElementById("employee").innerHTML = count+'+';
      }
      if(count<400){
        document.getElementById("projects").innerHTML = count+'K';
      }
      if(count<550){
        document.getElementById("rating").innerHTML = count+'K';
      }
      
      if(count>550){
        clearInterval(xyz);
        
      }
    }, 30);
  
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    
    if (entry.isIntersecting) {
      incrementCounter();
      count=0;
    }
  });
});
const div = document.getElementById("counter");
observer.observe(div);






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
 
 //projects buttons

 var all=document.getElementById('all');
 var brand=document.getElementById('brand');
 var app=document.getElementById('app');
 var web=document.getElementById('web');
 var photo=document.getElementById('photo');

 var branding=document.getElementById('branding');
 var application=document.getElementById('application');
 var webpage=document.getElementById('webpage');
 var photography=document.getElementById('photography');
 
 all.onclick=()=>{
    all.classList.add('projectbuttonsbg');
   brand.classList.remove('projectbuttonsbg');
   app.classList.remove('projectbuttonsbg');
   web.classList.remove('projectbuttonsbg');
   photo.classList.remove('projectbuttonsbg');

   branding.classList.remove('none');
   application.classList.remove('none');
   webpage.classList.remove('none');
   photography.classList.remove('none');
 }

 brand.onclick=()=>{
    all.classList.remove('projectbuttonsbg');
    brand.classList.add('projectbuttonsbg');
    app.classList.remove('projectbuttonsbg');
    web.classList.remove('projectbuttonsbg');
    photo.classList.remove('projectbuttonsbg');

    branding.classList.remove('none');
    application.classList.add('none');
    webpage.classList.add('none');
    photography.classList.add('none');
 }

 app.onclick=()=>{
    all.classList.remove('projectbuttonsbg');
    brand.classList.remove('projectbuttonsbg');
    app.classList.add('projectbuttonsbg');
    web.classList.remove('projectbuttonsbg');
    photo.classList.remove('projectbuttonsbg');

    
    branding.classList.add('none');
    application.classList.remove('none');
    webpage.classList.add('none');
    photography.classList.add('none');
 }

 web.onclick=()=>{
    all.classList.remove('projectbuttonsbg');
    brand.classList.remove('projectbuttonsbg');
    app.classList.remove('projectbuttonsbg');
    web.classList.add('projectbuttonsbg');
    photo.classList.remove('projectbuttonsbg');


    
    branding.classList.add('none');
    application.classList.add('none');
    webpage.classList.remove('none');
    photography.classList.add('none');
 }

 photo.onclick=()=>{
    all.classList.remove('projectbuttonsbg');
    brand.classList.remove('projectbuttonsbg');
    app.classList.remove('projectbuttonsbg');
    web.classList.remove('projectbuttonsbg');
    photo.classList.add('projectbuttonsbg');

    
    branding.classList.add('none');
    application.classList.add('none');
    webpage.classList.add('none');
    photography.classList.remove('none');
 }


 //animation for project items

 const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      
      if (entry.isIntersecting) {
       animation();
        
      }
      else{
        removeAnimation();
      }
    });
  });


  const div2 = document.getElementById("projectItems");
  observer2.observe(div2);
 function animation(){
    var animation1=document.querySelectorAll('.animation1');
 var animation2=document.querySelectorAll('.animation2');

 animation1.forEach(ani=>{
    ani.classList.add('detailsAnimation1')
 })

 animation2.forEach(ani=>{
    ani.classList.add('detailsAnimation2')
 })
}
function removeAnimation(){
    var animation1=document.querySelectorAll('.animation1');
 var animation2=document.querySelectorAll('.animation2');

 animation1.forEach(ani=>{
    ani.classList.remove('detailsAnimation1')
 })

 animation2.forEach(ani=>{
    ani.classList.remove('detailsAnimation2')
 })
}
 