let roommatesName = ["Madinaxon", "Madinabonu", "Og'abek", "Farrux", "Abdulaziz", "Ali", "Umid","Behruz.i", "Behruz.k", "Behruz", "Husan", "Shamsiddin", "Munisa", "Lola","Dinara", "Rano", "Muso", "Bobur", "MuhammadBobur", "Foziljon", "Abdulloh", "Yaxyo", "Shoxjahon", "Nosirjonova", "Sherbek", "Zamir", "Aziz"]


let personName = document.getElementById("name");

function getRandomPerson(){
    let random = Math.floor(Math.random() * roommatesName.length);
    personName.innerHTML = roommatesName[random];
}
function takeMoney(){
    let creditCard = prompt("Please enter your card number");

}



