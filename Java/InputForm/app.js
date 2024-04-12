function submitForm(){
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    if (name.value.trim() && email.value.trim()) {
        console.log("Name--->", name.value);
        console.log("Email--->", email.value);
        name.value = "";
        email.value = "";
    } else {
        console.log("Please Enter Value")
    }
}