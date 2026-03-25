// Object
//
// const tax = {
//     ism:"",
//     fam:"",
//     turi:"",
//     kasbi:"",
//     foiz:0,
//     calc: function(salary){
//         if(this.kasbi === "IT"){
//             return salary * 0.075
//         }
//         else {
//             return salary * 0.12
//         }
//     }
// }
//
// tax.ism = "Farrux";
// tax.fam = "Ganiboyev";
//     tax.kasbi = "IT";
//     tax.turi = "TAX";
//     console.log(tax);
//     console.log(tax.calc(10_000_000));


// TASK
 // car object
// radar object

const car = {
    carOwner:"",
    carNumber:"",
    year:0,
    model:"",
    speed:0
}

const radar = {
    jarima:0,
    date: new Date(),
    calc: function(){
        if(car.speed > 60 + 60){
            return `Jarima: ${this.jarima = 1_648_000}  Avtomobil egasi: ${car.carOwner} Avtomobil rusumi: ${car.model} Avtomobil raqami: ${car.carNumber} ${this.date}`
        } else if(car.speed > 60+40){
            return `Jarima: ${this.jarima = 824_000}  Avtomobil egasi: ${car.carOwner} Avtomobil rusumi: ${car.model} Avtomobil raqami: ${car.carNumber} ${this.date}`
        }else if(car.speed > 60+20){
          return `Jarima: ${this.jarima = 412_000}  Avtomobil egasi: ${car.carOwner} Avtomobil rusumi: ${car.model} Avtomobil raqami: ${car.carNumber} ${this.date}`
        }
        else{
            return `Sizga jarima yoq, Baxtlisz! ${car.carOwner}`
        }
    }
}

car.carOwner = "Farrux Ganiboyev";
    car.carNumber = "01.F999FF";
    car.year = 2028;
    car.model = "ZEEKR";
    car.speed = 40;
    console.log(radar.calc());

car.carOwner = "Sardor Ergashev";
car.carNumber = "01.A898AB";
car.year = 2028;
car.model = "BYD";
car.speed = 120;
console.log(radar.calc());

car.carOwner = "Egamberdi Asomov";
car.carNumber = "01.A802AB";
car.year = 2028;
car.model = "Gentra";
car.speed = 190;
console.log(radar.calc());


