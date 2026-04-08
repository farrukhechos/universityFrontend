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
        }else if(createBtn.innerText === "="){
            numberInput.value = numberInput.value.split("")
            let firstNumber =""
            let secondNumber = ""
            for(let i = 0; i < numberInput.value.length; i++){
                if(numberInput.value[i] === "%"){
                   firstNumber += numberInput.value.slice(0, i-1)
                    secondNumber += numberInput.value.slice(i+1, numberInput.value.length)
                }
            }
            firstNumber = firstNumber.replaceAll(',', "")
            secondNumber = secondNumber.replaceAll(',', '')
            parseInt(firstNumber)
            parseInt(secondNumber)
            let result = firstNumber % secondNumber
            numberInput.value = result

        }
        else {
            numberInput.value += createBtn.innerText

        }
    })

}