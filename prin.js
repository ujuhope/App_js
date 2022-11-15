// loop through the code below and print out a sentence of this format.
// My name is ......., I am ........ old and I am in class ....
var classStudentsDetails = [
    {
        name: "Princess",
        age:2,
        class:"js1"
    },
    {
        name: "Hope",
        age:1,
        class:"js2"
    },
    {
        name: "Amarachi",
        age:3,
        class:"js3"
    },
    {
        name: "Vivian",
        age:2,
        class:"js1"
    }

];



for(var i = 0;  i < classStudentsDetails.length; i++){
console.log("My name is" + " " + classStudentsDetails[i] .name, + " "
+ "i am" + " " +  classStudentsDetails [i].age + " " + "years old"+" " +
 "and I am in class" + " " + classStudentsDetails[i] .class);
} 
// forLoop();