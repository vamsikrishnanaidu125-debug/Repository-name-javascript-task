// 1 2 3 4 5
//for(let i=1; i>=5; i=i+5){
  // console.log(i)
//}

//14 10 6 2
//for(let i =14; i>=2; i=i-4){
  //  console.log(i)
//}

//20 10 8 5
//for(let i =20; i>=5; i=i-4){
  //console.log(i)
  
//}

//20 10 8 5 6
//for(let i=20; i>6; i=i-5){
  //console.log(i)
//}

//1 2 3 4 5
//for(let i=1; i<5; i=i+1){
  //console.log(i)
//}

//syntax
//int
//while(condition){

//}

//4 7 10 13 16
//i=4
//while(i<=16){
  //console.log(i);
  //i+=3
  
//}

//let sum =0;
//for (let i=2; i<=6; i=i+1){
  //console.log(i);
  //sum=sum+i
  //i+=1
//}

//let n=10
 //1 2 3 4 5 67 8 9 10
//find the sum of first n natural numbers

//let n=5;
//for(let i=1;i<=n;i=i+1){
  //console.log(i);
  //sum=sum+1;
  
//}
//console.log(sum);

//find the factorial of 3
//3 2 1

//for(letnj=1; j<=5; j=j+1){
//let output="";
//for(let i=1;i<=3;i++){
  //console.log(1);
  //output=output+1;
//}
//console.log(output);
//}


// let n=4
// if(n%2===0){
//   console.log(n);
  
// }


// let fact=1
// let n=3
// for(let i=n; i>=1; i=i-1){
//   fact =fact*i;
// }
// console.log();


// do {
//     // code
// } while (condition);


// let i = 1;

// do {
///     console.log(i);
//     i++;
// } while (i <= 15);

// for(let i=1; i<=10; i++){
//   console.log(i);
// if(i==5){
//   break;
// }
// }

// let i=1;
// while(i<=5){
//   console.log(i);
//   if(i==3){
//     break;
//   }
//   i++;
// }

//  for(let i=22; i<=30; i++){
//    console.log(i);
//    if(i%5==0){
//      break;
//    }
//   i++;
// }

// for(let i=59; i>=50; i++){
//   console.log(i);
//   if(i%5==0){
//     break;
//   } 
// }


// let start=10;
// let end=20;
// let count=0;
// for(let i=start; i<=end; i++){
//   count++;
//   console.log(i);
//   if(count==3){
//     break;
//   }
// }

//for(let i=25; i>=13; i--){
//   if(i%2==0){
//     console.log(i)
//     evencount++;
//   }
//   if(evencount==2){
//     break;
//   }
// }


// for(let i=15; i<=20; i++){
//   if(i === 18 ){
//     continue;
//   } 
//   console.log(i);
// }


// let unluckyyear = 2024;
// for(let year=2020; year<=2026; year++){
//   if(year === unluckyyear){
//     continue;
//   }
//   console.log(year);
// }

// let i=1;
// while(i<=5){
//   if(i==3){
//     continue;
//   }
//   console.log(i);
//   i++;
// }


// let i=1;
// do{
//   console.log(i);
//   i=i+1;
// }while(i<=5);

// let i=10;
// do{
//   console.log(i);
//   i--;
// }while(i>=1);

// let i=10;
// do{
//   let n= parseInt(prompt("Enter a number check in even number or not"));
//   if(n%2==0){
//     alert("Even number");
//   }else{
//     alert("not even or odd number");
//   }
//   i=10= prompt("Do you want to check any other number? (yes/no)");
//   }while(i=="yes");


// //if
// //1 chek postive number
// let number = 5;

// if (number < 0) {
//     console.log("The number is negative");
// } else {
//     console.log("The number is  negative");
// }

// //2 chek voting age
// let age = 20;
// if (age >= 18) {
//     console.log("You are eligible to vote");
// }


// //3 chek pass marks
// let marks = 75;
// if (marks >= 35) {
//     console.log("Student passed");
// }


// //4 add two numbers
// let a = 10;
// let b = 20;
// let sum = a + b;
// console.log("Sum =", sum);



// //5 chek discont eligibility
// let purchaseAmount = 6000;
// if (purchaseAmount >= 5000) {
//     console.log("You are eligible for a 20% discount");
// }


// //6 check strong password

// let password = "JavaScript@123";
// if (password.length >= 8) {
//     console.log("password is strong enough");
// }


// //if else
//   //7 pass or fail
// let marks = 65;
// if (marks >= 105) {
//     console.log("Pass");
// } else {
//     console.log("Fail");
// }


// // 8 even or odd
// let number = 17;
// if (number % 2 === 0) {
//     console.log("Even number");
// } else {
//     console.log("Odd number");
// }


// //9 adult or minor
// let age = 16;
// if (age >= 18) {
//     console.log("Adult");
// } else {
//     console.log("Minor");
// }

// // 10 operator check
// let a = 20;
// let b = 5;
// let operator = "*";

// if (operator === "+") {
//     console.log(a + b);
// } else if (operator === "-") {
//     console.log(a - b);
// } else if (operator === "*") {
//     console.log(a * b);
// } else if (operator === "/") {
//     console.log(a / b);
// } else {
//     console.log("Invalid operator");
// }


// // 11 shoping discount
// let amount = 4500;
// if (amount >= 5000) {
//     console.log("20% discount available");
// } else {
//     console.log("No discount available");
// }

// //  12 ATM withdrawal
// let balance = 10000;
// let withdrawal = 7000;
// if (withdrawal <= balance) {
//     balance = balance - withdrawal;
//     console.log("Withdrawal successful");
//     console.log("Remaining balance:", balance);
// } else {
//     console.log("Insufficient balance");
// }


// //if else if
// // 13 temperature check
// let temperature = 32;
// if (temperature >= 40) {
//     console.log("Very Hot");
// } else if (temperature >= 30) {
//     console.log("Hot");
// } else if (temperature >= 20) {
//     console.log("Normal");
// } else {
//     console.log("Cold");
// } 


// //14 traffic signal
// let signal = "yellow";
// if (signal === "red") {
//     console.log("Stop");
// } else if (signal === "yellow") {
//     console.log("Get Ready");
// } else if (signal === "green") {
//     console.log("Go");
// } else {
//     console.log("Invalid Signal");
// }


// //15 day of week
//  let day = 3;
//  if (day === 1) {
//      console.log("Monday");
//  } else if (day === 2) {
//      console.log("Tuesday");
//  } else if (day === 3) {
//      console.log("Wednesday");
//  } else if (day === 4) {
//      console.log("Thursday");
//  } else {
//      console.log("Other Day");
//  }


//  // 16 electricity bill 
//  let units = 250;
// if (units <= 100) {
//     console.log("Bill: ₹500");
// } else if (units <= 200) {
//     console.log("Bill: ₹1000");
// } else if (units <= 300) {
//     console.log("Bill: ₹1500");
// } else {
//     console.log("Bill: ₹2500");
// }


// // 17 employee performance
// let performance = 87;

// if (performance >= 90) {
//     console.log("Excellent Performance");
// } else if (performance >= 75) {
//     console.log("Very Good Performance");
// } else if (performance >= 60) {
//     console.log("Good Performance");
// } else if (performance >= 40) {
//     console.log("Needs Improvement");
// } else {
//     console.log("Poor Performance");
// }


// // 18 income tax category
// let income = 850000;
// if (income <= 300000) {
//     console.log("Low Income Category");
// } else if (income <= 600000) {
//     console.log("Medium Income Category");
// } else if (income <= 1000000) {
//     console.log("High Income Category");
// } else {
//     console.log("Very High Income Category");
// }