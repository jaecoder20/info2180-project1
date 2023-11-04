
window.addEventListener("DOMContentLoaded",function(){
    let form = document.querySelector("#email");
    form.placeholder = "Email address";
    let message = document.querySelector(".message");
    let valid;
    let invalid = "Please enter a valid email address.";
    let btn = document.querySelector(".newsletter").querySelector(".btn");
    btn.addEventListener('click', function(event){
        event.preventDefault(); //Done to prevent form from submitting and giving 405 Status Error
        let email = form.value;
        valid = `Thank you! Your email address ${email} has been added to our mailing list!`;
        message.textContent = (emailTest(email))? valid:invalid;

    });
});

function emailTest(email){
    let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
}


