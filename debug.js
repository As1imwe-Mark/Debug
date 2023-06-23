// summation of all odd fibonacci numbers

function fibonacci(num){
  let fibo=[1,1];
  let Next=fibo[fibo.length-2] + fibo[fibo.length-1];
  while(Next<=num){
    fibo.push(Next);
    Next=fibo[fibo.length-2] + fibo[fibo.length-1];
  }
  return fibo.filter(e=>e/2==0).reduce((x,y)=>x+y)
}


// fibonacci(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.