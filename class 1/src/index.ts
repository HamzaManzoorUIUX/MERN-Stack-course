type Sum = (a: number, b: number) => void;
var sum: Sum = (a, b) => {
  console.log("Hello class", a + b);
};
sum(12, 15);
