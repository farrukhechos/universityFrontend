let numberInput = document.querySelector('#numberInput')
let container = document.querySelector('.buttonsrow')
let calculatorElements = ["⌫", "AC", "%", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "-/+", "0", ".", "="]

for (let i = 0; i < calculatorElements.length; i++) {
    let createBtn = document.createElement("button");
    createBtn.innerHTML = calculatorElements[i]
    container.appendChild(createBtn)


    createBtn.addEventListener("click", ()=>{
        if(createBtn.innerText === "⌫"){
            numberInput.value = numberInput.value.slice(0, -1)
        }else if(createBtn.innerText === "AC"){
            numberInput.value = ''
        }
        else {
            numberInput.value += createBtn.innerText

        }
    })

}