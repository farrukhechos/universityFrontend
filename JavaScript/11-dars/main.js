
// Math

// console.log(Math.max(2,3)) 2ta sondan kattasini topadi
// console.log(Math.min(2,3)) 2ta sondan kichkinasini topadi
// console.log(Math.ceil(2.8)) Tepaga qarab yaxlitlaydi
// console.log(Math.floor(2.9)) Pastga qarab yaxlitlaydi
// console.log(Math.round(2.4)) O'rtadan tepa yoki pastga qarab yaxlitlaydi
// console.log(Math.abs(-9)) Moduldan chiqaradi ya'ni manfiyni musbat qiladi
// console.log(Math.exp(2)) sonni 2.71 darajasi
// console.log(Math.pow(2,2)) sonni darajasini topadi
// console.log(Math.sqrt(25)) Sonni ildizini aniqlaydi
// console.log(Math.cbrt(27)) Sonni kubini aniqlaydi yani 3, 3ni kubi 27
// console.log(Math.hypot(4,3)) Gipotenuzani aniqlaydi


// Function

// function hypot(x,y){
//     return (x > y) ? x : y
// }
// console.log(hypot(5, 8))

function findBig(arr){
    let big = arr[0]
    for (let i = 0; i < arr.length; i++){
       if(arr[i] > big) big = arr[i]
    }
    return big
}
let k = [1,2,12,4,5,6,7,19]
console.log(findBig(k))