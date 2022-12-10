function isArraySorted(arr){
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<=arr[i+1]){
            continue
        }else{
            return false
        }
    }
    return true

}

console.log(isArraySorted([1,2,3,4]))
console.log(isArraySorted([1,0,3,4]))
console.log(isArraySorted([7,7,7]))
console.log(isArraySorted([7,20,30,10]))


