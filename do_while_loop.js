let i = 10; var sum = 0; 
do{
    if(i>0){
    console.log(i,"The number is positive.");
    sum = sum + i;
    }
    else if(i==0){
        console.log(i,"The number is zero.");
    }
    else{
        console.log(i,"The number is negative.");
    }
    i--;
}
while(i >= -10)
    console.log("The sum of all positive numbers is:",sum);