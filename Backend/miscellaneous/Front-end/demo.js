class mammal {
    constructor(name) {
        this.name = name;
        this.type = "warm-blooded";
    }

    eat() {
        console.log("i'm eating")
    }
}

class dog extends mammal {
    constructor(name) {
        super(name);
    }

    bark() {
        console.log("wooff...")
    }
}

class cat extends mammal {
    constructor(name) {
        super(name);
    }

    bark() {
        console.log("meow...")
    }
}

