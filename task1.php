<?php

/**
 * Class Animal
 */
class Animal {

	/**
	 * @var string
	 */
	protected $name = 'NoName';
	/**
	 * @var int
	 */
	protected $age = 0;
	/**
	 * @var
	 */
	protected $weight;
	/**
	 * @var
	 */
	protected $food;
	/**
	 * @var
	 */
	protected $foodNum;
	/**
	 * @var
	 */
	protected $distance;

	/**
	 *
	 */
	public function go(){

		$this->distance += $this->age*2;
		echo $this->name . ' прошел ' . $this->distance . ' км.';

	}

	/**
	 *
	 */
	public function eat(){
		$this->food += $this->foodNum;
		echo $this->name . ' съел ' . $this->food . ' кг.';
	}

	/**
	 *
	 */
	public function sleep(){
		if($this->food >= $this->weight/10 && $this->distance >=40) {
			echo $this->name . ' спит';
		}
		else {
			echo $this->name . ' не может спать. Голоден или не устал.';
		}
	}

}


/**
 * Class Lion
 */
class Lion extends Animal {

	/**
	 * Lion constructor.
	 *
	 * @param $name
	 * @param $age
	 */
	public function __construct($name, $age)
	{
		$this->name = $name;
		$this->age = $age;

		$weight = $this->age * 40;
		$this->weight = ($weight <= 200) ? $weight : 200 ;

		$foodNum = $this->age * 2;
		$this->foodNum = ($foodNum <= 20) ? $foodNum : 20 ;

	}

}


$animal = new Lion('Лева', 20);

$animal->go();
$animal->eat();
$animal->sleep();
