const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Promise');
        const random = Math.random();

        if ( random > 0.5 ) {
            resolve(random);
        }

        reject(new Error('Algo falló'));
    }, 1500);
});


promise.then(random => {
        console.log('Resolve', random);
    })
    .catch(error => {
        console.log('Reject');
        console.error(error);
    })
    .finally(() => {
        console.log('Finally');
    });

const handleResponse = res => {
    return res.json();
};

fetch('https://jsonplaceholder.typicode.com/users')
    // .then(console.log)
    .then(handleResponse)
    .then(user => console.log('User', user))
    .catch(console.error);
