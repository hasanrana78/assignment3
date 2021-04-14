function budgetCalculator(phoneNumber){
    if (phoneNumber>=0) {
        var phonePrice=100;
        var phoneTotal=phonePrice*phoneNumber;
        return phoneTotal;
    }
    else {return "please insert positive number"}
   
}
var phoneBudget=budgetCalculator(2);
console.log("total cost for phone=",phoneBudget);


function budgetCalculator(phoneNumber){
    if (phoneNumber>=0) {
        var phonePrice=100;
        var phoneTotal=phonePrice*phoneNumber;
        return phoneTotal;
    }
    else {return "please insert positive number"}
   
}
var phoneBudget=budgetCalculator(5);
console.log("total cost for phone=",phoneBudget);
