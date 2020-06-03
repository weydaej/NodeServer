// javascript
var hello = "hello, world!";
console.log(hello);

console.log("this is my first \"%s\" program written in %s", hello, "JavaScript")

var nums = {
    twenty: 20,
    thirty: 30,
    forty: 40
};
console.log("%O is my nums object ", nums);
console.log(nums);
console.log(nums.forty);

var arr = ["hi", "hello", "hey", "howdy", "hewro"];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

if (arr.length === 5) {
    console.log(arr.pop());
}
console.log(arr.length);
console.log(arr);