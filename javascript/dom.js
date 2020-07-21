console.log(document);

// const a = document.createElement('a');
// a.innerText = 'Hola Mundo';
// a.href = 'http://www.google.com';
// a.id = 'enlace';
// a.setAttribute('aria-label', 'Enlace');
// document.body.appendChild(a);

const button = document.getElementById('btn');

button.addEventListener('click', () => {
    const h1 = document.createElement('h1');
    h1.innerText = 'Hola Mundo';
    document.body.appendChild(h1);
});

console.log(button);

document.getElementById('btn-remove').addEventListener('click', () => {
    const list = document.getElementsByTagName('h1');

    for ( let h1 of list ) {
        document.body.removeChild(h1);
    }
});

function* generator() {
    yield '';
}
