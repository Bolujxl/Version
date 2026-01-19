//object literal to store site information

let carInfo ={
    carName: `Toyota`,
    carModel: `Avalon`,
    carDate: `1980`,
    carColor: `Indigo`,
    vinNo: 1235,
    regNumber: `ABJ-123-XYZ`
}

let BouwatifeInfo ={
    firstName: `Boluwatife`,
    middleName: `Maverick`,
    lastName: `Biggest`,
    age: `24`,
    nationality: `Nigerian`
}

//accessing object properties and logging them to the console
 
//dot notation
// carInfo.carName wrapped in console.log()
//stored in a variable and logged to the console

let carName = carInfo.carName;

// bracket notation
let carModel = carInfo['carModel'];

//console.log(`Car Name: ${carName}`);
//console.log(`Car Model: ${carModel}`);

// add new property to the object with dot notation
carInfo.carOwner = `Jaxl`

//update existing property with bracket notation
carInfo['carColor'] = `Blue`;

//update existing property with dot notation
carInfo.carDate = 2099

//delete property from the object with delete keyword
delete carInfo.vinNo;

//freeze the object to prevent further modifications
Object.freeze(carInfo);

//try to add new property after freezing (will not work)
carInfo.newProperty = `This will not be added`;

//seal object literel to prevent adding or deleting properties, but allow modification of existing properties
Object.seal(BouwatifeInfo);

//try to delete property after sealing (will not work)
delete BouwatifeInfo.age;

let TechoWayInfo = {
    streetname: `Techoway`,
    localGovt: `Alimosho`,
    State: `Lagos`,
    Zipcode: `1000001`,
    house1 : {
        owner: `Jaxl`,
        color: `White`,
        rooms: 4,
        amenities: `Prepaid meter, Borehole`,
        price: 1000000,
    },
    house2 : {
        owner: `Bolaji`,
        color: `Not painted`,
        rooms: 3,
        amenities: `Prepaid meter, Prepaid water`,
        price: 2000000,
    }
}

// to get literal inside literal

let house1Owner = TechoWayInfo.house1.owner;

//functions
let age1 = 23;
let age2 = 74;
let age3 = 12;


function averageAge(){
    let average = (age1 + age2 + age3 ) / 3;
    console.log(average)
}



function totalPriceofBothItems(price1, price2){
    let totalPrice = price1 + price2;
    console.log(totalPrice)
}

// totalPriceofBothItems(1000, 2000)

function printScoreCard(studentName, studentScore){
    let score = `Hi ${studentName}, your score is ${studentScore}`;
    return score;
}

let malachyScore = printScoreCard("Malachy", 23)
// console.log(malachyScore)

function avgCalc(num1, num2, num3, num4){
    let avg = (num1 + num2 + num3 + num4) / 4;
    return avg // function scope
}

let avgMark = avgCalc(23, 45, 67, 89)
// console.log(avgMark)


// let student = Mal -- global scope
// {let student = Mal} - block scope

