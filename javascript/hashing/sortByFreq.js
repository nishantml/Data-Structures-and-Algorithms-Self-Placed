
/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number[]}
 */

class Solution {
    //Function to sort the array according to frequency of elements.
    sortByFreq(arr, n){
        const newArr = []
        let Hash = {}
        for(let i = 0;i< n; i++){
            if(Hash[arr[i]]){
                Hash[arr[i]] +=1
            }else{
                Hash[arr[i]] = 1
            }
        }
        var keys = Object.keys(Hash);
        keys.sort(function(a, b) {
            return Hash[b] - Hash[a]
        });
        // console.log(keys)
        // console.log(Hash)
        for(let i = 0;i<keys.length;i++){
            const keyLen = Hash[keys[i]]
            // console.log("keyLen:: ",keyLen, keys[i])
            for(let j = 0;j < keyLen;j++){
                newArr.push(keys[i])
            }
        }
        return newArr
    }
}

const sol = new Solution().sortByFreq([9,9,9,2,5],5)
// const sol = new Solution().sortByFreq([5,5,4,6,4,6,6],7)
console.log("sol:: ",sol)