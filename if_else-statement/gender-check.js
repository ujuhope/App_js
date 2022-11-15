console.log("hello world");


var gender = prompt("what is your gender");

if(gender == "male"){
    alert("you are a Boy");
    var wishFatherHood = prompt("do you want to be a father someday?");
    if( wishFatherHood == "yes"){
        alert("congratulations");
    }else if( wishFatherHood == "no"){
        alert("bomboy for life");
    }
}else if(gender == "female"){
    alert("you are a female");
    var wishMotherHood = prompt("do you want to be a mother someday?");
    if( wishMotherHood == "yes"){
        alert("congratulations @ motherhood");
    }else if( wishMotherHood == "no"){
        alert("Independent woman for life");
    }
}