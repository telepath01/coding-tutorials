'use strict';
// This was the old way of creating classes
//
//
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.job = false;

  this.fullName = function () {
    return this.firstName + ' ' + this.lastName;
  };
  this.setFirstName = function (firstName) {
    this.firstName = firstName;
  };
  this.setLastName = function (lastName) {
    this.lastName = lastName;
  };
}
