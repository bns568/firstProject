let userName = prompt("What is your name?");

let nameConfirm = confirm("Just checking, is " + userName + " your real name?");

if(nameConfirm) {
    alert("Welcome to my page, " + username + "!");
}
else {
    userName = prompt("Okay, what is your name?");
}

console.log("The user's name is " + userName + ".")