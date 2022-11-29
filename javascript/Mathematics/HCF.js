function HCF(a, b){
    let minV = 0
    if(a<b){
        minV = a
    }else{
        minV = b
    }
    while(minV > 0 ){
        if(a%minV == 0 && b%minV == 0){
            break
        }
        minV = minV - 1
    }
    return minV
}

console.log(HCF(10,15))