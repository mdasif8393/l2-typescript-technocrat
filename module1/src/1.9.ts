{
  // type alias

  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };

  const asif: Student = {
    name: "Asif",
    age: 22,
    gender: "Male",
    contactNo: "0123456789",
    address: "House 123, Street 456, City",
  };
}

type UserName = string;

const userName: UserName = "Persian";

// function type alias
type Add = (num1: number, num2: number) => number;

const add: Add = (num1, num2) => num1 + num2;
