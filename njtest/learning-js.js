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
cl(hello("Emily"));

var year = new Date("1/1/2020");
var car = {make: "Mazda", model: 3, color: "black", year: year.getFullYear()};
car.color = "gray";
cl(car);

class Car {
    constructor(make, model, color) {
        this.make = make;
        this.model = model;
        this.color = color;
    }

    setMake(make) {
        this.make = make;
    }

    setModel(model) {
        this.model = model;
    }

    setColor(color) {
        this.color = color;
    }

    get makeAndModel() {
        return this.make + " " + this.model;
    }

}

var myCar = new Car("Honda", "Civic", "Gray");
cl(myCar.makeAndModel);

class User {
    constructor (first, last) {
        this.first = first
        this.last = last
        this.username = ""
        this.password = ""
        this.birthday = new Date()
    }

    setUsername (username) {
        this.username = username
    }

    setPassword (password) {
        this.password = password
    }

    setBirthday (birthday) {
        this.birthday = new Date(birthday)
    }

    get name() {
        return this.first + " " + this.last
    }
}

var myUser = new User("Emily", "Weyda")
myUser.setBirthday("11/17/1996")
myUser.setUsername("why_duh")
myUser.setPassword("thisisasecret")
cl(myUser)

function fib(n) {
    if (n === 2) {
        return 1;
    } else if (n === 1) {
        return 0;
    } else {
        return fib(n - 1) + fib(n - 2)
    }
}

cl("fib: " + fib(19))

function fibIter(n) {
    const lastTwo = [0, 1]; // initialize two var array
    let counter = 3; // start at 3 because first two are already there
    while (counter <= n) { // while the counter <= the number we are trying to find the fib nth term
        const nextFib = lastTwo[0] + lastTwo[1]; // find the next fib number
        lastTwo[0] = lastTwo[1]; // set the first of the array to the second
        lastTwo[1] = nextFib; // set the second of the array to the new next fib number
        counter++; // increment counter
    }
    return n > 1 ? lastTwo[1] : lastTwo[0]; // if n is 2 or more, return the second number of the array, else return the first
    /**
     * if (n > 1) {
     *      return lastTwo[1];
     * } else {
     *      return lastTwo[0];
     * }
     */
}

for (let i = 1; i < 20; i++) {
    cl("Fib[" + i + "]: " + fibIter(i))
}

function fibFastRecursive(n, dict = {1: 0, 2: 1}) {
    if (n in dict) {
        return dict[n];
    } else {
        dict[n] = fibFastRecursive(n - 1, dict) + fibFastRecursive(n - 2, dict);
        return dict[n];
    }
}
cl(fib(20))
cl(fibFastRecursive(20))

// 0 1 2 3 4 5 6 7 8 9 10
// t h i s i s a t e s t
// 0 & 10
// 1 & 9
// 2 & 8
// 3 & 7
// 4 & 6

// length = 11
// first  == word[i]
// second == word[length - 1 - i]
function isPalindrome(word) {
    var isPal = true;
    for (let i = 0; i < word.length / 2; i++) { // efficient because it only goes through half of the word
        if (word[i] != word[word.length - 1 - i]) isPal = false; // return false if the opposite letter doesn't match
    }
    return isPal;
}
cl("hello " + isPalindrome("hello"))
cl("absdba " + isPalindrome("absdba"))
cl("abba " + isPalindrome("abba"))

function swap(array, num1, num2) {
    var temp = array[num1];
    array[num1] = array[num2];
    array[num2] = temp;
}

function bubbleSort(array) {
    let isSorted = false; // is sorted will be true when we can end the loop
    let counter = 0; // to optimize the amount of numbers we need to iterate through 
    while (!isSorted) { // keep doing this until array is sorted
        isSorted = true; // true unless there is a swap
        for (let i = 0; i < array.length - 1 - counter; i++) {
            if (array[i] > array[i + 1]) { // if the next number is greater than the current number
                swap(array, i, i + 1); // swap them 
                isSorted = false; // we made a swap so we aren't done yet
            }
        }
        counter++; // increment counter so we iterate through one less time
    }
    return array; // hurray we are done
  }

cl(bubbleSort([23, 54, 12, 2, 64, 34, 96, 1]))
cl(bubbleSort([1]))
cl(bubbleSort([2, 1]))

function insertionSort(array) {
    for (let i = 0; i < array.length; i++) { // iterate through the array
		let j = i; // create second pointer
		while (j > 0 && array[j] < array[j - 1]) { // while the second pointer is greater than 0 and the number at the current j position is less than the one behind it
			swap(array, j, j - 1); // swap the values
			j--; // decrement j
		}
	}
	return array; // annnd scene
}

cl(insertionSort([23, 54, 12, 2, 64, 34, 96, 1]))

function selectionSort(array) {
    let startIndex = 0; // starts at zero
    while (startIndex < array.length - 1) { // while we are not done with the array
        let smallestIndex = startIndex; // create second pointer to keep track of the smallest 
        for (let i = startIndex + 1; i < array.length; i++) { // start after the starting index and traverse the array
            if (array[smallestIndex] > array[i]) { // if the smallest index is larger than the current spot in the array, 
                smallestIndex = i; // set as the new smallest
            }
        }
        swap(array, startIndex, smallestIndex); // swap in array
        startIndex++; // increment
    }
    return array;
}

cl(selectionSort([23, 54, 12, 2, 64, 34, 96, 1]))

