
/**
 * @param {number} N
 * @param {number[]} arr
 * @param {number} X
 * @returns {number}
 */

class Solution {

    leftIndex(N, arr, X)
    {
        for( let i = 0; i < N; i++ ){
            if(arr[i] === X){
                return i
            }
        }
        return -1
    }
}

const sol = new Solution().leftIndex(7,[10,20,20,20,20,20,20],20)
console.log("sol:: ",sol)