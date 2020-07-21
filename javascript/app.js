number = 100;
console.log(typeof number === 'number');
number = 3.14;
console.log(typeof number === 'number');
number = Infinity;
console.log(typeof number === 'number');
number = NaN;
console.log(typeof number === 'number');


var user = 'David';
let username = 'davalgom';
let email = `${ username }@bancolombia.com.co`;
console.log(email);
email = username + '@bancolombia.com.co';
console.log(email);


username = true;
username = false;

let obj = undefined;
console.log(typeof obj);

obj = {
    attr: 100,
    'nombre de usuario': 'David'
};


console.log(typeof obj);

const numbers = [1, 2, 3, 4, 5, 6];
console.log(Array.isArray(numbers));

let func = function (a, b) {
    return a.concat(b);
};

func = (a, b) => a.concat(b);

console.log(func('Hola ', 'Mundo'));

console.log([1, 2, 3] + 'Hola');



for (var i = 0; i < 5; i++) {
    console.log('for', i);
}

console.log('fuera', i);
