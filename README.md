## What are some differences between interfaces and types in TypeScript?

আমাদের typescript -এ type define করার ২ টি উপায় আছে ; `type` এবং `interface` । এই দুটি আলাদা হলেও অনেকটা একই রকম । সাধারণ ব্যবহার এর ক্ষেত্রে আমরা যে কোন একটা ব্যাবহার করতে পারি ।

কিন্তু দুটির মধ্যে syntax ছাড়াও বেশ কিছু পার্থক্য রয়েছে । একেক ক্ষেত্রে একেকটির আলাদা প্রয়োজন কিংবা advantages রয়েছে।

### Types

`Type` এর মাধ্যমে Typescript বুঝতে পারে যে কোন data এর কাঠামো এবং ধরণ টা কি । typescript এর মধ্যে data এর নানা type হতে পারে ।
যেমন -

- `string`
- `array`
- `boolean`
- `number`
- `enum`
- আরও advance types ।

`type` এর মাধ্যমে primitive ও non-primitive data store করা যায় ।

```
 type MyText = string
 type MyPerson = {
    name : string,
     age: number,
    isDeveloper: boolean
 }
```

## Interfaces

`Interface` মূলত object-এর structure define করতে ব্যবহার হয়, তবে function signature বা array-like structure ও describe করা যায়।

```
interface MyPerson {
    name : string ,
    age: number,
    isDeveloper: boolean
}
```

### Multiple interface declare করা যায়

- `interface` এ ২ বার একই নাম দিয়ে ২ বার declare করলে ওই `interface` টা extend হয়ে ২ বার এর value গুলাকে একসাথে রাখে ।
- কিন্তু type ২ বার declare করা যায় না । type extend করতে চাইলে অন্য type declare করে সেটার সাথে union করতে হয় ।

- `type` এর মধ্যে `union type` বা একাধিক type কে এক `type` এর মধ্যে declare করা যায় ।

.

## Explain the difference between any, unknown, and never types in TypeScript.

Typescript এ কিছু special data types রয়েছে তার মধ্যে কিছু `any` , `unknown` , `never` ।

## Any

`any` data type মূলত ব্যাবহার হয় যখন কোন `function` বা `object` বা যে কোন non-primitive data এর reference যে কোন data type হতে পারে।
যেমন ধরি, একটা function কোন param নিয়ে সেটার type check করে তা return করে -
function checkValueType(value : any){
if (typeof value !== 'object') {
return 'Not an object'
} else{
return 'It is an object'
}
}

## Unknown

`unknown` হল একটি datatype যা প্রথমে অজানা কিন্তু পরে সেই datatype টি consistent থাকবে ।
যেমন ধরি , আমরা কোন API থেকে fetch request করে dogData আনব। আমরা জানি না সেই data টি `object` নাকি `array` বা অন্য কোন datatype তখন আমরা uknown ব্যাবহার
করতে পারি ।

```
function getDogData(data:unknown) {
    if(typeof data == 'object'){
        // conditions
    } else{
    // অন্য conditions
    }
}

```

## Never

`never` মূলত ব্যাবহার হয় কোন function যখন কোন কিছুই return করে না এবং তা শুধু error throw করার জন্য কিংবা infinite loop handle করার জন্য ব্যাবহার হয়।
যেমন ধরি , কোন user আমাদের website এর থেকে কোন কিছু কিনল কিন্তু তার purchase successful হইনি। সেই error throw করা হল।

```
function throwPurchaseError (): never {
    throw new Error('Purchase Failed ')
}
```
