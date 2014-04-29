/*jshint multistr:true */
var text = "Hello I am Alex and I am learning Javascript";
var myName = "Alex";
var hits = [];
for (var i = 0; i < text.length; i++) {
    if (text[i] === myName[0]) {
        for (j = i; j < i + myName.length; j++) {
            if (text[j] === myName[j - i]) {
                hits.push(text[j]);
            }
        }
    }
}

if (hits.length > 0) {
    console.log(hits);
} else {
    console.log("Name Not here");
}
