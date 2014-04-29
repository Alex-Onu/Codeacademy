var bob = {
    firstName: "Bob",
    lastName: "Jones",

    phoneNumber: "(650) 777 - 7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",

    phoneNumber: "(650) 888 - 8888",
    email: "mary.johnson@example.com"
};

var contacts = new Array(bob, mary);

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
    var length = contacts.length;
    var i;
    for (i = 0; i < length; i++) {
        printPerson(contacts[i]);
    }
}


var search = function(lastName) {
    for (i = 0; i < contacts.length; i++) {
        if (lastName === contacts[i].lastName) {
            printPerson(contacts[i]);
        }
    }
};



//list()


var add = function(firstName, lastName, email, phoneNumber) {
    contacts[contacts.length] = new Object({
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email
    });
};

var n = prompt("Name");
var l = prompt("Lastname");
var p = prompt("Phone");
var e = prompt("Email");

add(n, l, p, e);

list();
