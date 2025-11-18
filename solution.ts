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

type Arr = number[];
interface Array<T> {
  pushData: (value: T) => void;
  removeData: (value: T) => void;
}
function getUniqueValues(arr1: Arr, arr2: Arr): Arr {
  Array.prototype.pushData = function (value: any): any {
    this[this.length] = value;
    return this;
  };
  Array.prototype.removeData = function (value: any): any {
    let array = [];
    for (let i = 0; i < this.length; i++) {
      if (this[i] === value) {
        continue;
      } else {
        // this[this.length] = value;
        array.push(this[i]);
      }
    }
    this.length = 0;
    for (let i = 0; i < array.length; i++) {
      this[i] = array[i];
    }
    return this;
  };
  const result: Arr = [] as unknown as Arr;
  const secondArr: Arr = [] as unknown as Arr;
  const common: Arr = [] as unknown as Arr;

  for (let i = 0; i < arr1.length; i++) {
    result.pushData(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    secondArr.pushData(arr2[i]);
  }

  for (let i = 0; i < secondArr.length; i++) {
    for (let j = 0; j < result.length; j++) {
      if (result[j] === secondArr[i]) {
        common.pushData(secondArr[i]);
        break;
      }
      continue;
    }
  }
  for (let i = 0; i < common.length; i++) {
    secondArr.removeData(common[i]);
  }
  for (let i = 0; i < secondArr.length; i++) {
    result.pushData(secondArr[i]);
  }

  return result;
}

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
