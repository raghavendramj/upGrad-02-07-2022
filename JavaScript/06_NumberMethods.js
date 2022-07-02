var x = typeof 4;
console.log("typeof 4 ", x);

var y = typeof "cricket";
console.log("typeof cricket ", y);

var z = 200;
console.log(z, typeof z.toString(), z.toString());

var a = 14.456767687878788;
console.log("$", a.toFixed(0));
console.log("$", a.toFixed(1));
console.log("$", a.toFixed(2));

console.log("--------------- Number ------------------------");
console.log(Number(true));
console.log(Number(false));
console.log(Number("10"));
console.log(Number("    10    "));
console.log(Number("10.33"));
console.log(Number("10,33"));
console.log(Number("Raghav"));
console.log(new Date("2/7/2022"));

console.log("------------------ parseInt ---------------------");

console.log(parseInt("10"));
console.log(parseInt("10.33"));
console.log(parseInt("102 20 30"));
console.log(parseInt("10 years"));

console.log("------------------ parseFloat ---------------------");

console.log(parseFloat("10"));
console.log(parseFloat("10.33")); 
console.log(parseFloat("10 years"));