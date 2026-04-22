let firstNumberInput = document.getElementById('firstNumberInput');
let secondNumberInput = document.getElementById('secondNumberInput');

let cleanBtn = document.getElementById('clean')
let divisionBtn = document.getElementById('division');
let plusBtn = document.getElementById('plus')
let minusBtn = document.getElementById('minus')
let multiplicationBtn = document.getElementById('multiplication')
let percentageDivisionBtn = document.getElementById('percentageDivision')
let equalBtn = document.getElementById('equal')

let oneNumber = document.getElementById('one')
let twoNumber = document.getElementById('two')
let threeNumber = document.getElementById('three')
let fourNumber = document.getElementById('four')
let fiveNumber = document.getElementById('five')
let sixNumber = document.getElementById('six')
let sevenNumber = document.getElementById('seven')
let eightNumber = document.getElementById('eight')
let nineNumber = document.getElementById('nine')




function clean(){


    if(firstNumberInput.value === '' && secondNumberInput.value === ''){
       alert('Please enter number')
    }else {
        firstNumberInput.value = ''
        secondNumberInput.value = ''
    }
}
function condition(result){
    Math.round(result)
    if(isNaN(result) && firstNumberInput.value === '' || secondNumberInput.value === ''){
        alert("Please enter a number")
    }else {
        alert(`You are so lazy bro! It is easy math \n ANSWER ${result}`)
    }
}

function division(){
    let result = firstNumberInput.value / secondNumberInput.value
   condition(result)


}
function plus(){
    let result = Number(firstNumberInput.value) + Number(secondNumberInput.value)
    condition(result)
}
function minus(){
    let result = firstNumberInput.value - secondNumberInput.value
    condition(result)
}

function multiplication(){
    let result = firstNumberInput.value * secondNumberInput.value
    condition(result)
}
function percentageDivision(){
    let result = firstNumberInput.value % secondNumberInput.value
    condition(result)
}



