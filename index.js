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

// let a = parseInt(prompt("Enter First Number: "))
// let b = parseInt(prompt("Enter Second Number: "))
// let selection = "multiplication"
// switch(selection){
//     case "addition" :
//     console.log(a+b);
//     break;
//     case "subtraction" :
//         console.log(a-b);
//         break;
//         case "multiplication" :
//             console.log((a*b));
//             break;
// }

// Write a javascript for loop that iterates from 0 to 15.For each iteration,it checks if the number is odd or even and displays amessage on screen.
// for(let i =0; i<=15; i++){
   
//     if(i%2==0){
//         console.log(i,"the number is even");
//     }
//     if(i%2 !==0){
//         console.log(i,"the number is odd");
//     }
// }

// To find the largest of five numbers
// let a = parseInt(prompt("Enter the first number: "))
// let b = parseInt(prompt("Enter the second number: "))
// let c = parseInt(prompt("Enter the third number: "))
// let d = parseInt(prompt("Enter the fourth number: "))
// let e = parseInt(prompt("Enter the fifth number: "))
// // console.log(a,b,c,d,e);
//  if(a>b && a>c && a>d && a>e){
//     console.log(a);
//  }
//  else if(b>a && b>c && b>d && b>e){
//     console.log(b);
//  }
//  else if(c>a && c>b && c>d && c>e){
//     console.log(c);
//  }
//  else if(d>a && d>b && d>c && d>e){
//     console.log(d);
//  }
//  else{
//     console.log(e);
//  }

// let i = 1;
// while(i<=100){
//     if(i%3==0 && i%5 !==0){
//         console.log("Fizz");
//     }
//     if(i%5==0 && i%3 !==0){
//         console.log("Buzz");
//     }
//     if(i%3==0 && i%5==0){
//         console.log("FizzBuzz");
//     }
//     else if(i%3!==0 && i%5!==0){
//                 console.log(i);
//     }
//     i++

// }

    

// function addition(a,b){
//     return a+b;
//     }


// function subtraction(a,b){
//     return a-b;
// }
// // subtraction(a,b)

// function multiplication(a,b){
//     return a*b;
// }
// // multiplication(a,b)

// function divide(a,b){
//     if(a>b){
//   



// Funtion that reverses the given number
// function reverseNumber(num1){
//     return num1.toString().split('').reverse().join('');
// }
// console.log(reverseNumber(123));

// // Function to add all the passed arguments:

// function addition(num1,num2,...rest){
//     var sum =0;
//     for(i=0; i<arguments.length;i++){
//         console.log(arguments[i]);
//         sum+=arguments[i];
//     }
//     return sum;
// }
// console.log(addition(66,88,55,43,2,35,7,7,9,6534,3645));

// Function to create a calculator

// var a= Number(prompt("Enter First Number: "))
// var b= Number(prompt("Enter Second Number: "))
// var c= prompt("Do you want to add,subtract,multiply or divide: ")
// function addition(a,b){
//     if(c== "add"){
//     return a+b
//     }
// }
// function subtraction(a,b){
//     if(c== "subtract" && a>b){
//         return a-b
//     }
//     else{
//         return b-a
//     }
// }
// function multiplication(a,b){
//     if(c=="multiply"){
//     return a*b;
//     }
// }
// function divide(a,b){
//     if(c== "divide" && a>b){
//         return a/b
//     }
//     else{
//        return b/a
//     }
// }

// console.log(alert(divide(a,b)));


// Function to create a calculator
// var a= Number(prompt("Enter First Number: "))
// var b= Number(prompt("Enter Second Number: "))
// var c= prompt("Do you want to add,subtract,multiply or divide: ")
// function calculator(){
//     if(c== "add"){
//     return a+b
//     }
//     else if(c== "subtract" && a>b){
//         return a-b
//     }
//     else if(c== "subtract" && b>a){
//         return b-a
//     }

//     else if(c=="multiply"){
//     return a*b;
//     }
//     else if(c== "divide" && a>b){
//         return a/b
//     }
//     else if(c== "divide" && b>a){
//        return b/a
//     }
//     else if(c== "divide" && a==b){
//         return 1
//     }
//     else{
//         return "Invalid Input"
//     }
// }


// console.log(alert(calculator()));

// var multiply = function multiply(a,b){
// return a*b
// }
// console.log(multiply(10,20));

// var isDivisible=(a,...rest)=> {
// for(i=0;i< arguments.length;i++){
//     return arguments[i];
// }

// }
// console.log(isDivisible(1,2,3,4));

// let isDivisible = function isDivisible(){
//     for(i=0;i<arguments.length;i++){
//        return arguments
//     }
// }

// console.log(isDivisible(1,2,3,4,5,6,));

// // let a=(val)=> "Hello"+val;

// let obj = {
//     name: "Himanshu Dhingra",
//     englishMarks: 100,
//     physicsMarks: 100,
//     geographyMarks: 100,
//     totalMarks: totalMarks=()=>{
//         return this.englishMarks + this.physicsMarks + this.geographyMarks;
//     }
// };

// console.log(obj.totalMarks());

// console.log(handleAdd(10,20));
// // var handleAdd = function add(a,b){
// //     return a*b
// // }
// // console.log(handleAdd(10,20));

// function information(name,address){
//     this.name= name;
//     this.address= address
// }

// const Himanshu =  new information(1,2);
// console.log(information());


// (function impure(){
//     var password = 12344556;
// })();
// console.log(password);

// var array_input=[3,4,9.98,"String",{}];
// array_input[2,3]=["tooh","tooh"]
// // array_input[4]= false;
// // array_input[88]= true;
// // // console.log(array_input);

// let students=[1,2,3,4,9788,755]
// // let sum=0;
// for(let i=0; i<students.length;i++){
//     console.log(students[i]);
//     // sum += students[i];    
// }
// console.log(sum);
// // sum +=students[i]
// console.log(sum);

// }
// let grades=["sample","temple","gamble","humble"]s

// console.log();

// let i=0
// while(i<students.length){
//     console.log(students[i])
//     i++;

// }

// FOR OF LOOP
// let color = ["green","blue","red"]
// for(y of color){
//     console.log(y);
// }

// SLICE keyword
// let color=["green","blue","red","yellow"] 
// let color2=color.slice(1,4)
// let color3=color.slice(0,3)
// console.log(color);

// Splice keyword
// let color=["green","blue","red","yellow"] 
// color.splice(0,1,"Himanshu")
// console.log(color);

// function prof(num1= 1233456679){
// return num1.toString().split('').reverse().join('');
// }
// console.log(prof());

// // MAP keyword

// let input_array = [22,33,44,55]
// input_array.map((item,index )=> console.log(index +" "+ item * 3))

// ForEach Keyword

// let input_array = [22,33,44,55]
// console.log(input_array.forEach((item )=> item * 6))

// Filter Keyword

// let input_array = [22,33,44,55]
// console.log(input_array.filter((item )=> item%2==0))

// Reduce keyword 

// let input_array = [17,65,151,2,45,677,45,223,544]
// console.log(input_array.reduceRight((acc,item)=> acc/item,1))

// console.log(this);

// let input_array=[1,3,4,5,6]
// console.log(input_array.reduce((acc,value) => (acc - value)))

// let input_array=["Hima","dhing","123"]
// console.log(input_array.indexOf("dhing"))

// let grades = [1,2,3,4,5,6]
// function checkFunction(para){
//     if(grades.indexOf(para) >=  0){
//         return true;
//     }
//     else{
//         return false
//     }
    
// }
// console.log(checkFunction(3));

// let grades = [1,2,0]
console.log(null == null);