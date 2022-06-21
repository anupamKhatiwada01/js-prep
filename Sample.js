// function printName(homeTown){
//   console.log("Fullname: "+this.firstname+" "+this.lastname+" "+homeTown)
// }

// let obj = {
//   firstname:"Anupam",
//   lastname:"khatiwada"

// }

// // printName.call(obj,["guwahati"])
// // printName.apply(obj,["guwahati"])
// let binder = printName.bind(obj,"guwahati")
// // binder()


// let m= "jbkjdfbksdnfkjn";
// function removeDuplicates(s){
//   let returnString="",map={};
//   for(let i=0;i<s.length;i++){
//     if(!map[s[i]]) {
//       map[s[i]]=true;
//       returnString+=s[i]
//     }
//   }
//   return returnString;
// }

// console.log(1==="1");



let arr = ["abc", "xyz"];

let object = {
  name: "abc",
  city: "ghy",
  getIntro: function() {
    console.log(this.name + " " + this.city);
  }
}



function fun() {
  console.log("This is inside the fun function: " + this.name + " " + this.city);
}


// Prototypal inheritance in javascript means one object trying to access the methods and properties of another object
Array.prototype.fun = fun;
    // object.fun();




