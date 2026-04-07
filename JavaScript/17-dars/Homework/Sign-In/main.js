
const myData = {
    email:"farrukhechos@gmail.com",
    password:'farrux1234',
}

let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('password');

function signIn(){
    if(myData.email === emailInput.value && myData.password === passwordInput.value){
        alert("Welcome to our platform")
    }else{
        alert("Error: Please enter a valid email address or password")
    }
}

function toSignUp(){
    window.location.href = '../Sign-Up/index.html'
}

function recreatePassword(){
   let getEmail =  prompt("Please enter a valid email")
    if(getEmail === "farrukhechos@gmail.com"){
        let newPassword = prompt("Please enter your new password")
        myData.password = newPassword
        alert("Congratulations! You new password is ready")

    }else{
    alert("Error: Please enter a valid email address")
    }



}