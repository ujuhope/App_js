// Assignment

function totalAccontBal(){

  var studentList = [
    {
        name: "Princess",
        age:2,
        class:"js1",
        acctBal:200

    },
    {
        name: "Hope",
        age:1,
        class:"js2",
        acctBal:300

    },
    {
        name: "Amarachi",
        age:3,
        class:"js3",
        acctBal:450

    },
    {
        name: "Vivian",
        age:2,
        class:3,
        acctBal:600
    }
]
var totalBalance = 600 + 450 + 300+ 200;
for(var i =0; i < studentList.length; i ++){
    totalBalance = totalBalance + studentList[i];
}
    console.log(totalBalance)

}
totalAccontBal();


 // given the details of every student in a class 
 // compute the total amount of all their
 // account balance put together.
//  ans = 1550




// var arrAcct = [2,4,5,7,5,9];

//   function addAllBal(){
//     var sumOfAllAcct = 0;
//     for(var i = 0; i < arrAcct.length; i++){
//         sumOfAllAcct = sumOfAllAcct + arrAcct[i];
//     }
//     console.log(sumOfAllAcct)

//   }
//   addAllBal()
