//User function Template for javascript


// You need to insert the given element at the given index.
// After inserting the elements at index, elements
// from index onward should be shifted one position ahead
// You may assume that the array already has sizeOfArray - 1
// elements.
/**
 * @param {number[]} arr
 * @param {number} sizeOfArray
 * @param {number} index
 * @param {number} element
 */
class Solution {
    insertAtIndex(arr,sizeOfArray,index,element){

        for(let i=arr.length-1;i>=index;i--){
            arr[i+1] = arr[i]
        }
        arr[index]=element
    }
}

const sol = new Solution()
console.log(sol.insertAtIndex([1,2,3,4,5],6,3,90))