// let a: any = 12;
// a = "hamza";
// a = true;

// let a: unknown = 12;
// a = "hamza";
// a = true;

// let x: never = "Hamza";

// let a: string | null;
// console.log(a);
// a = "Hamza";
// a = null;
// if(a){
//   console.log(a);
// }
const a = {
  name: "Hamza",
  age: 27,
  isDeveloper: true,
  fatherName: "Manzoor",
  talk: () => {
    console.log(`${a.name} is talking`);
  },
};
console.log(Object.keys(a));
console.log(Object.values(a));
console.log(Object.entries(a));
console.log(JSON.stringify(a));
const x = JSON.stringify(a);
console.log(JSON.parse(x));

console.log(a["fatherName"]);

import express, { Application, Request, Response } from "express";
const server: Application = express();

server.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
server.get("/user", (req: Request, res: Response) => {
  res.send("Hello you make a get request!");
});
server.post("/user", (req: Request, res: Response) => {
  res.send("Hello you make a post request!");
});
server.put("/user", (req: Request, res: Response) => {
  res.send("Hello you make a put request!");
});
server.delete("/user", (req: Request, res: Response) => {
  res.send("Hello you make a delete request!");
});
server.patch("/user", (req: Request, res: Response) => {
  res.send("Hello you make a patch request!");
});

server.listen(8000, () => {
  console.log("Server is running on port 8000");
});
