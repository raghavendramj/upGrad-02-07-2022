var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //Number ARRAY
var students = ["Rajesh", "Sheldon", "Leonard", "Howard"]; //String ARRAY

var firstElement = numbers[0];
console.log("firstElement -> ", firstElement);
console.log("students[0] -> ", students[0]);

console.log("------------------ FOR LOOP -----------------");
//Initialization -> ONLY ONCE;
//condition check -> EVERY ITERATION;
// increment -> EVERY ITERATION
for (var i = 0; i < students.length; i++) {
  console.log("For Loop :- Elements:-  ", students[i]);
}

console.log("------------------ WHILE LOOP -----------------");
var x = 0; ///Initialization
while (x < students.length) {
  //condition check
  console.log("while LOOP :- Elements:-  ", students[x]);
  x++; //increment
}
