// let btn = document.querySelector('.btn')

// btn.addEventListener('click', ()=>{
//     alert("Hello World!")
// })

// btn.addEventListener('mouseover', ()=>{
//     btn.style.backgroundColor = "blue"
//     btn.style.border = 'none'
// })
// btn.addEventListener("mouseout", ()=>{
//     btn.style.backgroundColor = "green"
//     btn.style.border = "none"
// })

let input = document.querySelector('#input')
let btn = document.querySelector('.btn')

let container = document.querySelector('#container')

btn.addEventListener('click', ()=>{
    for(let i = 0; i < parseInt(input.value); i++){
        let btnCreate = document.createElement("button")
        btnCreate.innerHTML = i
        container.appendChild(btnCreate)
        btnCreate.addEventListener("mouseover", ()=>{
            btnCreate.style.backgroundColor = "blue"
        })
        btnCreate.addEventListener("mouseout", ()=>{
            btnCreate.style.backgroundColor = "green"
        })
    }



})
