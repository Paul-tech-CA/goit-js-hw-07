'use strict';

class Car {
  static getSpecs({ maxSpeed, speed, isOn, distance, price }) {
    console.log(
      `maxSpeed; ${maxSpeed}, speed: ${speed}, isOn: ${isOn}, distance: ${distance}, price: ${price}`,
    );
  }

  constructor({ maxSpeed, price }) {
    this.speed = 0;
    this._price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = false;
    this.distance = 0;
  }

  get price() {
    return this._price;
  }

  set price(newPrice) {
    this._price = newPrice;
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  accelerate(speed) {
    if ((this.speed += speed) <= this.maxSpeed) this.speed;
  }

  decelerate(speed) {
    if ((this.speed -= speed) >= 0) this.speed;
  }

  drive(hours) {
    if (this.isOn) this.distance += this.speed * hours;
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
