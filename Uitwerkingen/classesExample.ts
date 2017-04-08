class MovingAnimal {
	name: string;
	constructor(theName: string) { this.name = theName; }
	move(distanceInMeters: number = 0) {
		console.log(`${this.name} moved ${distanceInMeters}m.`);
	}
}

class Snake extends MovingAnimal {
	constructor(name: string) { super(name); }
	move(distanceInMeters = 5) {
		console.log("Slithering...");
		super.move(distanceInMeters);
	}
}

class Horse extends MovingAnimal {
	constructor(name: string) { super(name); }
	move(distanceInMeters = 45) {
		console.log("Galloping...");
		super.move(distanceInMeters);
	}
}

//add a monkey and add eat function

function test() {
	let sam:MovingAnimal = new Snake("Sammy the Python");
	let tom:MovingAnimal = new Horse("Tommy the Palomino");

	sam.move();
	tom.move(34);
	return sam.name;
}


class Person {
	constructor(public name: string) { }
}
interface Loggable {
	log(): void;
}
class ConsoleLogger implements Loggable {
	log() {
		console.log("consoleLogger")
	}
}


//make an lion which can eat all other animals

document.body.innerHTML = test();