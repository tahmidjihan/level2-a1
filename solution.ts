// * Format value
function formatValue(value: string | number | boolean) {
  if (typeof value === 'string') {
    return value.toUpperCase();
  } else if (typeof value === 'number') {
    return value * 10;
  } else if (typeof value === 'boolean') {
    return !value;
  }
}

// ? Not finished as the requirement
// TODO I have to add guard for each type of Array
// TODO I have to finish as the requirement
function getLength(value: string | any[]) {
  return value.length;
}

// ? Have to recheck the requirements
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}
