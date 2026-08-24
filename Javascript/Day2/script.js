let name = prompt("Enter your name:");

// let result = name.charAt(0).toUpperCase() + name.slice(1);
let result = "";

for (let i = 0; i < name.length; i++) {
    let char = name.charAt(i);

    if (char === char.toUpperCase() && char !== char.toLowerCase()) {
        result += char.toLowerCase();
    } else {
        result += char.toUpperCase();
    }
}

document.write(result);

let arr = [2, 6, 8, 9, 1, 2, 5, 4, 8];

let sum = 0;

document.write("<table border='1'>");

for (let i = 0; i < arr.length; i++) {

    sum += arr[i];

    if (i % 2 == 0) {
        document.write("<tr style='background-color: lightblue;'>");
    } else {
        document.write("<tr style='background-color: lightpink;'>");
    }

    document.write("<td>" + arr[i] + "</td>");
    document.write("</tr>");
}

// Last row = Sum
document.write("<tr style='background-color: lightgreen;'>");
document.write("<td>Sum = " + sum + "</td>");
document.write("</tr>");

document.write("</table>");

let userName = prompt("Enter your name:");

for (let i = 1; i <= 6; i++) {
    document.write("<h" + i + ">" + userName + "</h" + i + ">");
}