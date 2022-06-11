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
           
          a.style.display = 'block';
          b.style.display = 'none';
          c.style.display = 'none';
          d.style.display = 'none';
   }

   function home() {
       var a = document.getElementById('services');
       var b = document.getElementById('home');
       var c = document.getElementById('contact');
       var d = document.getElementById('blogs'); 
           
          a.style.display = 'none';
          b.style.display = 'block';
          c.style.display = 'none';7
          d.style.display = 'none';
   }

   function contact() {
       var a = document.getElementById('services');
       var b = document.getElementById('home');
       var c = document.getElementById('contact');
       var d = document.getElementById('blogs'); 
           
          a.style.display = 'none';
          b.style.display = 'none';
          c.style.display = 'block';
          d.style.display = 'none';
   }

    function blogs() {
       var a = document.getElementById('services');
       var b = document.getElementById('home');
       var c = document.getElementById('contact');
       var d = document.getElementById('blogs'); 

          a.style.display = 'none';
          b.style.display = 'none';
          c.style.display = 'none';
          d.style.display = 'block';
   }