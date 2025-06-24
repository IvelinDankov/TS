interface UserProfile {
  username: string;
  email: string;
  age?: number;
}

function printUserIngo(userProfile: UserProfile) {
  const { username, email, age } = userProfile;
  if (age === undefined) {
    console.log(`Username: ${username} - Email: ${email} - Age: not specified`);
  } else {
    console.log(`Username: ${username} - Email: ${email} - Age: ${age}`);
  }
}

function isAdult(user: UserProfile): boolean | string {
  if (user.age === undefined) {
    return `User age is unknown!`;
  } else if (user.age > 18) {
    return true;
  } else {
    return false;
  }
}

// const rect1: Rectangle = { width: 5, height: 10 };

const user1: UserProfile = { username: "Ivan", email: "ivan@abv.bg", age: 43 };
const user2: UserProfile = {
  username: "Pescho",
  email: "pescho@abv.bg",
  age: 12,
};
const user3: UserProfile = {
  username: "Ivana",
  email: "ivana@abv.bg",
  age: 17,
};
const user4: UserProfile = {
  username: "Goshoe",
  email: "goscho@abv.bg",
};
const user5: UserProfile = {
  username: "Dragan",
  email: "dragab@abv.bg",
  age: 43,
};
const user6: UserProfile = {
  username: "Dimitar",
  email: "Dimitar@abv.bg",
  age: 43,
};

console.log(printUserIngo(user1), isAdult(user1));
console.log(printUserIngo(user2), isAdult(user2));
console.log(printUserIngo(user3), isAdult(user3));
console.log(printUserIngo(user4), isAdult(user4));
console.log(printUserIngo(user5), isAdult(user5));
console.log(printUserIngo(user6), isAdult(user6));
