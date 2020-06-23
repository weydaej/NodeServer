// javascript

function cl(value) {
    return console.log(value)
}

var hello = "hello, world!";
cl(hello);
cl("this is my first \"%s\" program written in %s", hello, "JavaScript")

var nums = {
    twenty: 20,
    thirty: 30,
    forty: 40
};

cl("%O is my nums object ", nums);
cl(nums);
cl(nums.forty);

var arr = ["hi", "hello", "hey", "howdy", "hewro"];
for (let i = 0; i < arr.length; i++) {
    cl(arr[i]);
}

if (arr.length === 5) {
    cl(arr.pop());
}
cl(arr.length);
cl(arr);

function add(a, b) {
    return a + b;
}
cl(add(3, 6))

// testing for js calc
var inputString = "-10+26+33-56*34+23";
var randString = "";
var operatorString = "+-/*";

for (let i = 0; i < 7; i++) {
    randString += Math.floor(Math.random() * 100) + 1;
    if (i < 6) {
        randString += operatorString[Math.floor(Math.random() * 3) + 1]
    }
}
cl("Random string = " + randString)

var numbers = inputString.split(/\+|\-|\*|\//g);
var operators = inputString.replace(/[0-9]|\./g, "").split("");
cl(numbers)
cl(operators)

var divide = operators.indexOf("/");
cl(divide)

function randEqnGenerator() {
    var randString = "";
    var operatorString = "+=/*";
    for (let i = 0; i < 7; i++) {
        randString += Math.floor(Math.random() * 100) + 1;
        if (i < 6) {
            randString += operatorString[Math.floor(Math.random() * 3) + 1]
        }
    }
    return randString;
}

function isVowel(character) {
    if (character.toLowerCase() == "a" || character.toLowerCase() == "e" ||
        character.toLowerCase() == "i" || character.toLowerCase() == "o" ||
        character.toLowerCase() == "u") {
        return true;
    }
    else {
        return false;
    }
}

function vowelRemover(name) {
    var vowellessName = "";
    for (let i = 0; i < name.length; i++) {
        if (!isVowel(name[i])) {
            vowellessName += name[i];
        }
    }
    cl(vowellessName);
    return vowellessName;
}

vowelRemover("Emily")
vowelRemover("Kevin")

function passwordGenerator() {
    var password = "";
    var possibleChars = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890!_";
    for (let i = 0; i < 12; i++) {
        password += possibleChars[Math.floor(Math.random() * possibleChars.length) + 1];
    }
    cl(password);
    return password;
}

passwordGenerator();