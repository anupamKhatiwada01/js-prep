/*
  A function along with its lexical environment is called a closure.
  It is the combination of the function and its lexical scope bundled together.
  Even if the function is executed in some other scope and not in its original scope it still remembers its lexical
    environment ie. all its variables etc.
*/

// Eg. of a closure.
function p(){
  let c = 10;

  return function q(){
  // let b=a*10;

  let b=10;
  return function r(){
    // let a =5;
    /*

      If the above line is commented then it while looking for a 
      the function will start searching and when it doesn't find it
      within any user defined function it will search for it in the global            scope.

    

    */
    console.log(a,b,c);
  }
  
}
  
}
let a = 15;

p()()()


