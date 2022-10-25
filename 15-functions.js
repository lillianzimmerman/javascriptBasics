function hello() {
    console.log("Hello World");
}

// Parameters = names listed in the parentheses of the function definition
// Arguments = real values received by the function when you call it

function numberEntered(num) {
    console.log(`The number you entered was ${num}`);
}

function addAnyTwoNumbers(num1, num2){
    console.log(num1 + num2);
}

addAnyTwoNumbers( 4, 5); // 9
addAnyTwoNumbers(6, 11); // 17
addAnyTwoNumbers(7, 8); // 15

function subtractTwoNumbers(num1, num2){
    console.log(num1 - num2);
}

subtractTwoNumbers(5, 7); // -2

function getMyBattingAverage(atBats, numberOfHits){
    let myAverage = numberOfHits / atBats;
    return myAverage;
}
console.log(getMyBattingAverage(250, 91)); // = 0.364

function add(x, y){
    let sum = x + y;
    return sum;
}
console.log(add(1,1)); // 2

function fullName(first, last){
    let wholeName = first + " " + last;
    return wholeName;
}
console.log(fullName("Jon", "Snow"));