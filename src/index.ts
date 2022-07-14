// Basic Types
let id: number = 5;
let company: string = 'Rieger Codes';
let isPublished: boolean = true;
let x: any = 'Hello';

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, 'Hello'];

// Tuple ==> (data thats fixed in it's position)
let person: [number, string, boolean] = [1, 'Brad', true];
// Tuple Array ==> (an array of tuples)
let employee: [number, string][] = [
  [1, 'Brad'],
  [2, 'Rick'],
  [3, 'Amy'],
];

// Union
let productId: string | number;

productId = 22;

productId = '22';

// Enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

console.log(Direction1.Up);

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

// Objects
const user: {
  id: number;
  name: string;
} = {
  id: 1,
  name: 'Rick',
};

// OR

type User = {
  id: number;
  name: string;
};

const user2: User = {
  id: 1,
  name: 'John',
};

// Type Assertion
let cid: any = 1;
// let customerId = <number>cid
let customerId = cid as number;

// Functions
function addNum(x: number, y: number): number {
  return x + y;
}

// Using void with a function
function log(message: string | number): void {
  console.log(message);
}

// Interfaces -- (custom type, specific structure to an object or a function)

// Can use it similarly to custom user type object like example above.  Can not use with primitive types or unions
// Can define optional properties with a ?,  and readonly properties can be defined.
// Can use with functions as well.

interface UserInterface {
  readonly id: number;
  name: string;
  age?: number;
}

const user1: UserInterface = {
  id: 1,
  name: 'John',
};

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

console.log(add(2, 4));

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

// Classes
// implement interface with a class
// The properties are public by default (public, private, and protected)
// class Person implements PersonInterface {
//   private id: number;
//   name: string;

//   constructor(id: number, name: string) {
//     this.id = id;
//     this.name = name;
//   }

//   register() {
//     return `${this.name} is now registered!`;
//   }
// }

class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered!`;
  }
}

const rick = new Person(1, 'Rick');
const brian = new Person(2, 'Brian');

// console.log(rick.id) <== this won't work bc it's private, can't change it as well.

console.log(rick, brian);

console.log(rick.register());

// Extend a class this is also called a SubClass

class Employee extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(3, 'Chris', 'Developer');

console.log('subclass==>', emp.name, '+++', emp.register());

// Generics (used to build reusable components)
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(['Rick', 'Ben', 'Brooke']);

// strArray.push(1) <== this will throw an error!

strArray.push('Brittany');
