


const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');



myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
   
    //msg.classList.add('error');
   // msg.innerHTML = 'Please enter all fields';

   alert("Please fill All fields");
    //setTimeout(() => msg.remove(), 3000);
  } else {
    

   localStorage.setItem("name",nameInput.value)
   localStorage.setItem("email",emailInput.value)
   

  }
}
