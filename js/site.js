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

function selected() {
    var itemSelected = document.querySelector("#selection").value;
    console.log(itemSelected)
}

function callingAPI() {
    // random function

    let itemRandomHolder = [];
    let count = 0;
    fetch("storeData.json")

    .then(response => response.json())
    .then(data => {

        while(count !=10){
            let random = data['data'][Math.floor(Math.random() * data['data'].length)];
            count++;
            itemRandomHolder.push(random)
        }
        console.log(itemRandomHolder)
        
        for(let item of itemRandomHolder){

            let contain =  document.querySelector('.BarHolder')
            let div = document.createElement("div")
            div.className = "BarHolder-label";
            div.innerHTML = item['name']
            contain.appendChild(div)
            let make = document.createElement("div");
            make.className ="BarHolder-bar first"
            make.innerHTML = item['abv']+"%"
            make.style.height = item['abv'] + "%"
            contain.appendChild(make)

        }
    })

   
}

callingAPI();