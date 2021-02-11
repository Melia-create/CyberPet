class CyberPet {
    constructor(name) {
        this.name = name;
        this.hunger = 40;
        this.thirst = 50;
        this.happiness = 50;
        this.bored = 50;
        this.energy = 50;
        this.isSleeping = true;
    }

    eat() {
        if (this.hunger <= 40) {
            console.log(this.name, `is feeling hungry, this is making them grumpy and lethargic! You should feed`, this.name);
            this.happiness = this.happiness - 10;
            this.energy = this.energy - 10
            return this;
        } else {
            console.log(this.name, "is full!")
            return this;
        }
    }

    drink() {
        if (this.thirst <= 40) {
            console.log(this.name, `is feeling thirsty, this is making them grumpy and lethargic! You should feed`, this.name);
            this.happiness = this.happiness - 10;
            this.energy = this.energy - 10
            return this;
        } else {
            console.log(this.name, "'s thirst is quenched!")
            return this;
        }

    }

    sleep(){
        if (this.isSleeping){
        this.energy = this.energy +10;
        console.log (this.name, "'s currently sleeping, their energy is replenishing")
        return this;
        } else 
        console.log(this.name, "'s awake and wants to play!")
    }

    checkStatus(){
        console.log ("Name", this.name, "Happiness:", )
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

Bob.eat().drink().sleep()
Hoppy.sleep();
console.log(Bob)