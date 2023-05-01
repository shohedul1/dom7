const message = document.querySelector('#message');
const result  = document.querySelector('#result');
const btnAdd = document.querySelector('#btnAdd');

message.addEventListener('change',()=>{
    result.textContent = message.value 
    result.style.color = 'red';
    result.style.backgroundColor = 'yellow'
    message.value = '';
})




