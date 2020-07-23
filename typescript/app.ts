import { User, Person } from './models';


const isValid: boolean = true;
const username: string = `David`;
const PI: number = 3.1416;


const suma: (...values: number[]) => number = (...values: number[]) => {
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

const user = new User('David');
