{
  // spread operator
  const bros1: string[] = ["Mir", "Mizan", "Firoz"];
  const bros2: string[] = ["Mir2", "Mizan2", "Firoz2"];

  bros1.push(...bros2);

  const mentors1 = {
    typescript: "Mezba",
    redux: "Mir",
    dbms: "Mizan",
  };

  const mentors2 = {
    typescript: "Mezba2",
    redux: "Mir2",
    dbms: "Mizan2",
  };

  const mentorList = {
    ...mentors1,
    ...mentors2,
  };

  const greetFriends = (...friends: string[]) => {
    friends.forEach((friend) => console.log(`Hi ${friend}`));
  };

  greetFriends("Abul", "Kabul", "Babul");
}
