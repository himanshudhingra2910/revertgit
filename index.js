// console.log("Hello World");
// Array= [1,2,3,4,5];
// let obj=[
    // 1,2,3,4,5,6,67
// ];
// console.log(obj)
// console.log(inputString);
// var inputString=  "Name";

// let contactNo= "Do not contact.";
// contactNo= "Contact pls";

// const pin = 560067
// if(pin=="560067"){
//     console.log("YES");
// }

// // console.log(inputString);
// console.log(contactNo);
// // console.log(pin);
// var inputString = "0";
// // console.log(inputString);
// // let inputString = input_string("Enter a Number: ");

// if (inputString > 0){
// console.log("The number is positive");
// }
// else if (inputString == 0){
//     console.log("The number is Zero");
// }
// else {
//     console.log("The number is negative");
// }
// let gender = "female";
// console.log(gender == "male" ?  "Male" : "Female");
// let age = 76;
// console.log(age <= 10 ? age < 5 ? "Age is below 5" : "Age is above 5" : "Age is above 10");
// let a = 7
// // a = a++ + ++a + a++;
// // console.log(a++ + ++a + a++);
// let a = "201ncb1"
// console.log(Number(a));



// let age = parseInt(prompt ("Enter Age: "));
// if(age > 0 && age <=10){
//     console.log("Not Eligible");
// }
// else if(age >= 11 && age <=25)
// {
//     console.log("Eligible for Sports");
// }
// else if(age >= 26 && age <=40)
// {
//     console.log("Adult");
// }
// else if( age == 56)
//     {
//         console.log("You are 56 years old.");
//     }
// else if( age >= 41 && age <= 65)
// {
//     console.log("Senior Citizen");
// }
// else{
//     console.log("You are above 66.");
// }



// let number = 2000036465364
// if( number % 2 == 0){
//     console.log("The given number is even.");
// }
// else{
//     console.log("The given number is odd.");
// }


// let a = 0
// // let b = 7
// if(a > 0){
//     console.log("The number is positive.");
// }
// else if(a ==0){
//     console.log("a is equal to zero.");
// }
// else{
//     console.log("The number is negative.");
// }
// FOR LOOP
// let valuesForSum = 0;
// for(let i =0;i <= 100;i++)
//     if(i%2==0){
//         valuesForSum += i;   
// }
// console.log(valuesForSum);

// WHILE LOOP
// let valuesForSum = 0;
// let i = 10;
// while(i<=20){
//     (i+2)
//     valuesForSum +=i;
//     i++;
// }
// console.log(valuesForSum);

// // continue statement

// for(let i = 10; i <=20; i++){
//     if(i==15){
//         continue
//     }
//     if(i == 16){
//         continue
//     }
//     console.log(i);
// }


//Break statment 

// for(let i = 13; i <=20; i++){
//     if(i%2==0){
//         break
//     }
//     console.log(i);
// }

let a = parseInt(prompt("Enter First Number: "))
let b = parseInt(prompt("Enter Second Number: "))
let selection = "multiplication"
switch(selection){
    case "addition" :
    console.log(a+b);
    break;
    case "subtraction" :
        console.log(a-b);
        break;
        case "multiplication" :
            console.log((a*b));
            break;
}