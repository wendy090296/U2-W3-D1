// const User = function (_firstName, _lastName, _age, _location) {
//   (this.firstName = ""),
//     (this.lastName = ""),
//     (this.age = ""),
//     (this.location = "");
// };
// oppure possiamo utilizzare la classe per scrivere la stessa cosa:

class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }

  compareTheAge(user2) {
    if (this.age > user2.age) {
      return `${this.firstName} is older than ${user2.firstName}`;
    } else {
      return `${this.firstName} is younger than ${user2.firstName}`;
    }
  }
}

const singer1 = new User("Fiorella", "Mannoia", 69, "Roma");
const singer2 = new User("Mina", "Mazzini", 83, "Varese");
console.log(singer1);
console.log(singer2);

const differenceOfTheAge = singer1.compareTheAge(singer2);
console.log(differenceOfTheAge);
