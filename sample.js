// function sum(a){
//   let total = 0;
//   if(!arguments.length) return total;
//   return sum.bind();
// }
// This is a pretty straight forward problem
// The issue with the closure pattern is that sometimes it is slightly difficult to understand although
// it tends to be quite intuitive
// function adder(a){
//   return function(b){
//     // if(b) return adder(a+b);
//     return b?adder(a+b):a;
//   }
// }
// console.log(adder(1)(2)(3)())



// function sum(a){
//   return function (b){
//     return b?sum(a+b):a;
//   }
// }

let sum = (a)=>(b)=>b?sum(a+b):a;


// console.log(sum(1)(2)(5)())


// Lets do some asynchronous work now and move back to interview questions in some time




// Promises chaining
// Lets reutrn to the previous problem raised in the callback section
// We have a sequence of asynchronous tasks to be performed one after another


// Promise chaining
// new Promise(function(resolve,reject){
//   setTimeout(()=>resolve(1),1000);
// }).then(function(result){
//   // alert(result);
//   // console.log(result,result*2);
//   return result*2;
// }).then(function(result){
//   console.log(result*2)
//   return result*2;
// })



// new Promise((resolve,reject)=>{
//   setTimeout(()=>resolve(10),2000);
// }).then((result)=> new Promise((resolve,reject)=>{
//   resolve(result*2)
// }).then((result)=>result*3)).then((result)=>{
//   result*=5;
//   console.log("This is the reult in the chain :",result)
// })
// Returning promises allows us to build chains of asynchronous  actions




































