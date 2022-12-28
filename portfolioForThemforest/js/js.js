var a=document.getElementById('show');
var b=document.getElementById('hide');
var c=document.getElementById('menuoptions1');
var ctr=0;
function toggle1(){
    if(ctr==0){
        a.style.display='none';
        b.style.display='block';
        c.style.display='flex';
        ctr=1;
    }
    else if(ctr==1){
        a.style.display='block';
        b.style.display='none';
        c.style.display='none';
        ctr=0;
    }
   
}

function sorry(){
    alert("Sorry we are unable to perform this operation right now !");
}
var d=document.getElementById('body');
var e=document.getElementById('loader');
var f=document.getElementById('cointainer');

setTimeout(loader,5000)
    function loader(){
        d.style.backgroundColor='white';
      e.style.display='none';
      f.style.display='block';
    }

  var mood= document.getElementsByClassName('mood');
  
  var moon=document.getElementsByClassName('moon');
  var sun=document.getElementsByClassName('sun');
  var logo=document.getElementById('logo');
  var logo1=document.getElementById('logo1');
    mood[0].onclick= function(){
        document.body.classList.toggle('darkmood');
        if(document.body.classList.contains('darkmood')){
            moon[0].style.display='none';
            sun[0].style.display='block';
            moon[1].style.display='none';
            sun[1].style.display='block';
        }
        else{
            sun[0].style.display='none';
             moon[0].style.display='block';
             sun[1].style.display='none';
             moon[1].style.display='block';
        }
        if(document.body.classList.contains('darkmood')){
            logo.src='./img/portfolio-1.png';
        }
        else{
            logo.src='./img/portfolio.png'; 
        }

    }

    mood[1].onclick= function(){
        document.body.classList.toggle('darkmood');
        if(document.body.classList.contains('darkmood')){
            moon[0].style.display='none';
            sun[0].style.display='block';
            moon[1].style.display='none';
            sun[1].style.display='block';
        }
        else{
            sun[0].style.display='none';
             moon[0].style.display='block';
             sun[1].style.display='none';
             moon[1].style.display='block';
             
        }
        if(document.body.classList.contains('darkmood')){
            logo1.src='./img/portfolio-1.png';
        }
        else{
            logo1.src='./img/portfolio.png'; 
        }
    }

    // counter

   

   
   var i=0;
    var project=document.getElementById('project');
    var review=document.getElementById('review');
   
    window.addEventListener('scroll', function() {
       
       const counter=setInterval(() => {
       
            
           
            if(i<46){
            
                review.innerHTML=i+'+';
                   
                } 
                if(window.pageYOffset > 500){
                    i++;
                }
                
         
                if(i<50){
                    project.innerHTML=i+'+'; 
                    
                }
                else{
                    clearInterval(counter);
                }
       }, 3000);        


});
  window.addEventListener("scroll",function(event){
    var scroll=this.scrollY;
    if(scroll < 250){
        document.getElementById('hrline').classList.remove('ml17');
        document.getElementById('hrline').classList.remove('ml34');
        document.getElementById('hrline').classList.remove('ml51');
        document.getElementById('hrline').classList.remove('ml68');
        document.getElementById('hrline').classList.remove('ml85');
       
    }
    if(scroll >= 250){
        document.getElementById('hrline').classList.add('ml17');
        document.getElementById('hrline').classList.remove('ml34');
        document.getElementById('hrline').classList.remove('ml51');
        document.getElementById('hrline').classList.remove('ml68');
        document.getElementById('hrline').classList.remove('ml85');
      
    }
    if(scroll >= 750){
        document.getElementById('hrline').classList.add('ml34');
        document.getElementById('hrline').classList.remove('ml51');
        document.getElementById('hrline').classList.remove('ml68');
        document.getElementById('hrline').classList.remove('ml85');
        
    }
    if(scroll >= 1450){
        document.getElementById('hrline').classList.add('ml51');
        document.getElementById('hrline').classList.remove('ml68');
        document.getElementById('hrline').classList.remove('ml85');
        
    }
    // if(scroll >= 1450){
    //     document.getElementById('hrline').classList.add('ml68');
    //     document.getElementById('hrline').classList.remove('ml85');
       
    // }
    if(scroll >= 2000){
        document.getElementById('hrline').classList.add('ml85');
        
    }
  });
  
  
  

