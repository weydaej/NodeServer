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

function vowelRemover(name) {
    var vowellessName = "";
    for (let i = 0; i < name.length; i++) {
        if (name[i].toLowerCase() != "a" && 
            name[i].toLowerCase() != "e" && 
            name[i].toLowerCase() != "i" && 
            name[i].toLowerCase() != "o" && 
            name[i].toLowerCase() != "u") {
                vowellessName += name[i];
        }
    }
    cl(vowellessName);
    return vowellessName;
}

vowelRemover("Emily")
vowelRemover("Kevin")