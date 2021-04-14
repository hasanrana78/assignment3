
var marks=[1,2,4,3,4,5,1,2];
var unique=[];
for(i=0;i<marks.length;i++){
   var num=marks[i];
   var index=unique.indexOf(num);
   if(index==-1){
       unique.push(num);
   }

}
console.log(unique);