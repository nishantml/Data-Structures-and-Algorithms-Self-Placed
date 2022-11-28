function countDigits(num){
    let count = 0
    while(num>0){
        num = Math.round(num/10)
        console.log("num:: ",num)
        count = count+1
    }
    return count
}



console.log(countDigits(10))