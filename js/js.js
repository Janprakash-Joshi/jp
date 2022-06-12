setTimeout(abc,5000)
    function abc() {
    document.getElementById('loader').style.display='none';
    document.getElementById('flex').style.display='flex';
  }
 function service() {
       var a = document.getElementById('services');
       var b = document.getElementById('home');
       var c = document.getElementById('contact');
       var d = document.getElementById('blogs'); 

       var e=document.getElementById('ind1');  
       var f=document.getElementById('ind2');
       var g=document.getElementById('ind3');
       var h=document.getElementById('ind4');  

          a.style.display = 'block';
          b.style.display = 'none';
          c.style.display = 'none';
          d.style.display = 'none';

          e.style.display = 'none';
          f.style.display = 'none';
          g.style.display = 'block';
          h.style.display = 'none';
   }

   function home() {
       var a = document.getElementById('services');
       var b = document.getElementById('home');
       var c = document.getElementById('contact');
       var d = document.getElementById('blogs'); 

       var e=document.getElementById('ind1');  
       var f=document.getElementById('ind2');
       var g=document.getElementById('ind3');
       var h=document.getElementById('ind4');
           
          a.style.display = 'none';
          b.style.display = 'block';
          c.style.display = 'none';
          d.style.display = 'none';

          e.style.display = 'block';
          f.style.display = 'none';
          g.style.display = 'none';
          h.style.display = 'none';
   }

   function contact() {
       var a = document.getElementById('services');
       var b = document.getElementById('home');
       var c = document.getElementById('contact');
       var d = document.getElementById('blogs'); 

       var e=document.getElementById('ind1');  
       var f=document.getElementById('ind2');
       var g=document.getElementById('ind3');
       var h=document.getElementById('ind4');

          a.style.display = 'none';
          b.style.display = 'none';
          c.style.display = 'block';
          d.style.display = 'none';

          e.style.display = 'none';
          f.style.display = 'block';
          g.style.display = 'none';
          h.style.display = 'none';
   }

    function blogs() {
       var a = document.getElementById('services');
       var b = document.getElementById('home');
       var c = document.getElementById('contact');
       var d = document.getElementById('blogs'); 

       var e=document.getElementById('ind1');  
       var f=document.getElementById('ind2');
       var g=document.getElementById('ind3');
       var h=document.getElementById('ind4');

          a.style.display = 'none';
          b.style.display = 'none';
          c.style.display = 'none';
          d.style.display = 'block';

          e.style.display = 'none';
          f.style.display = 'none';
          g.style.display = 'none';
          h.style.display = 'block';
   }