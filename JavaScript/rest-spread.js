const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
    {
        address: '1600 Pennsylvania Avenue',
        city: 'Washington, D.C.',
        zipcode: '20500',
    },
    {
        address: '221B Baker St.',
        city: 'London',
        zipcode: 'WC2N 5DU',
    }
    ],
    createdAt: 1543945177623
};

const { firstName, lastName, ...attributes } = person;

//console.log(attributes)

const personCopy = {...person};
personCopy.firstName === person.firstName
console.log(personCopy)


const sayHello = name => console.log(`Hello ${name}`);
sayHello('andrea')

const square = n => console.log(n * n);
square(3)