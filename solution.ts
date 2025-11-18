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

function getLength(value: string | any[]): number {
  if (Array.isArray(value)) {
    return value.length;
  } else {
    return value.length;
  }
}

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

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  const filteredArray = items.filter((item) => item.rating >= 4.0);

  return filteredArray;
}

function filterActiveUsers(
  user: { id: number; name: string; email: string; isActive: boolean }[]
): { id: number; name: string; email: string; isActive: boolean }[] {
  return user.filter((user) => user.isActive);
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): string {
  const printable = `Title: ${book.title}, Author: ${book.author}, Published: ${
    book.publishedYear
  }, Available: ${book.isAvailable ? 'Yes' : 'No'}`;
  console.log(printable);
  return printable;
}
type Arr = any[];
function getUniqueValues(arr1: Arr, arr2: Arr): Arr {
  const result: Arr = [];
  const pushInResult = (value: any): Arr => {
    const newResult = (result[result.length] = value);
    return newResult;
  };
  const secondArr: Arr = [];
  const pushInSecond = (value: any): Arr => {
    const newArray = (secondArr[secondArr.length] = value);
    return newArray;
  };
  const common: Arr = [];
  const pushInCommon = (value: any): Arr => {
    const newCommon = (common[common.length] = value);

    return newCommon;
  };
  for (let i = 0; i < arr2.length; i++) {
    pushInSecond(arr2[i]);
  }
  for (let i = 0; i < arr1.length; i++) {
    pushInResult(arr1[i]);
  }

  for (let i = 0; i < secondArr.length; i++) {
    for (let j = 0; j < result.length; j++) {
      if (result[j] === secondArr[i]) {
        pushInCommon(secondArr[i]);
        break;
      }
      continue;
    }
  }
  for (let i = 0; i < common.length; i++) {
    secondArr.splice(secondArr.indexOf(common[i]), 1);
  }
  for (let i = 0; i < secondArr.length; i++) {
    // result.push(secondArr[i]);    pushInResult(secondArr[i]);
  }

  return result;
}
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(getUniqueValues(array1, array2));

function calculateTotalPrice(
  items: { name: string; price: number; quantity: number; discount?: number }[]
): number {
  let totalPrice = 0;
  items.map((item) => {
    if (item.discount) {
      const price = item.price * item.quantity;
      const discounted = price * ((100 - item.discount) / 100);
      totalPrice += discounted;
    } else {
      totalPrice += item.price * item.quantity;
    }
  });
  return totalPrice;
}
