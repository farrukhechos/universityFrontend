let numberInput = document.querySelector('#numberInput')
let container = document.querySelector('.buttonsrow')
let calculatorElements = ["clear", "AC", "%", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "-/+", "0", ".", "="]

for (let i = 0; i < calculatorElements.length; i++) {
    let createBtn = document.createElement("button");
    createBtn.innerHTML = calculatorElements[i]
    container.appendChild(createBtn)

    createBtn.addEventListener("click", ()=>{
        numberInput.value = createBtn.innerHTML
    })

}