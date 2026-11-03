// 1) Types of Errors in node js--
/*
i) SyntaxError-eg- missing semicolon-
ii) LogicalError- eg- wrong formula produce incorrect result
iii)RuntimeError- eg-due to invalid operations
*/


// 1 eg- of syntax errors-

// console.log("i am don";  -missing parenthesis
// let msg="good job dk  -missing closing string
// let new = 5;  -- new is our reserve keyword
// const data; -- const needs initialization


// 2 types of Runtime error --VvIMP--

//  console.log(x);  -- Refrence Errors x is not define
// let num=10;
// num() --- TypeError num is not a function

// invalid json parse also give syntax error-
// let data = JSON.parse({ name: "dk" })
// console.log(data);

// fs.writeFileSynce("notExistFile.txt") -- file not found Errors


// 3 Logical Errors- tough to detect
// eg-1
/*
let x = 2;
if (x = 5) {  // we are using assignment operator instead of comparison operator
    console.log("the value of x is 10");

} */
// eg-2

let arr = [10, 20, 30, 40];
for (let i = 0; i <= arr.length; i++) {
    console.log(arr[i]); // lastly it prints undefined because <= condition includes last element also 

}
// eg-3

let num = "10";
console.log(num + 5); //expected result=15 but output will be-"105"




// Debugger to debug the Logical Error