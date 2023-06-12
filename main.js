let myform=document.querySelector('#my-form');
let nameInput=document.querySelector('#name');
let emailinput=document.querySelector('#email');
let no=document.querySelector('#no');
let time=document.querySelector('#timcall');
let clock=document.querySelector('#time');
myform.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(nameInput===''||emailinput===''||no===''||time===''||clock===''){
        alert('please enter fields')
    }
    else{
        console.log('success');
    }
}