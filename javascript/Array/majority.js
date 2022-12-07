// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
class Solution {
    // Function to find element with more appearances between two elements in an
    // array.
    majorityWins(arr, n, x, y) {
        let xCount = 0;
        let yCount = 0;

        for(let i = 0;i<arr.length;i++){
            if(arr[i] == x){
                xCount = xCount+1
            }
            if(arr[i] == y){
                yCount = yCount+1
            }
        }


        if(xCount>yCount){
            return x
        }else if(xCount == yCount){
            if(x<y){
                return x
            }else{
                return y
            }
        }else{
            return y
        }
    }
}