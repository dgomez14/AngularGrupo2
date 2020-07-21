// Spread operator

const pares = [0, 2, 4, 6];
const impares = [1, 3, 5, 7];

console.log(...pares);
console.log(0, 2, 4, 6);

const arr = [...impares, ...pares];

console.log('ARR', arr);


const user = {
    name: 'David',
    lastName: 'Gomez'
};

user.age = 20;


const user2 = {
    name: 'Daniel',
    age: 30
};

console.log({
    ...user,
    ...user2
});

const suma = (...params) => {
    return params.reduce((a, b) => a + b);
};

console.log(suma(...impares));
