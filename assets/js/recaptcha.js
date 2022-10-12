const sign_up = document.querySelector('#signup-form');
const term_check = document.querySelector('#check-terms');
let response ;
sign_up.addEventListener('submit', (evt) => {
    response = grecaptcha.getResponse();
    console.log(response);
    if(term_check.checked==false){
        alert('You must agree to the terms and conditions before you can progress');
        evt.preventDefault();
        return false;
    }
    else if(response.length ==0){
        alert('please verify you are human!');
        evt.preventDefault();
        return false;
    }
    
})