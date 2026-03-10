
// break continue
// for(let i = 0; i < 10; i++){
//     if(i === 5){
//         break;
//     }
//     console.log(i);
// }

// let i = 0;
// while(i <= 10){
//     i++;
//     if(i === 5){
//         continue;
//     }
//     console.log(i)
// }

// let k = [2,3,4,5,6,7,8,9]
// let x = 4;
// let check = false;
//
//
// for (let i = 0; i < k.length; i++){
//     if(k[i] === x){
//         check = true;
//         break;
//     }
// }
//
// let result = check? `${x} - number is exist` : `${x} - number is empty`;
// console.log(result);

let n = ['toyota', "mazda", "chevrolet", "chevrolet" ,'honda', 'suzuki']

for (let i= 0; i < n.length; i++){
    if(n[i.length-1] === 'a'){
        console.log(i)
    }
}

for(let x of n){
    if(x[x.length - 1] ==='a') {
        console.log(x)
    }
}