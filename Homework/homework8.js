'use strict';

//Homework 6

// Task 1

/* let delay = 3;
let intervalId = setInterval(() => {
  if (delay > 0) {
    console.log(delay)
    delay--;
  } else if (delay === 0) {
    clearInterval(intervalId);
    console.log('BOOM!')
  }
}, 1000) */

// Task 2

/* function detonatorTimer(delay) {
  if (delay > 0) {
    console.log(delay);
    delay --;
    setTimeout(detonatorTimer, 1000, delay);
  } else if(delay === 0) {
    console.log('BOOM!');
  }
}
detonatorTimer(3); */

//Task 3

/* let car = {
	brand: 'Range Rover',
	model: 'Evoque',
	year: 2023,
	color: 'velvet green',
	engine: 'Intercooled Turbo Premium',
	dispalacement: '2.0 L',
	fuel: 'gasoline',
	overview() {
		console.log(`Here we have brand new ${this.brand} ${this.model} ${this.year}`);
	},
	specs() {
		console.log(`This model has ${this.dispalacement} ${this.engine} engine that runs on ${this.fuel}`);
	},
	design(){
		console.log(`The slick design of ${this.brand} ${this.model} this year has got a new color option – color`);
	}
}

car.overview();
car.specs();
car.design(); */

// Task 4

/* let bindedOverview = car.overview.bind(car);
setTimeout(bindedOverview, 1000);
let bindedSpecs = car.specs.bind(car);
setTimeout(bindedSpecs, 1000);
let bindedDesign = car.design.bind(car);
setTimeout(bindedDesign, 1000); */

function durationBetweenDates(startDate = '01 Jan 2000', endDate = '01 Jan 2023', timePeriod = 'days') {

  const total = Date.parse(endDate) - Date.parse(startDate);
  switch (timePeriod) {
    case 'days': return Math.floor( total/(1000*60*60*24) );
    case 'hours': return Math.floor( (total/(1000*60*60)) % 24 );
    case 'minutes': return Math.floor( (total/1000/60) % 60 );
    case 'seconds': return Math.floor( (total/1000) % 60 );
    default: return 0;
  }
}

let result = durationBetweenDates()
console.log(result)