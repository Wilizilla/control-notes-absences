// Notas principais
var gradeN1;
var gradeN2;
var gradeN3;

// Notas N2
var gradeAp;
var gradeAi;

// inputs 
var gradeN1 = prompt("Qual a sua nota em N1?");
var gradeAp = prompt("Qual a sua nota em Ap?");
var gradeAi = prompt("Qual a sua nota em Ai?");

// Calculos

let numberN1 = parseFloat(gradeN1);
let numberAp = parseFloat(gradeAp);
let numberAi = parseFloat(gradeAi);

gradeN2 = (numberAp+numberAi)/2;
gradeN1 = numberN1;

// Print
console.log(gradeN1);
console.log(gradeN2);

alert("Sua nota em N1 foi: " + gradeN1 +
      ". \n Sua nota em N2 foi: " + gradeN2 + "."

);



