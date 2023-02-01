
//User function Template for javascript

/**
 * @param {number[]} array
 * @param {number} n
 * @returns {number}
 */

class Solution{
    // bruteforce approach
    MissingNumber(array,n){
        //code here
        for(let i = 1;i<=n;i++){
            if(!array.includes(i)){
                return i
            }
        }
    }
}