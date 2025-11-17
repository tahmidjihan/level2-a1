// * Format value - 1
function formatValue(value: string | number | boolean) {
  if (typeof value === 'string') {
    return value.toUpperCase();
  } else if (typeof value === 'number') {
    return value * 10;
  } else if (typeof value === 'boolean') {
    return !value;
  }
}

// * Get length - 2
// ? Not finished as the requirement
// TODO I have to add guard for each type of Array
// TODO I have to finish as the requirement
function getLength(value: string | any[]) {
  return value.length;
}

// * Person Class - 3
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

// * Filter by rating - 4
// ? have to recheck the requirements
function filterByRating(items: { title: string; rating: number }[]) {
  const filteredArray = items.sort((a, b) => {
    return a.rating - b.rating;
  });

  return filteredArray;
}
// const books = [
//   { title: 'Book A', rating: 4.5 },
//   { title: 'Book B', rating: 3.2 },
//   { title: 'Book C', rating: 5.0 },
// ];

// console.log(filterByRating(books));
