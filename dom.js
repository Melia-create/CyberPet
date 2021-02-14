let petContainer = document.querySelector("#petcontainer")
let methodContainer = document.querySelector("#methodscontainer")

//buttons
let selectDog = document.querySelector("#dogbtn")
let selectCat = document.querySelector("#catbtn")
let selectRabbit = document.querySelector("#rabbitbtn")
let petImgs = document.querySelector("#petimgs")


//images

let petName = document.querySelector("#petname")
let rabbitImg = document.querySelector("#rabbitimg")
let dogImg = document.querySelector("#dogimg")
let catImg = document.querySelector("#catimg")
let P;

//progress bar
let progressBars = document.querySelector("#progressbars")

methodContainer.style.display = "none"
progressBars.style.display = "none"



selectDog.addEventListener("click", () => {
    P = new Dog(prompt("What is your Dog's name going to be?"));
    methodContainer.style.display = "block"
    rabbitImg.style.display = "none"
    catImg.style.display = "none"
    progressBars.style.display = "block"
    petContainer.style.display = "none"
    petName.textContent = `${P.name}`;
});

selectRabbit.addEventListener("click", () => {
    P = new Rabbit(prompt("What is your Rabbit's name going to be?"));
    methodContainer.style.display = "block"
    petContainer.style.display = "none"
    dogImg.style.display = "none"
    catImg.style.display = "none"
    progressBars.style.display = "block"
    petName.textContent = `${P.name}`;
});

selectCat.addEventListener("click", () => {
    P = new Cat(prompt("What is your Cat's name going to be?"));
    methodContainer.style.display = "block"
    dogImg.style.display = "none"
    rabbitImg.style.display = "none"
    petContainer.style.display = "none"
    progressBars.style.display = "block"
    petName.textContent = `${P.name}`;
});

//Actions 

let giveFood = document.querySelector("#feedbtn")
let giveDrink = document.querySelector("#drinkbtn")
let petPlay = document.querySelector("#playbtn")
let petSleep = document.querySelector("#sleepbtn")

giveFood.addEventListener("click", () => {
    hungerBar.value += 20;
})

giveDrink.addEventListener("click", () => {
    thirstBar.value += 20;
})

petPlay.addEventListener("click", () => {
    energyBar.value -= 10;
    boredomBar.value += 10;
})

petSleep.addEventListener("click", () =>{
    energyBar.value += 20
})


//progress bars

let hungerBar = document.querySelector("#hungerbar")
let thirstBar = document.querySelector("#thirstbar")
let energyBar = document.querySelector("#energybar")
let boredomBar = document.querySelector("#boredbar")

hungerBar.value = 100;
thirstBar.value = 100;
energyBar.value = 100;
boredomBar.value = 100;

let hunger = setInterval(() => {
    hungerBar.value--;
}, 1000);

let thirst = setInterval(() => {
    thirstBar.value--;
}, 1000);

let energy = setInterval(() => {
    energyBar.value--;
}, 1000);

let bored = setInterval(() => {
    boredomBar.value--;
}, 1000);