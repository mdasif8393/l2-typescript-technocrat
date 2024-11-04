// 2-6: Constraints in typescript
{
  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Next Level Web Developer";

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent<{
    name: string;
    id: number;
    email: string;
    devType: string;
  }>({
    name: "Student",
    id: 22,
    email: "assd",
    devType: "next level web developer",
  });
  const student2 = addCourseToStudent<{
    name: string;
    id: number;
    email: string;
    hasWatch: string;
  }>({
    name: "Student2",
    id: 23,
    email: "sss",
    hasWatch: "Apple watch",
  });
  console.log(student1);
}
