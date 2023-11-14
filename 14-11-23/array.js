var crops = ["wheat" , "barley" , "potato" , "salt" , "rocks"];
/* console.log(crops[4]);
console.log(typeof(crops)) */

// Making a function that outputs the content of an array

function listArrayItems(crops){
    for (var i =0; i < crops.length; i++){
        console.log(crops[i])
    }
}listArrayItems(crops);
