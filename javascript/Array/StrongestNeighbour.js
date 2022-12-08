
/**
 * @param {number} sizeOfArray
 * @param {number[]} arr
 */
class Solution {
    // Function to find maximum for every adjacent pairs in the array.
    maximumAdjacent(sizeOfArray, arr){
        const newArr = []
        for(let i=0;i<arr.length-1;i++){
            let currentV = arr[i]
            if(arr[i] <= arr[i+1]){
                currentV = arr[i+1]
            }
            newArr.push(currentV)
        }
        console.log(...newArr)
    }
}