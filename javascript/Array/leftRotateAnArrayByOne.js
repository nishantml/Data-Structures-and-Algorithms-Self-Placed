function leftRotateAnArrayByOne(arr){
    const firstELE = arr[0]
    for(let i=1;i<arr.length;i++){
        arr[i-1] = arr[i]
    }
    arr[arr.length-1] = firstELE
    return arr
}

console.log(leftRotateAnArrayByOne([1,2,3,4,5]))
console.log(leftRotateAnArrayByOne([2,4,6,8,10,12,14,16,18,20]))


