let canAfford = (itemPrice, accountBalance) => {
    return itemPrice > accountBalance
    ? `Cannot afford! You are $${itemPrice - accountBalance} short`
    : `Can afford! Your change is $${accountBalance - itemPrice}`;
}

let myBankAccountBalance = 1000;
const drone = 1001;

let droneOnSale = Math.round(drone - (drone * 0.03));

console.log(canAfford(drone, myBankAccountBalance));
console.log(canAfford(droneOnSale, myBankAccountBalance));

function smallest( arr ) {
    let min = arr[0];
    for( let i of arr ) {
        if( i < min ) {
            min = i;
        }
    }
    return min;
}
console.log(smallest( [2, 5, 6, 12, 14, 28, 37, 41, 44, 45, 1] ));

console.log('---------------')

Number.prototype.isPrime = function() {
    for( let i=2; i<this; i++ ) {
        if( this % i === 0 ) {
            return false;
        }
    }
    return true;
}

// const { performance } = require('perf_hooks');
// const start = performance.now();
// let primeCount = 0;
// let num = 2; // for math reasons, 1 is considered prime
// while( primeCount < 1e4 ) {
//     if( num.isPrime() ) {
//         primeCount++;
//     }
//     num++;
// }
// console.log(`The 10,000th prime number is ${num-1}`);
// console.log(`This took ${performance.now() - start} milliseconds to run`);


var exampleFunction = function(message){
    console.log( "WOAH " + message + " HELLO");
};      

exampleFunction( "Hello from exampleFunction" );

function parentFunction( callback ) {
    callback( "information from the parent function" );
};

parentFunction(exampleFunction);

const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const oFoods = groceries.filter( item => item.includes("o") ); //items include the letter "o"
const groceryList = groceries.map( item => `<li>${item}</li>` );
console.log(oFoods)

console.log(groceryList)

const values = [1, 2, 3, 4, 5];
const evens = values.filter( val => val % 2 === 0 ); // even numbers
const oddCubes = values.filter( val => val % 2 !==0 ).map( val => val**3 );
console.log(evens)

const pokémon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

const pkmnIds = pokémon.map( p => p.id )

// const divide3 = pkmnIds.filter( id => id % 3 === 0 );
// console.log(divide3) // Divide by 3

const firePkmn = pokémon.filter( p => p.types[0] === "fire" ); // Filter to fire type
console.log(firePkmn) // Complete

console.log('--------------')

const moreThanOne = pokémon.map( p => p.id.types > 1  )
console.log(moreThanOne) // More than one type, STUCK

console.log('--------------')

const pkmnName = pokémon.map( p => p.name )
console.log(pkmnName) // Complete

console.log('--------------')

const greaterThan99 = pokémon.map( p => p.id > 99 )
console.log(greaterThan99) // Stuck

const poisonName = pokémon.filter( p => p.includes("poison") );
console.log(poisonName) // Stuck