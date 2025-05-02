{
  // Ternary Operator | Optional Chaining | Nullish Coalescing Operator

  const age: number = 18;

  if (age >= 18) {
    // console.log("Adult");
  } else {
    // console.log("Not Adult");
  }

  const isAdult = age >= 18 ? "Adult" : "Not Adult";
  //   console.log(isAdult);

  // Nullish Coalescing
  // const isAuthenticated = null;
  const isAuthenticated = "";

  const resultOne = isAuthenticated ?? "Guest";
  const resultTwo = isAuthenticated ? isAuthenticated : "Guest";
  // console.log({ resultOne }, { resultTwo });

  // Nullish coalescing
  type User = {
    name: string;
    address: {
      road: string;
      city: string;
      presentAddress: string;
      permanentAddress: string;
    };
  };

  const user: User = {
    name: "Sifat",
    address: {
      road: "Bagan bari road",
      city: "Rangpur",
      presentAddress: "Dhaka",
      permanentAddress: "Rangpur Division",
    },
  };
  // console.log(user);
  const permanentAddress = user?.address?.permanentAddress ?? "No Address";
  console.log(permanentAddress);
}
