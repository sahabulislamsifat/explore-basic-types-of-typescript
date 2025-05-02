{
  //** Union Types '.....' | '..... */

  //   type FrontendDeveloper = "Fakibaz Developer" | "Junior Frontend Developer";
  //   type FullstackDeveloper = "Fokira Developer" | "Full Stack Developer";

  //   type Developer = FrontendDeveloper | FullstackDeveloper;

  //   type User = {
  //     name: string;
  //     age: number;
  //     email?: string;
  //     gender: "male" | "female";
  //     bloodGroup: "O+" | "B+" | "AB+" | "A+" | "A-";
  //   };

  //   const userOne: User = {
  //     name: "Sifat",
  //     age: 22,
  //     email: "sahabulislamsifat@gmail.com",
  //     gender: "male",
  //     bloodGroup: "B+",
  //   };

  //   const userTwo: User = {
  //     name: "Sahabul",
  //     age: 22,
  //     gender: "male",
  //     bloodGroup: "B+",
  //   };

  // Intersection Type
  type FrontendDeveloper = {
    skills: string[];
    designationOne: "Frontend Developer";
  };
  type backendDeveloper = {
    skills: string[];
    designationTwo: "Backend Developer";
  };

  type FullstackDeveloper = FrontendDeveloper & backendDeveloper;

  const fullstackDeveloper: FullstackDeveloper = {
    skills: ["HTML", "CSS", "Javascript", "Typescript", "Express", "DBMS"],
    designationOne: "Frontend Developer",
    designationTwo: "Backend Developer",
  };
}
