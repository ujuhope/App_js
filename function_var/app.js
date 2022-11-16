// Assignment

//Create an object of human with their basic features such as
//name, height, gender, maritalStatus, occupation, salary,
// and a function that takes the weight and prints the person's BMI
var comfort = {
    name: "comfort",
    height: 2,
    gender: "female",
    maritalStatus: "single",
    occupation: "Doctor",
    salary: "three hundred thousand naira",
    calculateBMI: function(weight){
      console.log(weight/(this.height * this.height));
    }

}
console.log(comfort.name);
console.log(comfort.height);
comfort.calculateBMI(70);
 