// 1-11 Ternary, Optional Chaining & Nullish Coalescing Operator

{
  // ternary operator
  const age = 20;
  const isAdult = age > 18 ? "adult" : "child";

  console.log({ isAdult });

  // Nullish Coalescing Operator

  const isAuthenticated = undefined;
  const result1 = isAuthenticated ?? "Guest";
  const result2 = isAuthenticated ? isAuthenticated : "Guest";
  console.log({ result1, result2 });

  // optional chaining
  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };

  const user1: User = {
    name: "Asif",
    address: {
      city: "San Francisco",
      road: "San Francisco road",
      presentAddress: "San Francisco present",
    },
  };

  const permanentAddress =
    user1?.address?.permanentAddress ?? "No Permanent Address";

  console.log(permanentAddress);
}
