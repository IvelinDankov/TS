function printUserIngo(userProfile) {
    var username = userProfile.username, email = userProfile.email, age = userProfile.age;
    if (age === undefined) {
        console.log("Username: ".concat(username, " - Email: ").concat(email, " - Age: not specified"));
    }
    else {
        console.log("Username: ".concat(username, " - Email: ").concat(email, " - Age: ").concat(age));
    }
}
function isAdult(user) {
    if (user.age === undefined) {
        return "User age is unknown!";
    }
    else if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
// const rect1: Rectangle = { width: 5, height: 10 };
var user1 = { username: "Ivan", email: "ivan@abv.bg", age: 43 };
var user2 = {
    username: "Pescho",
    email: "pescho@abv.bg",
    age: 12,
};
var user3 = {
    username: "Ivana",
    email: "ivana@abv.bg",
    age: 17,
};
var user4 = {
    username: "Goshoe",
    email: "goscho@abv.bg",
};
var user5 = {
    username: "Dragan",
    email: "dragab@abv.bg",
    age: 43,
};
var user6 = {
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
