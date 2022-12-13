function moveZeroToEnd(arr){
    for(let i = 0;i<arr.length;i++){
        if(arr[i] === 0){
            for(let j = i+1;j<arr.length;j++){
                if(arr[j] != 0){
                    const temp = arr[i]
                    arr[i] = arr[j]
                    arr[j] = temp
                }
            }
        }
    }

    return arr

}

console.log(moveZeroToEnd([1,0,0,3,3,4]))
console.log(moveZeroToEnd([0,0,3,4]))
console.log(moveZeroToEnd([3,0,7,0,8,8]))
console.log(moveZeroToEnd([0,20,0,40]))


