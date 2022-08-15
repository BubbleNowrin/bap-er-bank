document.getElementById("btn-submit").addEventListener('click', function () {
    const emailField = document.getElementById("user-email");
    const email = emailField.value;


    const passwordField = document.getElementById("password");
    const password = passwordField.value;

    //we will not compare information in client side ,,we will use it in server side when we learn it
    if (email === 'shontan@baap.com' && password === 'secret') {
        window.location.href = 'bank.html';
    } else {
        alert('tui password vule gesos!!!');
    }
})