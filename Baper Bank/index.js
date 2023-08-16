document.getElementById('btn-submit').addEventListener('click',function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value ;
    

    // get password
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value ;
   
    if(email === 'sontan@baap.com' && password === 'secret'){
        window.location.href = 'banking.html';
    }
    else{
        alert('Tui password vule gesos!! Toke ami teijjo sontan gosona korlam.')
    }
    })
