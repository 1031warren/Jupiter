//display error message on php page 
function printError(elemId, msg){
    document.getElementById(elemId).innerHTML = msg;

}

//this function will ensure that the form input invalid 
function vaildateForm(){
    //these are the inputs from the html text/input elements
    var fullName = document.appForm.fullName.value;
    var age = document.appForm.age.value;
    var idNum = document.appForm.idNum.value;
    var location = document.appForm.location.value;
    var heights = document.appForm.heights.value;

    //track whether or not the inputs are valid
    var nameValid = true;
    var ageValid = true;
    var idNumValid = true;
    var locationValid = true;
    var heightsValid = true;

    //clear out any errors when the form is resubmitted
    printError("fullNameErr","");
    printError("ageErr","");
    printError("idNumErr","");
    printError("locationErr","");
    printError("heightsErr","");


    //check to see if the user entered a valid name
    if (fullName == ""){
        printError("fullNameErr", "Please enter your name.");
        nameValid = false;
    }
   
 
    //check to see if the user entered a valid age
    if (age == ""){
        printError("ageErr", "Please enter your age.");
        ageValid = false;
    }
    
    //check to see if the user entered a valid id number 
    if (idNum == ""){
        printError("idNumErr", "Please enter your id number.");
        idNumValid = false;
    }

    //check to see if the user entered a valid location 
    if (location == ""){
        printError("locationErr", "Please enter your location.");
        locationValid = false;
    }

    //check to see if the user entered valid heights
    if (heights == ""){
        printError("heightsErr", "Please choose an option.");
        heightsValid = false;
    }
   
    if(!nameValid || !ageValid || !idNumValid || !location || !heights){
        return false;
     }
}
