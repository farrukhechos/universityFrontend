
// for masala

// kiritilgan chegaragacha sonlarning oxirgi raqami 7 bilan tugagani kerak.

let x = 3020;
let arava = 20;
let g = x;

let counter = 0;
while(x >= arava){
    x -= arava;
    counter++;
}
counter = (x > 0) ? ++counter : 0;
console.log("Gisht soni: ", g);
console.log("Arava sig'imi: ", arava);
console.log("Tashish soni: ", counter);
























