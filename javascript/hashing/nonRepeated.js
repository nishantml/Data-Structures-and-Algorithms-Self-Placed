
/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
 */

class Solution {
    //Function to return the count of non-repeated elements in the array.
    countNonRepeated(arr, n)
    {
        let count = 0
        let Hash = {}
        for(let i = 0;i< n; i++){
            if(Hash[arr[i]]){
                Hash[arr[i]] +=1
            }else{
                Hash[arr[i]] = 1
            }
        }
        for (const [key, value] of Object.entries(Hash)) {
            console.log(`${key}: ${value}`);
            if(value === 1){
                count++
            }
        }
        return count

    }
}

// const sol = new Solution().countNonRepeated([1,3,3,3,4],5)
const sol = new Solution().countNonRepeated([3,0,2,2,1,2,3,3],8)
console.log("sol:: ",sol)