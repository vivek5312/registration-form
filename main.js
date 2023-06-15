let button=document.getElementById('btn');
button.addEventListener("click",onSubmit);

function onSubmit(){

let nameInput=document.getElementById('name').value;

let emailInput=document.getElementById('email').value;
let no=document.getElementById('no').value;
let date=document.getElementById('timcall').value;
let time =document.getElementById('time').value;


 let name=localStorage.setItem('nameInput',nameInput);
  let email =localStorage.setItem('emailInput',emailInput); 
   let num=localStorage.setItem('no',no);
   let time1=localStorage.setItem('date',date); 
   let clock1=localStorage.setItem('time',time);
}