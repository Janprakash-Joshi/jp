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
            logo.src='/img/drkport.png';
        }
        else{
            logo.src='/img/best-portfoli-wp-theme.png'; 
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
            logo1.src='/img/drkport.png';
        }
        else{
            logo1.src='/img/best-portfoli-wp-theme.png'; 
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
  

 // var cvbtn=document.getElementById('cvbtn');
 //  cvbtn.onclick=()=>{
 //    window.open("https://drive.google.com/file/d/1aBkTtgkXcukjhVaRyv2Tz7bPmEQuSKeD/preview","popup","width=auto, height=auto");
   
 //  }
  
  

//contact form 
document.getElementById('customForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form data
    const formData = new FormData(document.getElementById('customForm'));

    // Perform the actual form submission to the API
    fetch('https://api.sheetmonkey.io/form/toJVtP8RCSZj4d8CvabJHo', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            // Successful submission
            Swal.fire({
                icon: 'success',
                title: 'Thank You',
                timer: 3500
              })
           document.getElementById('customForm').reset();
        } else {
            // Handle error response
            console.error('Form submission error:', response.status);
        }
    })
    .catch(error => {
        console.error('Form submission error:', error);
    });
});


//newsLetter

document.getElementById('newsLetter').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form data
    const newsLetterEmail = new FormData(document.getElementById('newsLetter'));

    // Perform the actual form submission to the API
    fetch('https://api.sheetmonkey.io/form/vg6aYMxhJmcbo3nqxGcKie', {
        method: 'POST',
        body:newsLetterEmail 
    })
    .then(response => {
        if (response.ok) {
            // Successful submission
            Swal.fire({
                icon: 'success',
                title: 'Thank You',
                timer: 3500
              })
           document.getElementById('newsLetter').reset();
        } else {
            // Handle error response
            console.error('Form submission error:', response.status);
        }
    })
    .catch(error => {
        console.error('Form submission error:', error);
    });
});
