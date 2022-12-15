/*
Input:
N = 5, D = 2
arr[] = {1,2,3,4,5}
Output: 3 4 5 1 2
Explanation: 1 2 3 4 5  when rotated
by 2 elements, it becomes 3 4 5 1 2.
*/

// Method 1
function rotateArray(arr,D){
    const leftS = arr.slice(0,D)
    const rightS = arr.slice(D,arr.length)
    return rightS.concat(leftS)
}

console.log(rotateArray([1,2,3,4,5],2))
console.log(rotateArray([2,4,6,8,10,12,14,16,18,20],3))




/*
 Naive soultion
*/

function leftRotateAnArrayByOne(arr){
    const firstELE = arr[0]
    for(let i=1;i<arr.length;i++){
        arr[i-1] = arr[i]
    }
    arr[arr.length-1] = firstELE
    return arr
}


function leftRotateArray(arr,d){
    for(let i = 0;i<d;i++){
        arr = leftRotateAnArrayByOne(arr)
    }
    return arr
}

console.log(leftRotateArray([1,2,3,4,5],3))
console.log(leftRotateArray([10,11,12,13,14],2))


