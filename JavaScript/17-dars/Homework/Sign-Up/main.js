let nameInput = document.getElementById('name');
let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('password');

function signUp(){
    if(nameInput.value.length && emailInput.value.length && passwordInput.value.length > 8){
        alert("Welcome to our platform")
    }else{
        console.log("Please enter your name");
    }
}