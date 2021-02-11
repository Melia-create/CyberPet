class CyberPet {
    constructor(name) {
        this.name = name;
        this.hunger = 50;
        this.thirst = 50;
        this.happiness = 50;
        this.bored = 50;
        this.energy = 50;
        this.isSleeping = true;
    }

    eat() {
        if (this.hunger > 4) {
            this.happiness = this.happiness + 5;
            this.energy = this.energy + 5;
            this.hunger = this.hunger - 5;
            return `${this.name} devoured the food!`
        } else {
            return`${this.name} is full!`
        }
    }

    drink() {
        if (this.thirst > 4) {
            this.happiness = this.happiness + 5;
            this.energy = this.energy + 5;
            this.thirst = this.thirst - 5;
            return `${this.name} is lapping up the water!`
        } else {
            return `${this.name}'s thirst is quenched!`
        }


    }

    sleep(){
        if (this.isSleeping){
        this.energy = this.energy + 10;
        this.hunger = this.hunger + 3;
        this.thirst = this.thirst + 3;
        return `${this.name} is currently sleeping!`
        } else 
        return `${this.name} is awake and wants to play!`
    }

    play(){
        if (this.bored > 4 & this.energy > 4){
            this.bored = this.bored - 5;
            this.energy = this.energy - 5;
            this.thirst = this.thirst + 5
            this.hunger = this.hunger + 5
            return `${this.name} is playing.`
        } else {
            return `${this.name} is tired from all the playing!`
        }
    }

    checkStatus(){
        console.log ("Name:", this.name, "Happiness:", this.happiness, "Energy", this.energy, "Hunger:", this.hunger, "Thirst:", this.thirst, "Boredom:", this.bored)
    }
}



class Dog extends CyberPet {
    constructor(name) {
        super(name)
    }
}

class Rabbit extends CyberPet {
    constructor(name) {
        super(name)
    }
}

class Cat extends CyberPet {
    constructor(name) {
        super(name)

    }
}

const Bob = new Dog("Bob");
let Hoppy = new Rabbit("Hoppy");
let Roly = new Cat("Roly");