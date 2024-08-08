var classesDays;
let semesterDays = 20;
let hollyDays = 5;
let absences;
let classesDays = semesterDays-hollyDays;
const maxAbsences = 0.25 * classesDays;

console.log(classesDays);
console.log(Math.ceil(maxAbsences));
//console.log(Number.isInteger(Math.ceil(maxAbsences)));
