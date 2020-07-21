const frameworks = ['Spring'];
frameworks.push('Angular');
frameworks.push('Laravel', 'Django', '');

// console.log(frameworks.pop());
console.log(frameworks.length);

const find = 'Angular';

const found = frameworks.find(elem => elem === find);

console.log(frameworks.filter(elem => {
    return elem.includes('a');
}));

// Eliminar los falsy
console.log(frameworks.filter(elem => !!elem));

console.log(frameworks.map(el => el.concat('1')));

const numbers = [2, 4, 4, 6, 8, 9];

console.log(numbers);
const reduced = numbers.reduce((acc, next) => {
    console.log(acc, next);
    return acc + next;
});
console.log(reduced);

console.log('Every', numbers.every(n => n % 2 === 0));
console.log('Some', numbers.some(n => n % 2 === 0));
console.log('Sort', numbers.sort((a, b) => b - a));

console.log(found);
console.log(frameworks);
