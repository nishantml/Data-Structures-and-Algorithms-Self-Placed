function FactorialRecursive(n){
    if(n == 0) return 1
    return n * FactorialRecursive(n-1)
}

function TrailingZerosinFactorial(num){
    let count = 0
    while(num > 0 ){
        const rem = num % 10
        num = Math.round(num/10)
        if(rem == 0){
            count = count+1
        }
    }
    return count
}

const fact = FactorialRecursive(10)
console.log("fact:: ",fact)
console.log(TrailingZerosinFactorial(fact))