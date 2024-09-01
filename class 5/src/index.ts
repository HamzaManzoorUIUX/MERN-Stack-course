// interface user {}
// interface TeamManager{}
// const employees = [
//   {
//     name: "hamza",
//     role: "senior frontend developer",
//     salary: 25000,
//     manageTeam:true,
//     managingTeam:()=>{}
//   },
//   {
//     name: "Tahir",
//     role: "wordpress developer",
//     salary: 35000,
//     manageeam:false,
//     managingTeam:()=>{}
//   },
// ];
// interface Animals {
//   lengsCount: number;
//   headCount: number;
//   eatmeat: boolean;
//   name: string;
//   walk: () => void;
// }
// interface Dogs extends Animals {
//   color: string;
//   hasTail: boolean;
// }
// interface Humans extends Animals {
//   canThink: boolean;
//   canTalk: boolean;
//   job: string;
//   working: () => void;
// }
// interface SoftwareEngineers extends Humans {
//   canWriteCode: boolean;
// }
// const mydog: Dogs = {
//   lengsCount: 4,
//   headCount: 1,
//   eatmeat: true,
//   color: "black",
//   hasTail: true,
//   name: "Tom",
//   walk: () => {
//     console.log(`walk on  ${mydog.lengsCount}`);
//   },
// };
// const Employee: Animals = {
//   lengsCount: 2,
//   headCount: 1,
//   eatmeat: true,
//   name: "Furqan",
//   walk: () => {
//     console.log(`walk on  ${mydog.lengsCount}`);
//   },
// };
// const wordpressDev:SoftwareEngineers={

// }
type sumPrams = number | string;

function sum(val1: sumPrams, val2: sumPrams):void {
console.log(Number(val1) + Number(val2));
}
