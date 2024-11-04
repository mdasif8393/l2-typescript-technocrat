{
  // generic
  type GenericArray<T> = Array<T>;

  const numberArray: GenericArray<number> = [1, 3, 4, 5];
  const stringArray: GenericArray<string> = ["2", "3", "4", "5"];

  type User = {
    name: string;
    age: number;
  };
  const user: GenericArray<User> = [
    { name: "John", age: 22 },
    { name: "Asif", age: 44 },
  ];

  type GenericTuple<X, Y> = [X, Y];

  const friends: GenericTuple<string, number> = ["2", 3];
}
