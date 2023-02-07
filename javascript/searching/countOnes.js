
/**
 * @param {number[]} arr
 * @param {number} N
 * @returns {number}
 */

class Solution {

    countOnes(arr, N)
    {
        //your code here
        let count = 0
        for(let i = 0;i<N;i++){
            if(arr[i]=== 1){
                count++
            }else{
                return count
            }
        }
        return count
    }
}

const sol = new Solution().countOnes([1,1,1,1,1,0,0,0],8)
console.log("sol:: ",sol)