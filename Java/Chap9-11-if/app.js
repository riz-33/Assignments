// var city = prompt ("Enter Your City")

// if(city === "karachi")(
//     alert ("Welcome to city of lights")
// )

// else (city !== "Karachi")(
//     alert ("Valid for Karachi only")
// )


// var gender = prompt ("Enter Your Gender")

// if (gender === "male"){
//     alert ("Good Morning Sir")
// }

// if (gender === "female"){
//     alert ("Good Morning Ma'am")
// }

// var color = prompt ("Enter color name")

// if (color === "red") {
//     alert ("Must Stop")
// }

// if (color === "yellow") {
//     alert ("Ready to Move")
// }

// if (color === "green") {
//     alert ("Move Now")
// }


// var currentFuel = prompt ("enter fuel")

// if (currentFuel < 0.25) {
//     alert ("Please refill the fuel in your car")
// }

// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }

// var eng = parseFloat (prompt ("Enter Your English Marks"))
// var urdu = parseFloat (prompt ("Enter Your Urdu Marks"))
// var maths = parseFloat (prompt ("Enter Your Maths Marks"))

// var obtainedMarks = (eng+urdu+maths)

// var perc = (obtainedMarks/300)*100


// document.write ("<h3>Marks Sheet</h3>")

// document.write ("Total Marks : 300 <br>")
// document.write ("Marks Obtained : " + obtainedMarks +"<br>")
// document.write ("Percentage : " + perc.toFixed (2) + "%" +"<br>")


// if (perc <100 && perc >= 80 ) {
//     document.write ("Grade : A-One <br>")
//     document.write ("Remarks : Excellent")
// }

// else if (perc <80 && perc >= 70 ) {
//     document.write ("Grade : A <br>")
//     document.write ("Remarks : Good")
// }

// else if (perc <70 && perc >= 60 ) {
//     document.write ("Grade : B <br>")
//     document.write ("Remarks : You Need to Improve")
// }

// else if (perc <60) {
//     document.write ("Grade : Fail <br>")
//     document.write ("Remarks : Sorry")
// } 



var guess = prompt ("Guess the Secret Number")

if (guess == 3) {
    alert ("Bingo! Correct Answer")
}

else if (guess !==3) {
    alert ("Close Enough")
}
