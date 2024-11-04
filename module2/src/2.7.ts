// 2-7 Constraint using key of

{
  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner1 = "bike" | "car" | "ship";

  type Owner2 = keyof Vehicle;

  const person1: Owner2 = "bike";

  //////////

  const getPropertyValue = <T, Q>(obj: T, key: keyof T) => {
    return obj[key];
  };

  const user = {
    name: "Perwsioa",
    age: 26,
    address: "ctg",
  };

  const result1 = getPropertyValue(user, "name");
  console.log(result1);
}
