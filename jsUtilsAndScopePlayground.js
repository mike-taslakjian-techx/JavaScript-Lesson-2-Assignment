// Part A: JavaScript Utilities Library (Functions)

// Utility function 1 (Function declaration)

function addNumbers (num1, num2) {
    return num1 + num2;
};

console.log("First test for function 1:", addNumbers(3, 7)); //Test for function 1
console.log("Second test for function 1:", addNumbers(1, -5)); //Test for function 1

//Utility function 2 (Function expression)

const createUser = function (firstName, lastName, age) {
    return (
        {
            id: new Date().getTime().toString(),
            name: firstName,
            surname: lastName,
            age: age
        }
    );
};

console.log("First test for function 2:", createUser("Mike", "Taslakjian", 23)); //Test for function 2
console.log("Second test for function 2:", createUser("Kim", "Jong Un", 41)); //Test for function 2

//Utility function 3 (Arrow Function)

const removeElement = (arr, index) => {
    if (index <= 0 || index >= arr.length) {
        return "Invalid index";
    } else {
        const newArr = arr.splice(index, 1);
        return arr;
    }
};

console.log("First test for function 3:", removeElement([1, 2, 3, 4, 5], 2)); //Test for function 3
console.log("Second test for function 3:", removeElement([1, 2, 3, 4, 5], -1)); //Test for function 3
console.log("Third test for function 3:", removeElement(["Apple", "Potato", "Tomato", "Pineapple"], 3)); //Test for function 3

// Utility function 4 (Function declaration)

function generateRandomNum (start, end) {
    return Math.floor((Math.random() * (end - start))) + start;
};

console.log("First test for function 4:", generateRandomNum(5, 10)); //Test for function 4
console.log("Second test for function 4:", generateRandomNum(0, 10)); //Test for function 4

// Utility function 5 (Function expression)

const getLastElement = function (arr) {
    return arr[arr.length - 1];
}

console.log("First test for function 5:", getLastElement([1, 2, 3, 4, 5])); //Test for function 5
console.log("Second test for function 5:", getLastElement(["Apple", "Potato", "Tomato", "Pineapple"])); //Test for function 5

// Utility function 6 (Arrow function)

const getLastChar = str => str[str.length - 1];

console.log("First test for function 6:", getLastChar("Mike")); //Test for function 6
console.log("Second test for function 6:", getLastChar("Davit")); //Test for function 6