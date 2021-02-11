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
            console.log(this.name, "is enjoying the food you've given them");
            this.happiness = this.happiness + 5;
            this.energy = this.energy + 5;
            this.hunger = this.hunger - 5;
            return this;
        } else {
            console.log(this.name, "is full!")
            return this;
        }
    }

    drink() {
        if (this.thirst > 4) {
            console.log(this.name, "is lapping up the water!");
            this.happiness = this.happiness + 5;
            this.energy = this.energy + 5;
            this.thirst = this.thirst - 5;
            return this;
        } else {
            console.log(this.name, "'s thirst is quenched!")
            return this;
        }
    }

    play() {
        if (this.bored > 4 & this.energy > 4) {
            console.log(this.name, "is playing and having fun!")
        this.bored = this.bored - 5;
        this.thirst = this.thirst + 5;
        this.hunger = this.hunger + 5;
        this.energy = this.energy - 4;
        return this;
    } else {
        console.log(this.name, "'s tired from all the playing!")
    }

    sleep() {
        if (this.isSleeping) {
            console.log(this.name, "'s currently sleeping, don't disturb them!")
            this.energy = this.energy + 10;
            this.hunger = this.hunger + 3;
            this.thirst = this.thirst + 3;
            return this;
        } else
            console.log(this.name, "'s awake and wants to play!")
    }

    checkStatus() {
        console.log("Name:", this.name, "Happiness:", this.happiness, "Energy", this.energy, "Hunger:", this.hunger, "Thirst:", this.thirst, "Boredom:", this.bored)
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