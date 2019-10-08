class Animal {
	constructor(
		name = '',
		age = 0,
		weight = 0,
		food = 0,
		foodNum = 0,
		distance = 0,
	) {
		this.name = name;
		this.age = age;
		this.weight = weight;
		this.food = food;
		this.foodNum = foodNum;
		this.distance = distance;
	}

	go() {
		this.distance += this.age * 2;
		console.log(`${this.name} прошёл ${this.distance}км`);
	}

	sleep() {
		if (this.food >= (this.weight / 10) && this.distance >= 40) {
			console.log(`${this.name} спит`);
		} else {
			console.log(`${this.name} не может спать. Голоден или не устал.`);
		}
	}

	eat() {
		this.food += this.foodNum;
		console.log(`${this.name} съел ${this.food}кг`);
	}
}

class Lion extends Animal {
	constructor(name, age) {
		super();
		this.name = name;
		this.age = age;
		const weight = this.age * 40;
		this.weight = (weight <= 200) ? weight : 200;
		const foodNum = this.age * 2;
		this.foodNum = (foodNum <= 20) ? foodNum : 20;
	}
}

const lion = new Lion('Benny', 23);
lion.go();
lion.eat();
lion.sleep();