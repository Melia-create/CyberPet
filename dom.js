let petContainer = document.querySelector("#petcontainer")
let selectDog = document.querySelector("#dogbtn")
let selectCat = document.querySelector("#catbtn")
let selectRabbit = document.querySelector("#rabbitbtn")
let petImg = document.querySelector("#petimg")
let methodContainer = document.querySelector("#methodscontainer")
let giveFood = document.querySelector("#feedbtn")
let giveDrink = document.querySelector("#drinkbtn")
let petPlay = document.querySelector("#playbtn")
let petSleep = document.querySelector("#sleepbtn")
let checkStatus = document.querySelector("#statusbtn")
let statusBar = document.querySelector("#statusbar")
let petName = document.querySelector("#petname")
let P;

methodContainer.style.display = "none"
checkStatus.style.display = "none"

selectDog.addEventListener("click", () => {
    P = new Dog (prompt("What is your Dog's name going to be?"));
    methodContainer.style.display = "block"
    checkStatus.style.display = "block"
    petName.textContent = `${P.name}`;

})