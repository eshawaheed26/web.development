var table = {
    legs: 3,
    color: "brown",
    priceUSD: 100,
}
console.log(table);
console.log(table.color);

// Alternative

var car = {};
car.color="red";
car["color"]="green";
car["speed"]=200;
car.speed=100;
console.log(car);

// pop/push

var fruits = [];
fruits.push("apple");
fruits.push("pear");
fruits.pop();
console.log(fruits);

// another for pop/push

function arrayBuilder(one,two,three){
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    arr.pop();
    return arr;
}
var simpleArr = arrayBuilder("apple","pear","plum");
console.log(simpleArr);