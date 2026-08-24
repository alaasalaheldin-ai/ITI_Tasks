// task1
var names = ["ahmed", "islam", "sandra", "Fatma", "Ali"];

var namesCopy = names.slice();
var result = [];

for (var i = 0; i < 2; i++) {
    var randomIndex = Math.floor(Math.random() * namesCopy.length);
    result.push(namesCopy[randomIndex]);
    namesCopy.splice(randomIndex, 1);
}

console.log(result);




// task2
var size = parseInt(prompt("Enter array size:"));
while (isNaN(size) || size <= 0) {
    size = parseInt(prompt("Invalid size, enter a positive number:"));
}

var arr = [];
for (var i = 0; i < size; i++) {
    var value = prompt("Enter number #" + (i + 1) + ":");
    while (isNaN(value) || value.trim() === "") {
        value = prompt("Not a number, try again for #" + (i + 1) + ":");
    }
    arr.push(Number(value));
}

console.log(" same order:", arr);

var ascArr = arr.slice();
ascArr.sort(function (x, y) { return x - y; });
console.log(" ascending order:", ascArr);

var descArr = arr.slice();
descArr.sort(function (x, y) { return y - x; });
console.log(" descending order:", descArr);

var revArr = arr.slice();
revArr.reverse();
console.log(" reversed array:", revArr);

var evens = [];
for (var j = 0; j < arr.length; j++) {
    if (arr[j] % 2 === 0) {
        evens.push(arr[j]);
    }
}
if (evens.length === 0) {
    alert(" No even numbers found in the array");
} else {
    console.log(" even numbers only:", evens);
}

var divisor = Number(prompt(" Enter a number to check divisibility:"));
var divisible = [];
for (var k = 0; k < arr.length; k++) {
    if (arr[k] % divisor === 0) {
        divisible.push(arr[k]);
    }
}
if (divisible.length === 0) {
    alert(" No numbers divisible by " + divisor);
} else {
    console.log(" numbers divisible by " + divisor + ":", divisible);
}

var discounted = [];
for (var m = 0; m < arr.length; m++) {
    discounted.push(arr[m] * 0.7);
}
console.log(" array with 30% discount:", discounted);

var joined = "";
for (var n = 0; n < arr.length; n++) {
    joined += arr[n];
    if (n < arr.length - 1) {
        joined += "**";
    }
}
console.log(" concatenated string:", joined);

