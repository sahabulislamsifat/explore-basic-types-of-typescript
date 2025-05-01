// Reference Type --> Object
// const user: {
//   firstName: string;
//   middleName: string;
//   lastName: string;
// } = {
//   firstName: "Sahabul",
//   middleName: " Islam",
//   lastName: "Sifat",
// };
const user: {
  company: string;
  // company: "Freelancers It";
  //   readonly company: string;
  firstName: string;
  //   middleName: string; // middle name is missing type.
  middleName?: string; // when middleName is missing then we have to use optional chaining.
  lastName: string;
  isMarried: boolean;
} = {
  //   company: "Freelancers it",
  //   company: "Freelancers It Bangladesh",
  company: "Freelancers It",
  firstName: "Sahabul",
  lastName: "Sifat",
  isMarried: false,
};

user.company = "Freelancers";
