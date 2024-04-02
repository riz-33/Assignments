var date = new Date ();

var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

var day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ]

console.log ("Today is " + day[date.getDay()]);


var today = new Date ();

var dob = new Date ("31 May,1993")

var diff = today.getTime() - dob.getTime();

var age = diff / (1000 * 60 * 60 * 24 * 30 * 12)

console.log ("Your age is " + Math.round (age));