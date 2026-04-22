let login = "farrukhechos@gmail.com"
let password = "farrux1234"
let loginInput = document.getElementById('login');
let passwordInput = document.getElementById('password');

function submit(){
    if(loginInput.value === login && passwordInput.value === password){
        alert("Welcome to Dubai! Yalla Yalla Habibi")
        window.location.href = "home.html"
    }else{
        alert("Please enter a valid email or password");
    }
}


