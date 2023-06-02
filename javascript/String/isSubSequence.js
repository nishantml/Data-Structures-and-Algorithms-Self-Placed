
/**
 * @param {string} A
 * @param {string} B
 * @returns {bool}
 */

class Solution{
    isSubSequence(A, B){
        let j = 0
        const strArr = B.split("")
        const subStrArr = A.split("")
        const n = strArr.length
        const m = subStrArr.length
        for(let i = 0;i<n && j< m; i++){
            if(strArr[i] === subStrArr[j]){
                j++
            }
        }

        return j===m

    }
}
