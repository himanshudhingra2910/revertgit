// for(let i=10;i >= -20;i--){
//     if(i%2==0){
//      console.log(i); 
//     }
// }

// var thisIsAnArray =["element1","element2","element3","element4"]
// for(i=0;i<thisIsAnArray.length;i++){
//     console.log(thisIsAnArray[i]); 

// }
// // console.log(thisIsAnArray);

var sumArray = [2,5,77,99,44,33,55,67,88,88]
var sum=0;
for(i=0; i<sumArray.length; i++){
    console.log(sumArray[i]);
    sum = sum + sumArray[i];
}
console.log("The sum of all the element is: " + sum);