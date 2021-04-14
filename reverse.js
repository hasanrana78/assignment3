function reverseCount(str) {
    var reverse="";
    for(var i=0;i<str.length;i++) {
        var char=str[i];
        reverse = char + reverse;
    } 
   return reverse;
}

var statement="i am from dhaka";
var result=reverseCount(statement);
console.log(result);

//..................
function reverseString(str){
    var splitString = str.split("");
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]

    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}
var result=reverseString("hello");
console.log(result);

//............

function reverseString(str) {
    return str.split("").reverse().join("");
}
var result=reverseString("like");
console.log(result);