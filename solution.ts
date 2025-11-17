// * Format value - 1
function formatValue(
  value: string | number | boolean
): string | number | boolean {
  if (typeof value === 'string') {
    return value.toUpperCase();
  } else if (typeof value === 'number') {
    return value * 10;
  } else {
    return !value;
  }
}

// * Get length - 2
// ? Not finished as the requirement
// TODO I have to add guard for each type of Array
// TODO I have to finish as the requirement
function getLength(value: string | any[]): number {
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
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

// * Filter by rating - 4
// ? have to recheck the requirements
function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  const filteredArray = items.filter((item) => item.rating >= 4.0);

  return filteredArray;
}
// ? this should be removed before submission
const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

// console.log(filterByRating(books));
// const person1 = new Person('John Doe', 30);
// console.log(person1.getDetails());

// * Filter active users - 5
function filterActiveUsers(
  user: { id: number; name: string; email: string; isActive: boolean }[]
) {
  return user.filter((user) => user.isActive);
}
// ? this should be removed before submission
// const users = [
//   { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
//   { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
//   { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
// ];
// console.log(filterActiveUsers(users));

// * Book interface and print details - 6
interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): Book {
  console.log(book);
  return book;
}
