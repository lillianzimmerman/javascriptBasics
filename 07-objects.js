//1         // 2 
let zelda = {
    // 3    // 4 
    name : "Zelda",
    age : 17,
    title : "Princess", 
    isCaptured : true
};

// 1 objects can be stored in variables 
// 2 Objects always use {} surround the data contained 
// 3 name, age, title, and isCaptured are properties or keys of the objects with a colon preceding the value
// 4 each of the properties hasa value

console.log(zelda); // prints the whole object
console.log(zelda.name); // "Zelda"
console.log(zelda.age); // 17

console.log(zelda.middleName); // this is undefined as middleName does not exist

console.log(zelda.title); // "Princess"
console.log(zelda.isCaptured); // True

let player = {
    username : "zeldafan01", 
    power : 3, 
    isTough : false
};

console.log(player.username); // "zeldafan01"