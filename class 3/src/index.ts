// factorial finder,
// calculate salary on user input days(work with date),
// input user object from user and if value is optional then user can skip it other wise ensure that user input each value
const input = require("input");
const sum = (num1: number | string, num2: number | string) => {
  if (!isNaN(Number(num1)) && !isNaN(Number(num2)))
    return Number(num1) + Number(num2);
  return "one of your value is not a Number";
};
const objectParse = async (val: string) => {
  return JSON.parse(val);
};
const getUserInfo = async () => {
  //   const number1: string = await input.text("Hello user Enter number1");
  //   const numbe2: string = await input.text("Hello user Enter number2");
  //   console.log(sum(Number(number1), Number(numbe2)));
  console.log('sum("123","956")', sum("123", "956"));
  console.log(JSON.stringify(["hamza", "ali", "raza", "manzoor"]));
  console.log("objectParse", objectParse('["hamza","ali","raza","manzoor"]'));
};
getUserInfo();
// type myNumberTyoe = number | string | boolean;
type userType = {
  name: string;
  isDeveloper: boolean;
  class?: string;
  age: number;
  friends: string[];
  address: { street: string; city: string; country: string };
};
const user = {
  name: "Hamza",
  class: "BSSE",
  age: 27,
  isDeveloper: true,
  friends: ["Ali", "Raza", "Umar"],
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA",
  },
};
const user2 = {
  name: "Ali",
  isDeveloper: true,
  age: 26,
  friends: ["Hamza", "Raza", "Umar"],
  address: {
    street: "456 Elm St",
    city: "Los Angeles",
    country: "USA",
  },
};
const newUser: userType[] = [user, user2];
console.log(newUser.map((obj) => obj.age + 10));
