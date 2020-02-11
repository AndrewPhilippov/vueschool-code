// Potential User Class that requires testing
class User {
    constructor(details) {
        const { firstname, lastname } = details
        this.firstname = firstname
        this.lastname = lastname
    }

    get name() {
        return `${this.firstname} ${this.lastname}`
    }
}

// Plain JavaScript function used for testing
const nameTest = function () {
    // Define a user Object
    const userDetails = {
        firstname: 'Jane',
        lastname: 'Doe'
    }

    // Instantiate a new User
    const testUser = new User(userDetails)
    // Print out result of the test
    console.log('Username is correct: ', testUser.name === 'Jane sssDoe')
}

// Execute the test
nameTest()

// A real world user test flow could look like this

// test('user signs up and changes email', () => {

// 1. Signup using the form
// - Fill out form fields and submit

// 2. Navigate to settings
// - Find correct navigation elements

// 3. Change Value for Email
// - Find email field
// - Update Value
// - Submit Form
// Check Value is correct

// 4. Signout
// - Find Singout option
// - Verify Singout worked

// })







// import { Permissions } from '@/lib/permissions'
let args = []

// Replace the imported Persmissions with a custom mock implementation
const Permissions = {
    granted(...params) {
        args.push([...params])
    }
}

// Potential User class
class User {}

const user = new User()

// Function that uses the Permissions dependency
// and now uses the mocked implementation
function isUserAdmin() {
    return Permissions.granted(user, 'admin')
}

const test = function () {
    isUserAdmin()
    return JSON.stringify(args[0]) === JSON.stringify([user, 'admin'])
}

// Execute the test and print out the result
console.log(test())







// Custom Pokemons Implementation
let Pokemons = {
    // Method we want to replace
    amount() {
        // Call to database
    },

    // Method we want to stay intact
    say(str) {
        console.log('Your Pokedex says: ', str)
    }
}

// Function using Pokemons class
function howsMyCollection() {
    const size = Pokemons.amount()
    if (size === undefined)
        return Pokemons.say('Ooops, not sure how many you have')
    if (size < 10)
        return Pokemons.say('You only have a few, you need more')
    if (size < 50)
        return Pokemons.say('You have quite some favorites. Keep going')
    return Pokemons.say('You are quite a collector')
}

// Keep an implementation of original implementation for potential use later on
const originalAmount = Pokemons.amount

// Change the output of the amounts function
function stubAmount(amount) {
    Pokemons.amount = () => amount
}

// Testing function
function havePokemons(amount) {
    stubAmount(amount)
    howsMyCollection()
}

// A few tests to show outputs
havePokemons(5)   // -- You only have a few, you need more
havePokemons(17)  // -- You have quite some favorites. Keep going
havePokemons(100) // -- You are quite a collector








// Session class that leverages Date
class Session {
    constructor() {
        this.lastUpdate = Date.now()
    }

    touch() {
        this.lastUpdate = Date.now()
    }
}

// A potential implementation to watch the Date Object
function spyOn(Object, method) { /*... */ }

// A common way of using a spy
const dateSpy = spyOn(Date, 'now')

Date.now()

// A commong way of checking the spy
console.log(dateSpy.called.length > 0)
