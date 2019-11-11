/*
 Given a number N return the index value of the Fibonacci sequence.
 Ex: fibo(6)  // return 8;
 Ex: fibo(10) // return 55;

 Fibonacci rules:
    F_{0}=0, F_{1}=1,
    F_{n}=F_{n-1}+F_{n-2}

*/

// shortest solution
function fibonacciInOneLine(num) {
    // the same function written in a cleaner way 
    return num < 2 ? num : fibonacci(num-1) + fibonacci(num-2);

}

// easier solution to understand
function fibonacci(num){
    var myArray = [];
    // according to fibonacci rules, the value for 0 is 0 and for 1 is 1
    // so we are storing for index 0, value 0 and for index 1, value 1
    myArray[0] = 0;
    myArray[1] = 1;

    // so if the number given by the user is less than 2 (considering that
    // the user will not give negative values) then return the value already
    // stored in lines 24 or 25
    if (num < 2){
        return myArray[num];
    } else {
    // if the number given by the user is greater or equal with 2, then
    // we should apply the fibonacci rule (current number is the sum of the 
    // previous two values)
    // so we are iterating from 2 until the number given by the user, and we
    // are storing the value of current index by adding the last two values from
    // the array (e.g. myArray[2] = myArray[1] + myArray[0] which means  that 
    // myArray[2] = 1 + 0 = 1; because myArray[1] = 1 - check line 25 and 
    // myArray[0] = 0 - check line 24)
        for (let i = 2; i <= num; i++){
            myArray[i] = myArray[i-1] + myArray[i-2];
        }
        // after the array is built, return the value for the index number given by user
        return myArray[num];
    }

}


console.log(fibonacci(10));

console.log(fibonacciInOneLine(10));