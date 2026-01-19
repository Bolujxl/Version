// data types primitive & reference
// primitive - numbers, booleans, strings, undefined, null, bigint, symbols
// reference - objects, arrays, functions

// bigint = big num that can't be represented by the number data type
// to create a bigint, add n at the end of the num
let bigNum = 123456789012345678901234567890n

symbol = Symbol('symbol')
// something unique like a staff id
// symbol is a unique identifier

typeof bigNum // bigint
// to know type of a variable
typeof symbol // symbol

// ternary operator
// condition ? exprIfTrue : exprIfFalse
let ages = 18
let canVote = ages >= 18 ? 'Let he/she vote' : 'Let he/she not vote'
//console.log(canVote)

let newAge = 18;
let votersAge = 15

//votersAge >= newAge ? console.log('Let he/she vote') : console.log('Let he/she not vote')

// object destructuring.
// to extract values from objects and arrays
// into distinct variables

// object destructuring
let person1 = {
    name: 'Mal',
    age: 25,
    gender: 'male',
    address : {
        street : '123 Main St',
        city : 'Lagos',
        state : 'Nigeria'
    }
}


const {age:a, gender:gd} = person1
const {age, address: {city}} = person1
//console.log(city, age) 
// destructuring with nested objects
//console.log(person1.address.state) = 'Nigeria'

//console.log(a, gd)

// aliasing in destructuring
// const {originalPropertyName: aliasName} = objectName


// a method is a function stored as a property of an object
// condition ? exprIfTrue : exprIfFalse

let person = {
    name: 'Mal',
    age: 25,
    gender: 'male',
    maturity: function(){
       let value = 30 - this.age;
       let maturityStatus = value >= 10 ? `YOU HAVE ${value} YEARS TO BE AN ADULT` : `COME AND SEE SHEGE`;
       return maturityStatus;
    }
}

// activating the method
//console.log(person.maturity());
// in case of updating object properties, you must update the object before calling the method again


// ways to write function
//function declaration
function add(a, b){
    let sum = a + b;
    return sum
}
add(2, 4)


// function expression
let add2 = function(a, b){
    let sum = a + b;
    return sum
}
add2(2, 4)

// arrow function - ignore the keyword function and add the arrow =>
// (parameters) => {function body}
added = (a, b) => {
    let sum = a + b;
    return sum
}

namley = mancji => `your name is ${mancji}`
// if there is only one parameter, you can ignore the parentheses
// if there is a single expression in the function body, you can ignore the curly braces and the return keyword
// console.log(namley('Malik'))

namley = (name) => `your name is ${name}`
//console.log(namley('Malik'))

//arrays
// arrays are reference data types
let fruits = ['apple', 'banana', 'orange', 'mango']
// accessing array elements
//console.log(fruits[2]) // orange


// destructuring arrays
let [firstFruit, secondFruit] = fruits
//console.log(firstFruit, secondFruit)

//length of an array ie how many items in an array
fruits.length
// push method - to add an item to the end of an array
fruits.push('grape')
//console.log(fruits)
fruits.pop() // removes the last item from an array

// unshift - adds an item to the beginning of an array
fruits.unshift('strawberry')
//shift - removes the first item from an array
fruits.shift()
//console.log(fruits)
//indexOf - to find the index of an item in an array
let index = fruits.indexOf('banana')
//console.log(index) // 1

// includes - to check if an item is in an array
let hasMango = fruits.includes('mango')
//console.log(hasMango) // true

let fruits2 = ['kiwi', 'pineapple']
// concat - to merge two arrays
let allFruits = fruits.concat(fruits2)
//console.log(allFruits)

// slice - to extract a portion of an array
let countries = ['Makawi', 'Ghana', 'Togo', 'Niger', 'Benin', 'Cameroon', 'Egypt']
let westAfricanCountries = countries.slice(2, 6)
// the original array is not modified
//console.log(westAfricanCountries)

// splice - to add/remove items to/from an array
// splice(startIndex, deleteCount, item1, item2, ...)
// startIndex - the index at which to start changing the array
// deleteCount - the number of items to remove from the array
// item1, item2, ... - the items to add to the array
// countries.splice(2, 1, 'Liberia', 'Sierra Leone')
let splicedCountries = countries.splice(0, 1)

// join - to convert an array to a string
let joinedCountries = countries.join(",")
//console.log(joinedCountries) // Makawi,Ghana,Togo,Niger,Benin,Cameroon,Egypt

// reverse - to reverse the order of items in an array
let reversedCountries = countries.reverse()
//console.log(reversedCountries)

// sort - to sort the items in an array
let sortedCountries = countries.sort()
//console.log(sortedCountries)

arrayNumbers = [5, 2, 8, 1, 4]
// sorting numbers in ascending order
arrayNumbers.sort((a, b) => a - b)
//console.log(arrayNumbers) // [1, 2, 4, 5, 8]

// sorting numbers in descending order
arrayNumbers.sort((a, b) => b - a)
//console.log(arrayNumbers) // [8, 5, 4, 2, 1]

let countries2 = ['Makawi', 'Ghana', 'Togo', 'Niger', 'Benin', 'Cameroon', 'Egypt']
// for(let x = 0; x < 10; x++){
//     let display = countries2[x];
//     console.log(display)
// }
 

const numberarr = [23.45, 3, 22, 12, 9, 100.23, 76.12]
const emptyarray = []
// for(let y= 0; y < 7; y++){
//     let display = numberarr[y] / 10;
//     emptyarray.push(display)
// }

const studentRecs = [
    {
        name: 'Malik',
        age: 25,
        gender: 'male',
        class: 'Pry 2',
        RegNo: '123456'
    },
    {
        name: 'Ade',
        age: 22,
        gender: 'female',
        class: 'Pry 2',
        RegNo: '654321'
    },
    {
        name: 'John',
        age: 24,
        gender: 'male',
        class: 'Pry 2',
        RegNo: '123456'
    }
]

// for(let z = 0; z < studentRecs.length; z++){
//     let display = studentRecs[z];
//     console.log(display.name + ' is ' + display.age + ' years old' + ' and his/her RegNo is ' + display.RegNo)
// }

// higher order array methods
// foreach - to execute a function for each item in an array
// forEach((item, index) => {function body})
// item - the current item in the array
// index - the index of the current item in the array

studentRecs.forEach((student, index) => {
    let gender = student.gender === 'male' ? 'his' : 'her'
    console.log(index + '. ' + student.name + ' is ' + student.age + ' years old' + ' and ' + gender + ' RegNo is ' + student.RegNo) 
})

// let nameOnly = studentRecs.name.split(' ')[0]
//    console.log(nameOnly)
// split there is to seperate three names in the name property
// [0] - first name
// [1] - middle name
// [2] - last name


//filter - to create a new array with items that pass a test
// filter((item, index) => {function body})
// item - the current item in the array
// index - the index of the current item in the array

let filteredStudents = studentRecs.filter((student, index) => student.gender === 'male')
let filteredFemaleStudents = studentRecs.filter((student, index) => { return student.gender === 'female'})


//ice cream order
//rest parameter - to represent an indefinite number of arguments as an array
function icecreamOrder(CustomerName, CustomerPhone, CustomerAddress, kg, ...flavors){
    const orderType = 'urgent'
    const kgPrice = 500;
    const flavorPrice = 500;
    const numOfFlavors = flavors.length;
    const orderPrice = (kg * kgPrice) + (numOfFlavors * flavorPrice);

    let order = `${CustomerName}, Cell no. ${CustomerPhone} living in ${CustomerAddress} ordered ${kg}kg of ${flavors.join(' + ')} ice cream. He is in a ${orderType} hurry. The total price is N${orderPrice}`;
    return order;
}

icecreamOrder('Boluwatife Jakobe', '08123456789', '123, Main St.', '2', 'Chocolate', 'Vanilla')

// spread operator - to expand an array into individual items or join/concat two arrays.
let palmer = [1,2,4,5,8]
let gusto = [3,6,7,9,10]
let allFlavors = [...palmer, ...gusto, 42, 13, 68]
// console.log(allFlavors)

const hospitalRecs = [
    {
        name: 'Palmer',
        age: 25,
        gender: 'male',
        RegNo: '123456'
    },
    {
        name: 'Gusto',
        age: 22,
        gender: 'female',
        RegNo: '654321'
    },
    {
        name: 'John',
        age: 24,
        gender: 'male',
        RegNo: '123456'
    }
]

// hospitalRecs.forEach((patient, index) => {
//     console.log(index + '. ' + patient.name)
// })

//filter - to create a new array with items that pass a test
let filteredMalePatients = hospitalRecs.filter((patient, index) => patient.gender === 'male')

let ageFilter = hospitalRecs.filter((patient, index) => {
    return patient.age >= 24
})


// map method - to create a new array with the results of calling a function for each item in an array
// map((item, index) => {function body})
// item - the current item in the array
// index - the index of the current item in the array

let patientNames = hospitalRecs.map((patient, index) => {
    return patient.name
})

//find method - to return the first item that passes a test
let collect = hospitalRecs.find((patient, index) => {
    return patient.age >= 20
})


// some method - to check if at least one item in the array passes a test -- true or false
// some((item, index) => {function body})
// item - the current item in the array
// index - the index of the current item in the array

let somePatients = hospitalRecs.some((patient, index) => {
    return patient.age >= 24
})

// sort method - to sort the items in an array in ascending or descending order
// sort((a, b) => {function body})
// a - the first item in the array
// b - the second item in the array

let sortedPatients = hospitalRecs.sort((a, b) => {
    return a.age - b.age
})

// reduce method - to reduce the items in an array to a single value
// reduce((accumulator, currentValue) => {function body}, initialValue)
// accumulator - the accumulated value
// currentValue - the current item in the array
// initialValue - the initial value of the accumulator

let totalAge = hospitalRecs.reduce((acc, curr) => {
    return acc + curr.age
}, 0)




const devhqstudents = [
    {
        name: 'Boluwatife Jakobe',
        age: 20,
        gender: 'male',
        RegNo: '123456',
        score: 65,
        Total: 100
    },
    {
        name: 'John Doe',
        age: 22,
        gender: 'male',
        RegNo: '654321',
        score: 45,
        Total: 100
    },
    {
        name: 'Jane Doe',
        age: 21,
        gender: 'female',
        RegNo: '123456',
        score: 60,
        Total: 100
    },
    {
        name: 'Damiola',
        age: 20,
        gender: 'female',
        RegNo: '654321',
        score: 55,
        Total: 100
    }

]

const refinedStudents = devhqstudents.forEach((student, index) => {
    let percentage = (student.score / student.Total) * 100
    let studentPercent = `${percentage.toFixed(2)}%`
    let status = student.score >= 50 ? 'Pass' : 'Fail'

    console.log(`${student.name} got ${studentPercent} and ${status}`)
    
})