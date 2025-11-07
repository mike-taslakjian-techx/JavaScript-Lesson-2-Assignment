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

//  Part B: Scope Simulation & Analysis

let a = "Global scope";

function greeting() {
    var b = "Function scope";
    
    if (generateRandomNum(0, 100) % 2 === 0) {
        let c = "Block scope let";
        const d = "Block scope const";
    }

    function nestedFunction () {
        console.log(a); //Accessible everywhere in scope
        console.log(b); //Accessible anywhere in the greeting() function
        console.log(c); //Not accessible here, only accessible if the if block
        console.log(d); //Not accessible here, only accessible if the if block
    };

    nestedFunction();
};

/*
    JavaScript scope works lexically. Every time we try to access a variable, JavaScript
    attempts to find that variable's value within that scope. If this variable is not found, 
    it begins to look into the variable's lexical environment, which is the scope of its parent.
    This is why nestedFunction is able to access variables "a" and "b" even though they are not
    found in the function's direct scope.

    In addition, variables "c" and "d" are not accessible as they were declared and initialized
    in a block scope. Any variable declared and initialized in a block scope such as if, else, for, while...
    will only be accessible within that scope, so both "c" and "d" act as temporary variables only to be used 
    within the if block. However, this only applies to let and const, var is not block scoped and can be accessed outside
    the block scope within the greeting() function.
*/

// Part C: Hoisting & TDZ Debugger

try {
    console.log(x); //JS has allocated memory for this variable but it has not yet been initialized with a value, thus it will print undefined
    console.log(y); //JS has allocated memory for this variable, however since it has not yet been declared and initialized, throws ReferenceError. It is in the temportal dead zone.
    console.log(z); //JS has allocated memory for this variable, however since it has not yet been declared and initialized, throws ReferenceError.
    console.log(isRich(15)); //Since the function was declared with let, it will act as a let variable, with the same output as variables "y" and "z".
    console.log(isHomeless(true)); //Will work
} catch(error) {
    console.error(error);
}

var x = "x";
let y = "y";
const z = "z";
let isRich = (netWorth) => netWorth > 1000000 ? true : false;
function isHomeless (houseExists) {
    return houseExists ? false : true;
};

