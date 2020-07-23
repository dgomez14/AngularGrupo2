import { User, Person } from './models';


const isValid: boolean = true;
const username: string = `David`;
const PI: number = 3.1416;

type FuncSuma = (...values: number[]) => number;


const suma: FuncSuma = (...values: number[]) => {
    return values.reduce((a, b) => a + b);
};

console.log(suma(10, 30, 5, 40, 55));

interface Employee {
    code: string | number;
}

const person: Person = {
    name: '',
    age: 20,
    email: ''
};

const { name, email } = person;

console.log(name, email);

let code: string | number = '';

if ( typeof code === 'string' ) {
    console.log(code.indexOf('a'));
}

let inter: Person & Employee = {
    username: '',
    email: '',
    age: 10,
    code: '',
    name: ''
};

const user: Readonly<User> = new User('David');

console.log(user);


type SoloLectura<T> = {
    readonly [P in keyof T]: T[P];
};

const user1: SoloLectura<User> = new User('Daniel');

// user1.name = '';

type Animal<T> = T extends Date ? string : number;

const animal: Animal<User> = 123534;


// let id: 1 | 2 | 3 = 2;
let id: 'S' | 'N' = 'S';
