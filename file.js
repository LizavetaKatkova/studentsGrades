const grades = [];
grades[0] = Math.ceil(Math.random() * 100);
grades[1] = Math.ceil(Math.random() * 100);
grades[2] = Math.ceil(Math.random() * 100);
grades[3] = Math.ceil(Math.random() * 100);
grades[4] = Math.ceil(Math.random() * 100);
grades[5] = Math.ceil(Math.random() * 100);
grades[6] = Math.ceil(Math.random() * 100);
grades[7] = Math.ceil(Math.random() * 100);
grades[8] = Math.ceil(Math.random() * 100);
grades[9] = Math.ceil(Math.random() * 100);
grades[10] = Math.ceil(Math.random() * 100);
grades[11] = Math.ceil(Math.random() * 100);
console.log(grades);

let sum = 0;
grades.forEach(function (num) {
  sum += num;
});

console.log("Средний балл студентов - " + Math.ceil(sum / grades.length));

grades.sort(function (a, b) {
  return a - b;
});

console.log("Максимальный балл среди студентов - " + grades[11]);
console.log("Минимальный балл среди студентов - " + grades[0]);

const positiveGrades = grades.filter(function (grade) {
  return grade >= 60;
});

console.log(
  "Количество студентов, получивших положительную оценку - " +
    positiveGrades.length
);

const negativeGrades = grades.filter(function (grade) {
  return grade < 60;
});

console.log(
  "Количество студентов, получивших отрицательную оценку - " +
    negativeGrades.length
);

const letterGrades = grades.map(function (grade) {
  if (grade <= 100 && grade >= 80) {
    return "A";
  } else if (grade <= 79 && grade >= 60) {
    return "B";
  } else if (grade <= 59 && grade >= 40) {
    return "C";
  } else if (grade <= 39 && grade >= 20) {
    return "D";
  } else {
    return "E";
  }
});

console.log(letterGrades);
