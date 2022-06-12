


    // Closure is a function bound together with its lexical environment
    
        
    function x (){
        let a =7;
        function y(){
            console.log(a);
        }
        return y;
    }

    // let myFunc = x();

    // console.log(myFunc);
    // myFunc();
    
    // myFunc();
    // One more way of looking at the above code is that the function/"method" y in the above case acts 
    // as a getter for the variable a which would not be accesible from outside the function.
    // Upon analysing the above code we see some really interesting things. The function x has been called
    // explicitely. All its local variables should not exist after execution but it is clear that they do
    // still exist and we still have access to them.

    // Let's look at another example
    function makeAdder(x){
        return (y)=>x+y;
    }

    // let add5 = makeAdder(5);
    // console.log(add5);
    // let add10 = add5(10);
    // console.log(add10);


    // Function with its lexical scope bundled together is called closure.

    
    function z(){
        let b = 500;
        function x(){
            let a = 100;
            return function (){console.log(a,b);};
        }
        return x;
    }

    let abc = z();
    console.log(abc()());
    















    




    
