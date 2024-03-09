// for (var i = 1; i < 11; i++) {
//     console.log (i);
// }


// var num = prompt("Enter Number") 
// var length = prompt ("Enter Legth")

// for (i = 1; i <= length; i++) {
//   console.log(num + " x " + i + " = " + num * i);
// }


// var fruits = ["apple", "banana", "mango", "orange", "strawberry"]

// for (var i = 0; i < fruits.length; i++) {
// console.log (i + " " + fruits[i])
// }


var items = ["cake", "applePie", "cookie", "chips", "patties"]

var userInput = prompt ("What you want to order", "cake, applePie, cookie, chips, patties")

var flag = "no"

for (var i = 0; i < items.length; i++) {
    if (userInput === items[i]) {
        flag = "yes"
        console.log ("Yes Avaialable")
    }
}

if (flag === "no") {
    console.log ("Sorry, Not Avaialable")
}