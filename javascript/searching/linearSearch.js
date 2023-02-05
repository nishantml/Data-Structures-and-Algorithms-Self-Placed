/**
 * @param {number[]} arr
 * @param {number} N
 * @param {number} X
 * @return {number}
 */
class Solution {
    search(arr, N, X) {
        for(let i = 0;i< N; i++){
            if(arr[i] === X){
                return i
            }
        }
        return -1
    }
}

const sol = new Solution().search([15,-2,2,-8,1,-8,10,23],8,-8)
console.log("sol:: ",sol)