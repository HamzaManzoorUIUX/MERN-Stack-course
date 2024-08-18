type USER = {
  name: string;
  age: number;
  isDeveloper?: boolean;
  fatherName: string;
};
const convertNumber = (str: string) => {
  const myNumber = isNaN(Number.parseFloat(str)) ? 0 : Number.parseFloat(str);
  if (!myNumber) console.error("Not a number");
  return myNumber;
};
let a = convertNumber("123");
let b = Number("98");
const sum = (a: number, b: number) => {
  return a + b;
};
const multiply = (a: number, b: number) => {
  return a * b;
};
console.log(sum(a, b));
console.log(multiply(a, b));
const userName: string = "Hamza Manzoor";
const age: number = 27;
const isDeveloper = true;
const students: string[] = ["Ali", "Fatima", "Hamza", "Raza", "Umar"];
students.push("Arslan");
students.push("12");
const user1: USER = {
  name: "Hamza",
  age: 27,
  fatherName:"Manzoor"
};
console.log(userName, age, isDeveloper, students, user1);
