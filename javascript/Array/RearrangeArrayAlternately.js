class Solution {
    //Function to check if two arrays are equal or not.
    /**
     * @param {number[]} arr
     * @param {number} n
     */
    // bruteforce approach
    rearrange(arr, n){
        // code here
        let start = 0;
        let end = n - 1
        const newArr = []
        while (start < end){
            newArr.push(arr[end--])
            newArr.push(arr[start++])
        }
        console.log("new ", newArr)
    }
}

const sol = new Solution().rearrange([1,2,3,4,5,6],6)
console.log("sol:: ",sol)