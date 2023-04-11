// ------------------Question Number 1---------------------
// Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed
// to it.

function addNumberClosure(num1) {
    return function (num2) {
        return num1 + num2;
    }
}
const addFive = addNumberClosure(5);
console.log(addFive(10));



// ------------------Question Number 2---------------------
// Write a recursive function that searches an array for a specific value. The
// function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested.
function searchArray(arr, val) {
    // Base case: array is empty
    if (arr.length === 0) {
        return false;
    }

    // Recursive case: check if the first element matches the search value,
    // or recursively search the rest of the array
    if (arr[0] === val) {
        return true;
    } else {
        return searchArray(arr.slice(1), val);
    }
}

// Example usage
const myArray = [2, 4, 6, 8, 10];
console.log(searchArray(myArray, 6)); // Output: true
console.log(searchArray(myArray, 7)); // Output: false




// ------------------Question Number 3---------------------
// Write a function that adds a new paragraph element to the bottom of an
// HTML document. The function should take a string argument that will be
// used as the text content of the new paragraph element.

function addParagraph(text) {
    // Create a new paragraph element
    const newParagraph = document.createElement('p');
    newParagraph.textContent = text;

    // Add the new paragraph element to the bottom of the document body
    document.body.appendChild(newParagraph);
}

// Example usage
addParagraph('This is a new paragraph.');




// ------------------Question Number 4---------------------
// Write a function that adds a new list item to an unordered list in an HTML
// document. The function should take a string argument that will be used as
// the text content of the new list item.
function addListItem(text) {
    // Get the unordered list element
    const myList = document.querySelector('ul');

    // Create a new list item element
    const newListItem = document.createElement('li');
    newListItem.textContent = text;

    // Add the new list item element to the unordered list
    myList.appendChild(newListItem);
}

// Example usage
addListItem('This is a new list item.');




// ------------------Question Number 5---------------------
// Write a function that changes the background color of an HTML element.
// The function should take two arguments: the first argument is a reference
// to the HTML element, and the second argument is a string representing
// the new background color.

function changeBackgroundColor(element, color) {
    // Set the background color of the element
    element.style.backgroundColor = color;
}

// Example usage
const myElement = document.getElementById('my-element');
changeBackgroundColor(myElement, 'red');




// ------------------Question Number 6---------------------
// Write a function that saves an object to localStorage. The function should
// take two arguments: the first argument is a string representing the key to
// use for storing the object, and the second argument is the object to store.
function saveObjectToLocalStorage(key, object) {
    // Convert the object to a JSON string
    const objectJSON = JSON.stringify(object);

    // Save the object JSON string to localStorage using the specified key
    localStorage.setItem(key, objectJSON);
}

// Example usage
const myObject = { name: 'John', age: 30 };
saveObjectToLocalStorage('my-object', myObject);




// ------------------Question Number 7---------------------
// Write a function that retrieves an object from localStorage. The function
// should take one argument, which is a string representing the key used to
// store the object. The function should return the object.
function getObjectFromLocalStorage(key) {
    // Get the object JSON string from localStorage using the specified key
    const objectJSON = localStorage.getItem(key);

    // Parse the object JSON string into an object
    const object = JSON.parse(objectJSON);

    // Return the object
    return object;
}

// Example usage
const myObject2 = getObjectFromLocalStorage('my-object');
console.log(myObject2);




// ------------------Question Number 8---------------------
// Write a function that takes an object and saves each property to
// localStorage using the property name as the key and the property value as
// the value. The function should also retrieve the object from localStorage
// and return it as a new object.
function saveValueToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  
  function getValueFromLocalStorage(key) {
    const valueJSON = localStorage.getItem(key);
    return JSON.parse(valueJSON);
  }
  
  // Example usage
  saveValueToLocalStorage('my-value', 42);
  const myValue = getValueFromLocalStorage('my-value');
  console.log(myValue); // Output: 42
  
