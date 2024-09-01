// enum
enum carColor {
  "red",
  "black",
  "white",
}
// tuple
let newArray:[number,string,boolean]
newArray=[12,"hamza",true]
interface Vehicle {
  make: string;
  model: string;
  year: number;
  color: string;
  vin: string;
}
interface Car extends Vehicle {
  seatingCapacity: number;
  isElectric: boolean;
}
const a: Car[] = [];

// red white, black
a.push({
  make: "suzuki",
  model: "VganR",
  year: 2023,
  color: carColor[carColor.white],
  vin: "",
  seatingCapacity: 4,
  isElectric: false,
});
a.push({
  make: "suzuki",
  model: "VganR",
  year: 2023,
  color: carColor[carColor["red"]],
  vin: "",
  seatingCapacity: 4,
  isElectric: false,
});
const carColor2 = {
  red: 0,
  black: 1,
  white: 2,
  0: "red",
  1: "black",
  2: "white",
};
console.log(carColor2[1]);
console.log(carColor2.black);

console.log(a);
