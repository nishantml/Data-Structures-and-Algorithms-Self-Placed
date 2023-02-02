
//User function Template for javascript



/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} k
 * @returns {number}
 */

class Solution{
    firstElementKTime(arr,n,k){
        const Hash = {}
        for(let i=0;i<arr.length;i++){
            if(Hash[arr[i]]){
                Hash[arr[i]] = Hash[arr[i]] + 1
            }else{
                Hash[arr[i]] = 1
            }
            if(Hash[arr[i]] == k){
                return arr[i]
            }
        }
        return -1
    }
}

const sol = new Solution().firstElementKTime([4 ,2, 2, 2, 3, 4, 4, 4, 3, 2],10,3)
console.log("sol:: ",sol)
