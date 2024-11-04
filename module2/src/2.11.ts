// pick
type Person = {
  name: string;
  age: number;
  email?: string;
  contactNo: string;
};

// pick
type NameAge = Pick<Person, "name" | "age">;

// omit
type ContactInfo = Omit<Person, "name" | "age">;

// partial
type OptionalPerson = Partial<Person>;

// required
type RequiredPerson = Required<Person>;

// record

const emptyObj: Record<string, unknown> = {};

type MyObj = Record<string, string>;

const obj1: MyObj = {
  a: "aa",
  b: "bb",
  c: "cc",
};
//
