let nameInput = document.getElementById('name');
let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('password');

function signUp(){
    if(nameInput.value.length && emailInput.value.length && passwordInput.value.length > 8){
        alert("Welcome to our platform")
    }else{
        alert("Please enter you personal data to inputs")
    }
}

function toSignIn(){
    window.location.href = '../Sign-in/signIn.html'
}