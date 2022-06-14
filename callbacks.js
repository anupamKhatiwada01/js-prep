setTimeout(function (){
    console.log("Timer");
},5000);

// Do the callback's arguments need to be passed seperately in the main function?
// I feel so
function mainFunction(callback,...params){
    console.log(mainFunction.toString() + " is the main function.");
    // Executing the callback in the main function
    // 
    return callback(...params);
}

function logger(message){
    console.log("This is the logger function and "+message+" is the passed argument.");
}

mainFunction(logger,"lundesh");