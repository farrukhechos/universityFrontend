
// Recursive functions

// 1
// function greet(){
//     console.log("Hello World!");
//     greet()
// }
// greet();


// 2
// function calc(n){
//     if(n > 0){
//         return n + calc(n-1)
//     }
//     return 0
// }
// console.log(calc(10))

// 3: Ixtiyoriy sonni, nechi honali ekanligini topsh rekursiya orqali

// let count = 0;
// function countDigit(n){
//     if(n !== 0){
//         count++;
//         n = countDigit(parseInt(n / 10));
//     }
//     return (count === 0) ? 1 : count++
// }
//
// let k = countDigit(10);
// console.log(k);

// 4

let k = [3,1,4,2,6,7,18];
let i = 0;
function printArray(n){
    if(n  > 0){
        console.log(k[i])
        i++;
        n = printArray(n - 1)
    }
    return 0;
}
printArray(k.length);
