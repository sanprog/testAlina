/*
* Animal prototype
* */
function Animal (
	name = '',
	age = 0,
	weight = 0,
	food = 0,
	foodNum = 0,
	distance = 0,
){
	this.name = name;
	this.age = age;
	this.weight = weight;
	this.food = food;
	this.foodNum = foodNum;
	this.distance = distance;
}

Animal.prototype.go = function () {
	this.distance += this.age * 2;
	console.log(`${this.name} прошёл ${this.distance}км`);
};

Animal.prototype.sleep = function () {
	if (this.food >= (this.weight / 10) && this.distance >= 40) {
		console.log(`${this.name} спит`);
	} else {
		console.log(`${this.name} не может спать. Голоден или не устал.`);
	}
};

Animal.prototype.eat = function () {
	this.food += this.foodNum;
	console.log(`${this.name} съел ${this.food}кг`);
};

/*
* Lion prototype
* */
function Lion(name, age) {
	this._super.call(this, name, age);
	const weight = this.age * 40;
	this.weight = (weight <= 200) ? weight : 200;
	const foodNum = this.age * 2;
	this.foodNum = (foodNum <= 20) ? foodNum : 20;
}

Lion.prototype = Object.create(Animal.prototype);
Lion.prototype.constructor = Lion;
Lion.prototype._super = Animal;


/*
* init process
* */
const lion = new Lion('Benny', 23);
lion.go();
lion.eat();
lion.sleep();