var user = prompt("What is your name?").toUpperCase();

switch (user) {
    case 'Alex':
        console.log("Hello Alex");
        break;
    case 'Constantin':
        console.log("How are you doing Constantin");
        break;
    case 'Razvan':
        console.log("Hey Razvan");
        break;
    default:
        console.log("New player! Nice!");
    case 0:

        if (user == 'Alex') {
            console.log("You again?!");
        } else {
            console.log("Hi there!");
        }
        if (user == 'Alex' && user == 'Constantin') {
            console.log("So you finally have a friend to play with?");
        } else {
            console.log("Hi there!");
        }
        if (user == 'Alex' || user == 'Razvan') {
            console.log("Hi there!");
        } else {
            console.log("Hi there!");
        }
