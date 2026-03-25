
// Functions

// 1
// function calcMoney(money){
//     let counter = 0;
//     let fn = function(x){
//         return x * 0.01
//     }
//
//     while(money > 1){
//         money -= fn(money)
//         counter++;
//     }
//     return counter;
// }
//
// console.log(calcMoney(100000));


// 2

// function moneyForLetters(string){
//     return Math.ceil(string.length / 10)
// }
// console.log(moneyForLetters("qwertyuiopasdfghjkl;mnbvcxzasdfghjklpoiu"))

// 3

// function max(x,y) {
//     if (x > y){
//         return x
//     }
//     return y
// }

// 4
// function checkNumbr(n){
//     if(n > 0){
//         return "Musbat"
//     }
//     else if(n < 0){
//         return "Manfiy"
//     }else if(n === 0) return "NOLL"
//
// }
// console.log(checkNumbr(-1))

function createPassword(items) {

    if(items.length > 8){
        for(let i = 0; i < items.length; i++){
          if(
              items[i] >= '0' && items[i] <= '9' &&
              items[i] >= 'A' && items[i] <= 'Z' &&
              items[i] >= 'a' && items[i] <= 'Z'

          ) return true
        }
        return "Hato"
    }

    else{
        return "ERROR: Your letters is low"
    }
}
console.log(createPassword("2a32324224222"));
