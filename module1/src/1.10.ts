{
  // union and intersaction
  //   type FrontendDeveloper = "fakibazDeveloper" | "juniorDeveloper";
  //   type FullstackDeveloper = "frontendDeveloper" | "expertDeveloper";

  //   type Developer = FrontendDeveloper | FullstackDeveloper;

  //   const newDeveloper: FrontendDeveloper = "juniorDeveloper";

  //   type User = {
  //     name: string;
  //     email: string;
  //     gender: "male" | "female";
  //     bloodGroup: "A+" | "B+";
  //   };

  //   const asif: User = {
  //     name: "asif",
  //     email: "asif@gmail.com",
  //     gender: "male",
  //     bloodGroup: "A+",
  //   };

  type FrontendDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
  };
  type BackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;

  const fullstackDeveloper: FullstackDeveloper = {
    skills: ["JavaScript", "TypeScript", "Node.js"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };
}
