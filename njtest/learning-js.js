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
function parseEqn(inputString) {
    var numbers = inputString.split(/\+|\-|\*|\//g);
    var operators = inputString.replace(/[0-9]|\./g, "").split("");
    cl(numbers)
    cl(operators)

    var divide = operators.indexOf("/");
    cl(divide)
}

function randEqnGenerator() {
    var randString = "";
    var operatorString = "+=/*";
    for (let i = 0; i < 7; i++) {
        randString += Math.floor(Math.random() * 100) + 1;
        if (i < 6) {
            randString += operatorString[Math.floor(Math.random() * 3) + 1]
        }
    }
    cl("Random string = " + randString)
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
vowelRemover("eeeeekeeee")

function passwordGenerator(len) {
    var password = "";
    var possibleChars = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890!_";
    for (let i = 0; i < len; i++) {
        password += possibleChars[Math.floor(Math.random() * possibleChars.length - 1) + 1];
    }
    cl(password);
    return password;
}

passwordGenerator(24);
passwordGenerator(12);
passwordGenerator(240);

function repeatedString(str, num) {
    for (let i = 0; i < num; i++) {
        cl(str);
    }
}

repeatedString("hello", 3)

function getToOdd(num) {
    var newNumber = num;
    while (newNumber % 2 == 0) {
        newNumber /= 2;
    }
    cl(newNumber);
    return newNumber;
}

getToOdd(100);
getToOdd(21);

var arrayOfNums = [123, 532, 123, 984, 984];
var arrayOfNums1 = [3, 4, 5, 2, 1];
function findSame(arr) {
    var existing = new Set();
    var repeated = [];
    for (let i = 0; i < arrayOfNums.length; i++) {
        if (!existing.has(arrayOfNums[i])) {
            existing.add(arrayOfNums[i]);
        } else {
            repeated.push(arrayOfNums[i]);
        }
    }
    if (repeated.length == 0) {
        return "No same nums"
    } else {
        return repeated;
    }
}
cl(findSame(arrayOfNums));

function getTime() {
    var curr = new Date();
    var hours = curr.getHours();
    var mins = curr.getMinutes();
    var AMorPM = "AM";
    if (hours > 12) {
        hours -= 12
        AMorPM = "PM";
    }
    return hours + ":" + mins + " " + AMorPM;
}
cl(getTime())

function getTodaysDate() {
    var curr = new Date();
    var month = curr.getMonth();
    var day = curr.getUTCDate();
    var year = curr.getFullYear();
    var dayOfWeek = curr.getUTCDay();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return weekDays[dayOfWeek] + " " + months[month] + " " + day + ", " + year;
}
cl(getTodaysDate())

function daysSince(date) { // takes in mm/dd/yyyy format
    var today = new Date();
    var givenDate = new Date(date);
    var diff = Math.abs(givenDate - today);
    return diff/8.64e+7; // converts milliseconds to days
}
cl(daysSince("11/17/1996"));

hello = (val) => "Hello " + val;
cl(hello("Emily"))

var car = {make: "Mazda", model: 3, color: "black"};
cl(car.color)
car.color = "gray";
cl(car.color)
cl(car)