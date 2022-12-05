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

