// destructuring

const user = {
  id: 345,
  name: {
    firstName: "John",
    middleName: "Kabir",
    lastName: "Shamsu",
  },
  age: 25,
  contactNo: "9111",
  address: "Ugenda",
};

const { age } = user;

const {
  name: { middleName: midName },
} = user;

const myFriends = ["abul", "Kabul", "Chabul", "Mabul", "Bodul"];

const [, , bestFriend, ...restFriend] = myFriends;
