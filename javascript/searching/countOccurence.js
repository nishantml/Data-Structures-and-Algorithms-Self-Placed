
/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} k
 * @returns {number}
 */

class Solution
{
    // todo Count More than n/k Occurences
    //Function to find all elements in array that appear more than n/k times.
    countOccurence(arr, n, k)
    {
        //your code here
        let count = 0
        const kVal = Math.floor(n/k)
        const Hash = {}
        for(let i = 0;i< n;i++){
            if(Hash[arr[i]]){
                Hash[arr[i]] += 1
            }else{
                Hash[arr[i]] = 1
            }
            if(Hash[arr[i]] === kVal+1){
                count++
            }
        }
        //your code here
        return count
    }
}

const sol = new Solution().countOccurence([1, 1, 2 ,2, 3],5,3)
// const sol = new Solution().countOccurence([3,1,2,2,1,2,3,3],8,4)
console.log("sol:: ",sol)