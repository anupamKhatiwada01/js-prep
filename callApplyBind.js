let name  = {
  firstname:"abc",
  lastname:"xyz",
  // printFullName: function(){
  //   console.log(this.firstname+" "+this.lastname);
  // }
}


let printFullName  =  function(hometown,money,bitches){
    console.log(this.firstname+" "+this.lastname + " "+hometown+" "+money+" "+bitches);
}

// name.printFullName();

let name2 = {
  firstname:"sachin",
  lastname:"tendulkar"
}

// name.printFullName.call(name2);
// The above call function lets one object borrow methods from other object
// printFullName.call(name2, "guwahati",5000,100);
// The only difference between call and apply method is the way arguments are passed
// printFullName.apply(name2,["lasuda",5000000,799])

// Lets start with the bind method
console.log(printFullName.bind(name2,"lasuda",5000,100)());
// The above function return a fucntion which can be invoked later unlike call and appy which return a value then and there




















