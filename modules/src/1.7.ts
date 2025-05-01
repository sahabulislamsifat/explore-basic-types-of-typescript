{
  //   const poorUser = {
  //     name: "Mr. Sifat",
  //   };
  // ** Spread Operator, Rest Operator and Destructuring

  // Learn Spread Operator
  const brothersOne: string[] = ["Sifat", "Sahabul", "Talha", "Sajul"];
  const brothersTwo: string[] = ["Nirob", "Nasir", "Nahid", "Bayzid"];

  // brothersOne.push(brothersTwo)
  brothersOne.push(...brothersTwo); // Correct

  const mentorOne = {
    typescript: "Mezba",
    Redux: "Mir Hossain",
    DBMS: "Mizan",
  };

  const mentorTwo = {
    Prisma: "Firoz",
    Nextjs: "Tonmoy",
    Cloud: "Nahid",
  };

  const mentorList = {
    ...mentorOne,
    ...mentorTwo,
  };

  // Learn Rest Operator
  //   const greetFriends = (friends1, friends2, friends3) => {
  //     console.log(`Hii...${friends1}, ${friends2}, ${friends3}`);
  //   };
  const greetFriends = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(`hi...${friend}`));
  };

  greetFriends("Ablu", "Babul", "Kabul", "Mokbul", "Modasser");

  // Destructuring

  // object destructuring
  const person = {
    userId: 2025,
    info: {
      firstName: "Sahabul",
      middleName: "Islam",
      lastName: "Sifat",
      age: 22,
      address: "Dhaka,Bangladesh",
      contact: "01632165523",
    },
  };
  const { userId, info: age } = person;

  // Array Destructuring
  const array: string[] = [
    "Sifat",
    "John Doe",
    "Ovi Motors",
    "NR Travels",
    "Khatun Enterprise",
    "Purbasha Express",
  ];
  const [, , ovi, ...others] = array;
}
