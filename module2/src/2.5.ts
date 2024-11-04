// Generic with function

{
  const createArray = (params: string): string[] => {
    return [params];
  };

  const genericArray = <T>(param: T): T[] => {
    return [param];
  };

  type User = { name: string; age: number };

  const result1 = genericArray<string>("serre");
  const result2 = genericArray<boolean>(true);
  const result3 = genericArray<User>({
    name: "test",
    age: 22,
  });
  console.log(result3);

  const genericArrayTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const result11 = genericArrayTuple<string, string>("serre", "sssa");
  const result22 = genericArrayTuple<boolean, string>(true, "sssa");
  const result33 = genericArrayTuple<User, number>(
    {
      name: "test",
      age: 22,
    },
    343
  );
  console.log(result33);

  ////
  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web Developer";

    return {
      ...student,
      course,
    };
  };

  type Student1 = {
    name: string;
    age: number;
    grade: number;
  };

  const student1 = addCourseToStudent<Student1>({
    name: "Student",
    age: 22,
    grade: 33,
  });
  console.log(student1);
}
