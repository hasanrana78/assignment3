/* var marks=[23,24,24,28,21,22];
var max=marks[0];
for(var i=0;i<marks.length;i++) {
     var element=marks[i];
    if( element>max) {
        max=element; }
}
console.log("Highest value is",max);  */


/* var marks=[23,24,25,65,66];   //sum of array elements
var sum=0;
for(i=0;i<marks.length;i++){
    var num=marks[i];
    sum=num+sum;
}
console.log(sum);   */


function arraySum(numbers){  //sum of array elements
    var sum=0;
    for(i=0;i<numbers.length;i++){
        var num=numbers[i];
        sum=sum+num;
    }
    return sum;
}
var numbers=[1,2,3,4];
var total=arraySum(numbers);
console.log(total);

var newTotal=arraySum([1,2,3,4,5]);
console.log(newTotal);