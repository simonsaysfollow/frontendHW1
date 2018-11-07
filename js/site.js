function callSearch() {
    var person = prompt("Who are you looking for?", );
    if(person != null){
        console.log("this is person", person)
    }
}
function callCompare() {
    var person = prompt("Who are you comparing(person1)?");
    var person2 = prompt("Who are you comparing?(person2)");
    if (person != null && person2 != null) {
        console.log("this is person", person)
        console.log("this is person2", person2)
    }
}

function callingAPI() {
    console.log("works")
    var request = new XMLHttpRequest();
    request.open("GET", "https://api.spotify.com/v1/artists/9c518b1302614307b8152c7fd3714b56","Authorization: Bearer {8885ba82b5be499cb0a9a8e2613f6302}");
    request.onload = function () {
        var data = JSON.parse(this.response);
        console.log(data)
    }
    request.send();
}
