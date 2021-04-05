class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  greeting() {
    return "hello there";
  }

  static addNumbers(x, y) {
    return x * y;
  }
}

const mary = new Person("mary", "poppins");
console.log(mary);
