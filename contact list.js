var friends = {
    Bill: {},
    Steve: {}
};

friends.Bill.firstName = "Bill";
friends.Bill.lastName = "Gates";
friends.Bill.number = 587678;
friends.Bill.address = ['mes quarters', 'east camp'];

friends.Steve.firstName = "Steve";
friends.Steve.lastName = "Jobs";
friends.Steve.number = 67896986;
friends.Steve.address = ["nch colony", "kanjur marg"];

var list = function() {
    for (var friend in friends) {
        // console.log(friend);
    }
};

var search = function(name) {
    for (var prop in friends)
        if (name === friends[prop].firstName) {
            console.log(friends[prop]);
            return friends[prop];
        }
};

list();
search("Bill");
search("Steve");
