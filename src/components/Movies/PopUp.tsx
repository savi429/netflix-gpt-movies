import React, { useEffect, useState } from "react";

interface PopUpProps {
  title: string;
  showPopUp?: () => void;
}

interface Users {
  name: string;
  email: string;
  age: number;
  isAdmin: boolean;
}
// interface Users {
//   githubId: string;
// }
export interface Name {
  firstName: string;
  lastName: string;
}
interface Employee {
  name: Name;
  age: number;
}
type cardNumber = {
  cardnumber: number;
};
type cardCvv = {
  cardCvv: number;
};
type cardDetails = cardNumber & cardCvv;
const enum SeatChoice {
  FIRST,
  MIDDLE = 10,
  WINDOW,
  FOURTH, //FOURTH ="fourth"
}
const PopUp = ({ title }: PopUpProps) => {
  const [users, setUsers] = useState<Users[]>([]);
  const [user, setUser] = useState<Name | null>(null);
  const [employee, setEmployee] = useState<Employee>({
    name: { firstName: "", lastName: "" },
    age: 0,
  });
  const [admin, setAdmin] = useState<Name>({} as Name);
  const [description, setDescription] = useState<string>("");
  let contextType: "dark" | "light" = "dark";

  let emps: (string | number)[] = ["savita", 2];

  let docs: string[] | number[] = ["savi", "rajani"];

  let tuples: [string, number, boolean] = ["savi", 3, true];
  const seat = SeatChoice.FIRST;

  useEffect(() => {
    setUsers([{ name: "savi", email: "sdsfdsg", age: 12, isAdmin: false }]);
  }, []);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };
  const getCardDetails = (card: cardDetails) => {};
  getCardDetails({ cardCvv: 12, cardnumber: 123 });
  return (
    <div>
      PopUp
      <h1>{title}</h1>
      {users.map(({ name }) => (
        <li>{name}</li>
      ))}
      <input type="text" value={description} onChange={handleChange} />
    </div>
  );
};

export default PopUp;
