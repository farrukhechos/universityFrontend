
let card_password = "1234"
let password_input = document.querySelector('#password_input');
let button_container = document.querySelector("#button_container");
let btnArr = ['1','2','3','4','5','6','7','8','9', '0','⌫', "OK", "Bekor qilish", "Tasqidlash"];

function main(){

    for(let i = 0; i < btnArr.length; i++) {
        let btn = document.createElement("button");
        btn.innerHTML = btnArr[i];
        button_container.appendChild(btn)

        btn.addEventListener("click", ()=>{
            if(btn.textContent ==="⌫"){
                password_input.value = password_input.value.slice(0, -1);
            }else if(btn.textContent === "Bekor qilish"){
                password_input.value = ''
            }else if(btn.textContent === "Tasqidlash" && password_input.value === card_password){
                window.location.href = "atm.html";
            }else if(btn.textContent === "Tasqidlash" && password_input.value !== card_password){
                alert("Password xato");
            }
            else if(btn.textContent === "OK"){}
            else if(password_input.value.length >= 4){
                btn.style.cursor = "not-allowed";
            }
            else{
                password_input.value += btn.textContent
            }


        })
    }
}

main()