{
  // Type Alias

  // Object
  type Student = {
    name: string;
    age: number;
    profession: string;
    contact?: string;
    address: string;
  };

  const studentOne: Student = {
    name: "Sifat",
    age: 22,
    profession: "Student",
    contact: "01632165523",
    address: "Rangpur, Bangladesh",
  };

  const studentTwo: Student = {
    name: "Ryhan Dhal",
    age: 22,
    profession: "Engineer",
    address: "Rangpur, Bangladesh",
  };

  const studentThree: Student =
    //     {
    // name: string;
    // age: number;
    // profession: string;
    // contact: string;
    // address: string;
    //     }
    {
      name: "John Doe",
      age: 28,
      profession: "unemployed",
      contact: "01632165523",
      address: "Rangpur, Bangladesh",
    };

  // String
  type UserName = string;
  const name: UserName = "Sifat";
  type IsAdmin = boolean;
  const isAdmin: IsAdmin = true;

  // Function
  type Fun = (numberOne: number, numberTwo: number) => number;
  const add: Fun = (numberOne, numberTwo) => numberOne + numberTwo;
}
