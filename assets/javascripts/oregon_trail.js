(function(){

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  }

  function Traveler(name, food, isHealthy) {
    this.name = name;
    this.food = getRandomIntInclusive(1, 100)
    this.isHealthy = true;
  }

  function makeTraveler(name) {
    return new Traveler(name);
  }

  // let traveler = makeTraveler("Henrietta");
  // let traveler2 = makeTraveler("Juan");

  // console.log(traveler2);

  let myArray = [];

  function Wagon(capacity) {
    this.passengers = myArray;
    this.capacity = capacity;
  }

  function makeWagon(capacity) {
    return new Wagon(capacity);
  }

  // let wagon = makeWagon(myArray, 5);

  // myArray.push("John");

  // console.log(wagon.capacity);
  //
  // console.log(myArray);

  // console.log(wagon);

  function hunt(traveler){
    let food = getRandomIntInclusive(1, 100);
    if (food > 50){
      traveler.food = traveler.food + 100;
    }
  }


  function eat(traveler){
    if (traveler.amount < 20){
      return traveler.isHealthy = false;
    } else if (traveler.amount > 0){
      traveler.amount = traveler.amount - 20;
      return traveler.isHealthy = true;
    }
  }

  function join(wagon, traveler){
    if (wagon.passengers.length < wagon.capacity){
      wagon.passengers.push(traveler);
    }
  }

  function quarantine(wagon) {
    for (let i = 0; i < wagon.passengers.length; i++){
      if (wagon.passengers[i].isHealthy === false){
        return true;
      }
    } return false;
  }

  function food(wagon) {
    let totalFood = 0;
    for (let i = 0; i < wagon.passengers.length; i++){
      totalFood = totalFood + wagon.passengers[i].food;
    }
    return totalFood;
  }


  // Create a wagon called 'wagon'
  let wagon = makeWagon(5);
  // Create a traveler with the name 'Henrietta' called 'traveler'
  let traveler = makeTraveler('Henrietta');
  // Create a traveler with the name 'Juan' called 'traveler2'
  let traveler2 = makeTraveler('Juan');

  hunt(traveler); // maybe get more food
  eat(traveler2);
  eat(traveler2); // juan is hungry
  join(wagon, traveler);
  join(wagon, traveler2);

  console.log(quarantine(wagon)); // print true if someone is sick, false otherwise
  console.log(food(wagon)); // print juan's food + henrietta's food




})();
