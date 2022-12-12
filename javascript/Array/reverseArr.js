function reverseArr(arr){
    let start = 0
    let end = arr.length-1
    while (start < end){
        const temp = arr[start]
        arr[start]= arr[end]
        arr[end] = temp
        start += 1
        end -= 1
    }
    return arr

}

console.log(reverseArr([1,2,3,4]))
console.log(reverseArr([1,0,3,4]))
console.log(reverseArr([7,7,7]))
console.log(reverseArr([7,20,30,10]))


