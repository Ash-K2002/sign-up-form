const pwd=document.querySelector('#enter-pwd');
const cnf=document.querySelector('#conf-pwd');

pwd.addEventListener('input', (event)=>{
    if(pwd.textContent!=cnf.textContent)
    {
        pwd.setCustomValidity("passwords do not match");
    }
})