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

  compareTheAge(singer1, singer2) {
    if (singer1.age > singer2.age) {
      return (
        singer1.firstName +
        " " +
        singer1.lastName +
        " " +
        "é piu vecchia di" +
        " " +
        singer2.firstName +
        " " +
        singer2.lastName
      );
    } else if (singer1.age < singer2.age) {
      return (
        singer1.firstName +
        " " +
        singer1.lastName +
        " " +
        "é piu giovane di" +
        " " +
        singer2.firstName +
        " " +
        singer2.lastName
      );
    } else {
      return (
        singer1.firstName +
        " " +
        singer1.lastName +
        " " +
        " e " +
        singer2.firstName +
        " " +
        singer2.lastName +
        " " +
        "hanno la stessa età"
      );
    }
  }
}

const singer1 = new User("Fiorella", "Mannoia", 69, "Roma");
const singer2 = new User("Mina", "Mazzini", 83, "Varese");

// const singer3 = new User("Mia", "Martini", 77, "Reggio Calabria");

// const singer4 = new User("Anna", "Oxa", 62, "Bari");
const differenceOfTheAge = singer1.compareTheAge(singer2);
console.log(differenceOfTheAge);
