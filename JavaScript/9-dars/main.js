
// Array
// let k = [1,2,3,4];

// let searchItem = k.indexOf(3)
// console.log(k[searchItem])
// console.log(searchItem)
// k.join(', ')

// console.log(k)

// array berilgan arrayning katta elementi va kichik elementini toping builin functiondan foydalanmang

let arr = [1,9,0,8,-4];

let bigNum = arr[0];
let smallNum = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > bigNum) bigNum = arr[i];
    if(arr[i] < smallNum) smallNum = arr[i];
}
let bigIndex = arr.indexOf(bigNum);
let smallIndex = arr.indexOf(smallNum);

// let temp = arr[bigIndex];
// arr[bigIndex] = arr[smallIndex];
// arr[smallIndex] = temp;


console.log(arr);



