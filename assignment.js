 function kilometerToMeter(num) {
    if(num>=0) {   
    var meter=1000*num;
    return meter;}
    else{ return "please insert positive number"}
}
var result=kilometerToMeter(0);
console.log("converted to meter:",result); 

//....................

    function budgetCalculator(number){
   if (number>=0) { var clockPrice=50;
    var clockTotal=clockPrice*number;
    console.log(clockTotal);
   
    var phonePrice=100;
    var phoneTotal=phonePrice*number;
    console.log(phoneTotal);

    var laptopPrice=500;
    var laptopTotal=laptopPrice*number;
    console.log(laptopTotal);

    var total=clockTotal+phoneTotal+laptopTotal;
    return total; }
    else { return "please insert positive number" } 
   
}
var budget=budgetCalculator(2);
    console.log(budget);


//.................

 function hotelCost(day) {
    var hotelCost1=day*10/day;
    var firstStep=hotelCost1*100;

    var secondStep=hotelCost1*80;

    var hotelCost2=day-20;
    var thirdStep=hotelCost2*50;
    
    var totalCost=firstStep+secondStep+thirdStep;
    return totalCost;
    }  
    
var result=hotelCost(50);
console.log(result); 


//.................

function megaFriend(arr) {    //longest name
  
    var lgth = 0;
    var longest;
    
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].length > lgth) {
        var lgth = arr[i].length;
        longest = arr[i];
      } 
    }   
    return longest;
  }
  var arr = ['nahin','abir','shakil','eftekhar','joy'];
  var result= megaFriend(arr);
  console.log(result);









