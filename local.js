let button=document.getElementById('btn');
button.addEventListener("click",onSubmit);

function onSubmit(){
const object= {


}
let nameInput=document.getElementById('name').value;

let emailInput=document.getElementById('email').value;
let no=document.getElementById('no').value;
let date=document.getElementById('timcall').value;
let time =document.getElementById('time').value;

object.name=nameInput;
object.email=emailInput;
object.number=no;
object.date=date;
object.time=time;
//let object_serialized=JSON.stringify(object);


 localStorage.setItem("object",object);
  /*let email =localStorage.setItem('emailInput',emailInput); 
   let num=localStorage.setItem('no',no);
   let time1=localStorage.setItem('date',date); 
   let clock1=localStorage.setItem('time',time);*/
}