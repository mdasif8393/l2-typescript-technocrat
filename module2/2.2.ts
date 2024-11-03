// 2-2: Interface, type vs interface
{
  // interface
  type User1 = {
    name: string;
    age: number;
  };

  type UserWithRole1 = User1 & { role: string };

  const user1: UserWithRole1 = {
    name: "User1",
    age: 25,
    role: "Developer",
  };

  interface User2 {
    name: string;
    age: number;
  }

  interface User2WithRole extends User2 {
    role: string;
  }

  const user2: User2WithRole = {
    name: "User2",
    age: 30,
    role: "Manager",
  };

  type Roll = number[];

  const rollNumbers: Roll = [1, 2, 3, 4, 5, 6, 7, 8];

  interface RollInterface {
    [index: number]: number;
  }

  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 + num2;

  interface AddInterface {
    (num1: number, num2: number): number;
  }
}
