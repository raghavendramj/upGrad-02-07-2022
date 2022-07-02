//using literals we are creating the object!
var car = {
  model: "Benz A Class", //Property
  year: 2022,
  start: function () {
    //Methods
    console.log("Started!");
  },
  stop: function () {
    console.log("stopped!");
  },
};

console.log(car.model);
console.log(car.year);
console.log(car.start());
console.log(car.stop());
