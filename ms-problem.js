// Flatten an object
let sampleObj = {

  name:"dsfsf",
  age:"232",
  type: "alien",
  address:{
    // For each key we go till we find a leaf
    // Once we find a leaf we go back one step and work on the next key

      street:"dfsffref",
      corner:{
        dfsfns:"fdsjf",
        dfgdfg:{
          rfg:"456"
        }
      }
  },
  money:{
    fdsfs:{
      fdsgfd:"dfgdg",
    },
    rat:"mouse"
  }
}



// Going the tree route and trying to reach the end of each branch has proved to be a very difficult task
// We need to follow a different approach

const isObject = (value) => {
  return value && typeof value === "object" && !Array.isArray(value);
};

function container(obj){


  let store={};
  function x (object,s=''){
    // let arr = [];
    for(let key in object){
      // We cant keep a global keystring
      // let value = object[key];
      if(isObject(object[key])){
        x(object[key],s?s+"."+key:key);
      }else{
        // We are not storing anything in this question
        // We are using the external scope and adding a degree of abstraction to get our work done
        // This is not a pure function as it pollutes the global/outer scope.
        // We need to change this impure recursive function into a pure recursive function
        store[s?s+"."+key:key]=object[key];
        
      }
    }

  }
  x(obj);
  return store;
  
}


console.log(container(sampleObj))
// Solves the problem but its not very clean. I dont like it.