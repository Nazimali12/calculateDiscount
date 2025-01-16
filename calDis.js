function calculateDiscount(price, discount = 10) {
    return price - (price * (discount / 100));
}


console.log(calculateDiscount(100)); 
console.log(calculateDiscount(200, 20)); 
//QUESTION NUMBER 2;
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}


console.log(mergeArrays([1, 2, 3], [4, 5, 6])); 
console.log(mergeArrays(['a', 'b'], ['c', 'd'])); 

//QUESTION NUMBER 3;
function logArguments(...args) {
    console.log(args);
}

logArguments(1, 2, 3); 
logArguments("hello", true, { key: "value" }); 
//question number 4
function createMessage(message, ...names) {
    return names.map(name => `${message}, ${name}!`);
}
console.log(createMessage("Hello", "Alice", "Bob", "Charlie"));
console.log(createMessage("Welcome", "John", "Emma"));
//QUESTION NUMBER 5
function sum(a, b, c) {
    return a + b + c;
}


const numbers = [2, 4, 6];
console.log(sum(...numbers)); 
//QUESTION NUMBER 6
function createUserProfile(username, age = 25, country = "Unknown") {
    return { username, age, country };
}


console.log(createUserProfile("Nazim")); 


console.log(createUserProfile("Alice", 30, "USA")); 





