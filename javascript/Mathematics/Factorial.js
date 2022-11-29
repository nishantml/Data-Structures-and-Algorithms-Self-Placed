function Factorial(n){
    let fact = 1
    for(let i = 2;i<=n;i++){
        fact = fact * i
    }
    return fact
}

console.log(Factorial(3))


// Method 2
function FactorialRecursive(n){
    if(n == 0) return 1
    return n * FactorialRecursive(n-1)
}

console.log(FactorialRecursive(3))