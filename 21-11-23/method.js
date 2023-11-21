// When a function is defined in a object, it becomes a method
var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function(){
    console.log("The engine is running")
}
car.lightsOn = function(i){
    if (i === 1){
    console.log("The lights are on") }
    else if (i === 0){
        console.log("The lights are off") }
}
console.log(car);
car.turnTheKey();
car.lightsOn(1);
// car.lightsOn(0);