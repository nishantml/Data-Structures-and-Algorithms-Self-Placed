function removeDuplicateFromSortedArr(arr){
    const temp = []
    for(let i = 0;i<arr.length-1;i++){
        if(arr[i] !== arr[i+1]){
            temp.push(arr[i])
        }
    }
    temp.push(arr[arr.length-1])
    return temp

}

console.log(removeDuplicateFromSortedArr([1,2,2,3,3,4]))
console.log(removeDuplicateFromSortedArr([1,1,3,4]))
console.log(removeDuplicateFromSortedArr([3,7,7,7,8,8]))
console.log(removeDuplicateFromSortedArr([7,20,30,40]))


