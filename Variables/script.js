const sumitButton=document.getElementById('sumit-btn');
const buttonText=document.getElementById('btn-text');
let count=0;
sumitButton.addEventListener('click',()=>{
  count++;
  console.log(`Button has been pressed ${count} times`);
  buttonText.innerText=`Button has been pressed ${count} times`;
})