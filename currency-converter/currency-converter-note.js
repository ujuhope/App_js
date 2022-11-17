var toDollarAmount = 0;
var convertedRate = 0;



function currencyToDollarConverter(){
    var currencyToTrade = prompt("what currency do you want to trade?");
    var amount = prompt("how much do you want?");
    switch(currencyToTrade){
        case "USD":
            toDollarAmount = 1 * amount;
            break;
        case "GBP":
            toDollarAmount = 1.5 * amount;
            break;
        case "NGN":
            toDollarAmount = 0.001 * amount;
            break;
        case "CEDIS":
            toDollarAmount = 0.5 * amount;
            break;
        default:
            toDollarAmount = "you have not inputed anything";
    }
}



function dollarToDesiredCurrency(){
    var desiredCurrency = prompt("what currency do you want");
    switch(desiredCurrency){
        case "USD":
            convertedRate = toDollarAmount;
            alert(convertedRate + "USD");
            break;
        case "NGN":
            convertedRate = toDollarAmount * 1000;
            alert(convertedRate + "NGN");
            break;
        case "CEDIS":
            convertedRate = toDollarAmount * 500;
            alert(convertedRate + "CEDIS");
            break;
        case "GBP":
            convertedRate = toDollarAmount / 1.5;
            alert(convertedRate + "GBP");
            break;
        default:
            alert(toDollarAmount + "USD");
    }
}

currencyToDollarConverter();
dollarToDesiredCurrency()