function Palindrome(num){
    let newNum = 0
    const oldNum = num
    while(num>0){
        rem = num%10
        newNum = newNum * 10 + rem
        num = Math.round(num/10)
    }
    if(newNum == oldNum){
        return true
    }else{
        return false
    }
}



console.log(Palindrome(123))

// time complexity -> theta of d -> d is the number digits