/**
 * @param {number[]} arr
 * @param {number} N
 * @param {number} K
 * @returns {number}
 */

class Solution {

    searchInSorted(arr, N, K)
    {
        let start = 0
        let end = N - 1
        while(start<=end){
            const mid = Math.round(start+end/2)

            if(arr[mid] === K){
                return 1
            }

            if(arr[mid] > K){
                end = mid - 1
            }else{
                start = start + 1
            }
        }
        return -1
    }
}


const sol = new Solution().searchInSorted([1,2,3,4,6],5,6)
console.log("sol:: ",sol)