 /* var speech="i am from  dhaka, bangladesh";
var count=0;
for(i=0;i<speech.length;i++){
     var char=speech[i];
    if(char==" " && speech[i-1]!=" ") {
    count++;
    }
}
count++;
console.log(count); */

function megaFriend(arr) {
  
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
var arr = ['raihan','abir','shakil','eftekhar','joy'];
var result= megaFriend(arr);
console.log(result);