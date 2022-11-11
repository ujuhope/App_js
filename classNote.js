console.log("hello whole wide world");

var num = 1; // number, float, decimal
var name = "seun";  // string
var isAGirl = false; //boolean
var non = null; // null

var und = undefined; //undefine
var numArr = [1,2,3,4,5]; // array
var strArr = ["we","are","they", null, [1,2,4,5]]; // array
var obj = { // object
    name:"Osinachi",
    isSingle:true,
    numOfYearsInEachRelationship:[2,5,7,9,34],
    claculateAge: function(yearOfBirth){
        console.log(2022 - yearOfBirth)
    }
} 

console.log(obj.name);
console.log(obj.yearOfBirth);
console.log(obj.isSingle);
console.log(obj.numOfYearsInEachRelationship);
obj.claculateAge(1995);

// Assignment

//Create an object of human with their basic features such as
//name, height, gender, maritalStatus, occupation, salary,
// and a function that takes the weight and prints the person's BMI