/*
Задача: методом деструктуризації оголосіть змінні 
motherName, motherSecondName, motherAge, motherJob, fatherInitials (об’єкт з ім’ям і прізвищем батька, без віку та посади). 
Якщо немає роботи (job), вкажіть значення ’unemployed’.
*/

const obj = {
  name: "Vova",
  secondName: "Simba",
  age: 15,
  parents: {
    mother: {
      name: "Natali",
      secondName: "Simba",
      age: 38,
    },
    father: {
      name: "Oleg",
      secondName: "Simba",
      age: 45,
      job: "driver",
    },
  },
};

const {
  parents: {
    mother: {
      name: motherName,
      secondName: motherSecondName,
      age: motherAge,
      job: motherJob = "unemployed",
    },
    father: fatherInitials = {
      name: "hi",
      secondName: "yo",
    },
  },
} = obj;

console.log("---motherName", motherName);
console.log("---motherSecondName", motherSecondName);
console.log("---motherAge", motherAge);
console.log("---motherJob", motherJob);
console.log("---fatherInitials", fatherInitials);
