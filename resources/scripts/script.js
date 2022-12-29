"use strict";

function Dog(name, breed, color) {
  (this.name = name),
    (this.breed = breed),
    (this.color = color),
    (this.bark = function () {
      return "Woof!";
    });
}

console.log(Dog);

const dog1 = new Dog("Daisy", "Labrador", "black");
console.log(dog1);
