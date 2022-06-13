/*
    Let's look at something called a constructor function.
*/



function abc(){
  let counter=100;
  this.incrementCounter=function(){
    counter++;
    console.log(counter);
  }
  this.decrementCounter =function(){
    counter--;
    // console.log(counter);
  }
  this.displayCounter=function(){
    return counter;
  }
}

let t=new abc();
t.showCounter= function(){
  console.log("the current counter value is "+this.displayCounter());
}
t.incrementCounter();
t.showCounter();