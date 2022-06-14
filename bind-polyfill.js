
        function addition(a) {
            return function (b) {
                return function (c) {
                    return function (d) {
                        return isNaN((a+b+c+d)%1)?"Not a number":a+b+c+d;
                    }
                }
            }  
          }


        //   Very simeple polyfill for bind  without using call or apply
            Function.prototype.myBind = function(...args){

            // We know this function ie the function that calls it will have this as its scope
            // let environment = this;
            // console.log("This.is the scope:",this);
            // What if some function takes a parameter
            let newArgs = args.slice(1);
            function myBindTwo(someObject,someFunction){

                for(let i in someObject){
                    this[i]=someObject[i];
                }

                // We need access to the agruments that were passed by the user in some function
                // The arguments will form a closure with the function 
                // We need to find its arguments
                return someFunction(...newArgs);
            }

            return myBindTwo(args[0],this);

          }


        //   function myBindTwo(someObject,someFunction){

        //         for(let i in someObject){
        //             this[i]=someObject[i];
        //         }
        //         return someFunction();
        //   }

          let name = {
            firstname:"abc",
            lastname:"xyz"
        }


        let printName = function(hometown,state){
            console.log(this.firstname+" "+this.lastname+"  hometown: "+hometown+ " state : "+state);
        }

        // myBindTwo(name,printName);
          printName.myBind(name,"khalasiline","assam");


            // Function.prototype.myBind=function(...args){
            //     let someFunction = this;
            //     console.log(args);
            //     // We need to make the properties of someObject visible to some function and "bind" their properties together

            //     return function(){

            //     }
            // }







    //    let iife =  function (){
           
    //         let xyz="oolalaa";
    //         return function (){

    //             let abc=xyz;
    //             console.log(abc);
    //             return abc;

    //         }

    //     }
    //     let message = iife();

    //     console.log(message())
