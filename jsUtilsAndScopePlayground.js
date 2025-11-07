// Part A: JavaScript Utilities Library (Functions)

// Utility function 1 (Function declaration)

function addNumbers (num1, num2) {
    return num1 + num2;
};

console.log(addNumbers(3, 7)); //Test for function 1
console.log(addNumbers(1, -5)); //Test for function 1

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

console.log(createUser("Mike", "Taslakjian", 23)); //Test for function 2
console.log(createUser("Kim", "Jong Un", 41)); //Test for function 2

//Utility function 3 (Arrow Function)

const removeElement = (arr, index) => {
    if (index <= 0 || index >= arr.length) {
        console.log("Invalid index");
    } else {
        const newArr = arr.splice(index, 1);
        return arr;
    }
}

console.log(removeElement([1, 2, 3, 4, 5], 2)); //Test for function 3
console.log(removeElement([1, 2, 3, 4, 5], -1)); //Test for function 3
console.log(removeElement(["Apple", "Potato", "Tomato", "Pineapple"], 3)); //Test for function 3