/*
Write an Airplane object that initializes name.
Give airplanes the ability to .takeOff() and .land():
-If a plane takes off, its isFlying property is set to true.
-If a plane lands, its isFlying property is set to false.
*/


function Airplane(name) {
  this.name = name;
  this.isFlying = false;
  this.takeOff = function () {
    this.isFlying = true
  };
  this.land = function () {
    this.isFlying = false
  }
}
