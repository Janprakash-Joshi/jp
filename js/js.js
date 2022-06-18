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


   const scriptURL = 'https://script.google.com/macros/s/AKfycbwnSxUOXkD7a_janabPi9oxfHohfmPYUUKdHszAW65wlLuy_UcPL6t4FPg4yewDMQfwxw/exec'
  const form = document.forms['submit-to-google-sheet']
  const form1 = document.forms['submit-to-google-sheet1']
  const form2 = document.forms['submit-to-google-sheet2']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => alert("Thank You. We have received your message."))
      .catch(error => console.error('Error!', error.message))
      var frm = document.getElementsByName('submit-to-google-sheet')[0];
   // frm.submit(); // Submit
   frm.reset();
  })

  form1.addEventListener('submit', f => {
   f.preventDefault()
   fetch(scriptURL, { method: 'POST', body: new FormData(form1)})
     .then(response => alert("Thank You. Greeting from Janprakash Joshi"))
     .catch(error => console.error('Error!', error.message))
     var frm = document.getElementsByName('submit-to-google-sheet1')[0];
  // frm.submit(); // Submit
  frm.reset();
 })
  
 form2.addEventListener('submit', g => {
   g.preventDefault()
   fetch(scriptURL, { method: 'POST', body: new FormData(form2)})
     .then(response => alert("Thank You. We have received your message."))
     .catch(error => console.error('Error!', error.message))
     var frm = document.getElementsByName('submit-to-google-sheet2')[0];
  // frm.submit(); // Submit
  frm.reset();
 })
  

  

//   function submitForm() {
//    // Get the first form with the name
//    // Hopefully there is only one, but there are more, select the correct index
//    var frm = document.getElementsByName('submit-to-google-sheet')[0];
//    // frm.submit(); // Submit
//    frm.reset();  // Reset
//    return false; // Prevent page refresh
// }