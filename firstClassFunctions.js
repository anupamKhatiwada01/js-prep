// Let's begin by understanding some of our fundamental terminologies

// This will work because the a function decalred as a function statement will be hoisted.
functionStatement();


// Function statement
function functionStatement(x){
    console.log(x);

    console.log("*******************Function Statement*******************************");

    console.log("This way of declaring functions using function keyword which are not anononymous is called a function statement");
    console.log("Function statements and function declarations are the same thing");
    console.log("These functions are hoisted");

    console.log("*******************************************************************");

}

// function a(){}
// This will not work because the below function is not hoisted
// functionExpression();




// Function expression
let functionExpression = function xyz(){

    console.log(xyz);

    console.log("*****************Function Expression*******************************");


    console.log("This way of creating functions by way of assigning them to varaibles is called a function expression");
    console.log("These functions will not be hoisted");

    console.log("*******************************************************************");



}

// This will break the code
// It did not break it way anonynous function statement did
// 
// xyz()

// This will work
functionExpression();


// Anonymous functions
// According to ECMAscript specification a function statement must have a name ie it cannot be anonymous

// Anonymous functions are used in places where functions are used as values.
// This will immidetly break the program.
// function (){}


// First class functions
// When functions are treated as values, passed into other functions and returned from other functions
// First class citizens


// Arrow functions

















