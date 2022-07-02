var nameOfAPerson;
console.log("nameOfAPerson -> ", nameOfAPerson);

nameOfAPerson = "John Doe";
console.log("nameOfAPerson -> ", nameOfAPerson);

var nameOfADifferentPerson = "Adam Gilly";
console.log("nameOfADifferentPerson -> ", nameOfADifferentPerson);

function testScopes() {
  const number = 12; //Declaring + init 1st
  console.log("1st -> number -> ", number);
  number = 14; // Error -> TypeError: Assignment to constant variable.
  console.log("2nd -> number -> ", number);
}

testScopes();
