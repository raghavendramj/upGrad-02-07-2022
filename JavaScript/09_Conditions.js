function checkForEvenNumber(x) {
//   if (x % 2 == 0) {
//     console.log("Even Number"); 
//   } else {
//     console.log("Not Even Number");
//   }

  (x % 2 == 0) ? console.log("Even Number") : console.log("Not Even Number");

  var result = x > 2 ? 1 : 0;
  console.log("result -> ", result);
}

checkForEvenNumber(2);
checkForEvenNumber(7);