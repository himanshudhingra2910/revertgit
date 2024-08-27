let i = 15;
var sum = 0;
var sum2=0;
while(i > -25){
    if(i>0){
        console.log(i,"The number is positive.");
    sum = sum + i
    }
    else if(i==0){
        console.log(i,"The number is zero.");
    }
    else{
        console.log(i,"The number is negative.");
        sum2 = sum2+ i
    }
    i--;
}
console.log("The sum of all positive numbers from 15 to -25 is: " + sum);
console.log("The sum of all negative numbers from 15 to -25 is: " + sum2);