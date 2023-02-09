

class Pair {
  constructor(first, second) {
    this.first = first;
    this.second = second;
  }
}

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {Pair}
 */

class Solution
{
    //Function to find repeated element and its frequency.
    findRepeating(arr, n)
    {
        let repeatedEle = null
        let count = 1
        for(let i = 0;i< n-1; i++){
            if(arr[i] === arr[i+1]){
                if(!repeatedEle){
                    repeatedEle = arr[i]
                }
                count++
            }
        }
        if(repeatedEle){
            return new Pair(repeatedEle,count)
        }else{
            return new Pair(-1,-1)
        }

    }
}