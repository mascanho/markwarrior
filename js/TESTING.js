class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  greeting() {
    return "hello there";
  }
}

const mary = new Person("mary", "poppins");
console.log(mary);
