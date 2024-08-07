var classesDays;
var semesterDays = 20;
var hollyDays = 5;
var absences;
var classesDays = semesterDays-hollyDays;
const maxAbsences = 0.25*classesDays;

console.log(classesDays);
console.log(Math.ceil(maxAbsences));
//console.log(Number.isInteger(Math.ceil(maxAbsences)));
