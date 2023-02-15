
/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number[]}
 */

class Solution {
    //Function to return non-repeated elements in the array.
    printNonRepeated(arr, n)
    {
        let nonRepeatedArr = []
        let Hash = {}
        for(let i = 0;i< n; i++){
            if(Hash[arr[i]]){
                Hash[arr[i]] +=1
            }else{
                Hash[arr[i]] = 1
            }
        }
        console.log(Hash)
        for (const [key, value] of Object.entries(Hash)) {
            if(value === 1){
                nonRepeatedArr.push(key)
            }
        }
        return nonRepeatedArr
    }

    printNonRepeatedSameOrder(arr, n)
    {
        // return the elements in same order as they appear in input array
        let nonRepeatedArr = []
        let Hash = {}
        for(let i = 0;i< n; i++){
            if(Hash[arr[i]]){
                Hash[arr[i]] +=1
            }else{
                Hash[arr[i]] = 1
            }
        }
        // console.log(Hash)
        for(let i = 0;i<n;i++){
            if(Hash[arr[i]] === 1){
                nonRepeatedArr.push(arr[i])
            }
        }
        return nonRepeatedArr
    }
}

// const sol = new Solution().printNonRepeatedSameOrder([1,3,3,3,4],5)
const sol = new Solution().printNonRepeated([3,0,2,2,1,2,3,3],8)
console.log("sol:: ",sol)