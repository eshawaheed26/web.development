let top3=[" paris","trevi fountain","vatican city"];
function showItinerary(place1, place2, place3){
    console.log("Visit" + place1);
    console.log("Then Visit" + place2);
    console.log("Finish with a visit to" + place3);
}
//showItinerary(top3[0], top3[1], top3[2]);
showItinerary(...top3);