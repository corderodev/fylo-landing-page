document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('input[type=text]').forEach( node => node.addEventListener('keypress', e => {
      if(e.keyCode == 13) {
        e.preventDefault();
        formValidation();
      }
    }))
});

function formValidation() {
    
    const email = document.getElementById("inputSignUp");
    const eventMsg = document.getElementById("formvalidationEvent");
                
    function validateEmail(email) {
        
        var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        
        if (validEmail.test(email.value)) {
            email.style = "outline: 2px solid green;";
            eventMsg.style = "color: green;";
            eventMsg.innerText = "Nice email...";
        }
        else {
            email.style = "outline: 2px solid #ff4242;";
            eventMsg.style = "color: #ff4242;";
            eventMsg.innerText = "Please enter a valid email address";
        }
    }

    validateEmail(email); 
}