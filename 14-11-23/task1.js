var age = 70;
if (age >= 65){
    console.log("You get your income from pension");
}
else if ( 65 > age && age >= 18){
    console.log("Each month you get a salary");
}

else if ( 18 > age ){
    console.log("You get an allowance");
}
else{
    console.log("The value of the age is not numerical.")
}

