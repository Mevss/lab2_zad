const _ = require('lodash');

const numbers = [10, 20, 30, 40, 50];
const average = _.mean(numbers);
const max = _.max(numbers);
const min = _.min(numbers);

console.log(`Średnia arytmetyczna: ${average}`);
console.log(`Maksymalna wartość: ${max}`);
console.log(`Minimalna wartość: ${min}`);

const user = {
    name: "Imie",
    surname: "Nazwisko",
    allGrades: [
        {
            subjectName: "Name1",
            grades: [5, 4, 3, 5, 2],
            weight: 3
        },
        {
            subjectName: "Name2",
            grades: [3, 3.5, 2],
            weight: 1
        },
        {
            subjectName: "Name3",
            grades: [4, 3, 3.5],
            weight: 5
        }
    ]
}

function printUserGradeInfo(user) {
    const { name, surname, allGrades } = user;
    
    let totalWeightedSum = 0;
    let totalWeight = 0;
  
    allGrades.forEach(subject => {
      const subjectAverage = subject.grades.reduce((sum, grade) => sum + grade, 0) / subject.grades.length;
      totalWeightedSum += subjectAverage * subject.weight;
      totalWeight += subject.weight;
    });
  
    const weightedAverage = totalWeightedSum / totalWeight;
  
    console.log(`Imię i nazwisko: ${name} ${surname}`);
    console.log(`Średnia ważona: ${weightedAverage.toFixed(2)}`);
  }
printUserGradeInfo(user);

const subjectWithWeightOne = _.find(user.allGrades, { weight: 1 });
console.log('Przedmiot z wagą 1:', subjectWithWeightOne);
