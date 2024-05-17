let firstname = "savitha";

type User = {
  name: string;
  age: number;
  salary: number;
};
let user1: User = { name: "savitha", age: 12, salary: 12 };
/**Interfaces */
interface Human {
  name: string;
  gender: string;
  age: number;
  getDetails?: () => string;
}

type Dev = Omit<Human, "age">;
class Person implements Human {
  constructor(
    public name: string,
    public gender: string,
    public age: number,
    public profession?: string
  ) {}
  getDetails() {
    return "shee";
  }
}

const score: Array<number> = [90, 85, 76];
const names: Array<string> = ["savi", "raj"];

function getUser<T>(arg: T): T {
  return arg;
}
const getData = <T>(arg: T): T => {
  return arg;
};
const data = getData<string>("savita");
const data2 = getData<Human>({ name: "savi", age: 23, gender: "female" });
function getSearchProducts<T>(data: T[]): T[] {
  return data.filter((item, index) => item === data[index]);
}

getSearchProducts<Human>([
  { name: "savi", age: 12, gender: "female" },
  { name: "rajani", age: 23, gender: "male" },
]);
