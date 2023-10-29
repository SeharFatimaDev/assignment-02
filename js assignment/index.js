// Practice exercise 3.1
let List = ["Milk", "Bread", "Apples"];

console.log("List Length:", List.length);

let indexOfBread = List.indexOf("Bread");
if (indexOfBread !== -1) {
    List[indexOfBread] = "Bananas";
}

console.log("Updated Shopping List:", List);

// Practice exercise 3.2

let shoppingList = [];

shoppingList.push("Milk", "Bread", "Apples");

let IndexOfBread = shoppingList.indexOf("Bread");
if (indexOfBread !== -1) {
    shoppingList.splice(indexOfBread, 1, "Bananas", "Eggs");
}

let removedItem = shoppingList.pop();

shoppingList.sort();

let indexOfMilk = shoppingList.indexOf("Milk");

let indexOfBananas = shoppingList.indexOf("Bananas");
if (indexOfBananas !== -1) {
    shoppingList.splice(indexOfBananas + 1, 0, "Carrots", "Lettuce");
}

let newList = ["Juice", "Pop"];

shoppingList = shoppingList.concat(newList, newList);

let lastIndexOfPop = shoppingList.lastIndexOf("Pop");

console.log("Final Shopping List:", shoppingList);

// Practice exercise 3.3

let originalArray = [1, 2, 3];
let nestedArray = [originalArray, originalArray, originalArray];
console.log("Value 2 from one of the arrays:", nestedArray[1][1]);

// Practise exercise 3.4
var myCar = {
    make: "Toyota",
    model: "Camry",
    year: 2022,
    color: "Blue",
    forSale: true
};

var propertyName = "color";
myCar[propertyName] = "Red";

propertyName = "forSale";
myCar[propertyName] = false;

console.log("Make:", myCar.make);
console.log("Model:", myCar.model);

console.log("For Sale:", myCar.forSale);

// Practice exercise 3.5

let people = {
    friends: []
};

let friend1 = {
    firstName: "John",
    lastName: "Doe",
    ID: 1
};

let friend2 = {
    firstName: "Jane",
    lastName: "Smith",
    ID: 2
};

let friend3 = {
    firstName: "Tom",
    lastName: "Johnson",
    ID: 3
};

people.friends.push(friend1, friend2, friend3);

console.log(people);

// Practice exercise 4.1
let myVariable = true;
console.log("The value of myVariable is:", myVariable);

if (myVariable) {
    console.log("myVariable is true.");
}

if (!myVariable) {
    console.log("myVariable is not true.");
} else {
    console.log("myVariable is true with the 'else' statement.");
}

myVariable = !myVariable;

if (myVariable) {
    console.log("myVariable is now true.");
} else {
    console.log("myVariable is now false.");
}

// Practice exercise 4.2

const userInput = prompt("Please enter your age:");
const userAge = parseInt(userInput);

let message;

if (userAge >= 21) {
    message = "You are confirmed entry to the venue and have the ability to purchase alcohol.";
} else if (userAge >= 19) {
    message = "You are confirmed entry to the venue but denied the purchase of alcohol.";
} else {
    message = "You are denied entry to the venue.";
}

console.log(message);

// Practice exercise 4.3

const isIDValid = true; // Change this to true or false based on the ID validity.
const Message = isIDValid ? "You are allowed into the venue." : "You are not allowed into the venue.";
console.log(message);

