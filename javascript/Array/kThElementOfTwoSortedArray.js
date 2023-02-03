
/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @returns {number}
 */

class Solution {
    kthElement(A,B,n,m,k){
        //code here
        let startA = 0
        let startB = 0
        const arr = []
        while (startA < n && startB < m ){
            if(A[startA] < B[startB]){
                arr.push(A[startA])
                startA++
            }else{
                arr.push(B[startB])
                startB++
            }
        }

        while(startA < n){
            arr.push(A[startA])
            startA++
        }
        while(startB < m){
            arr.push(B[startB])
            startB++
        }
        return arr[k-1]
    }
}


const sol = new Solution().kthElement([9 ,11, 19, 26, 32, 34, 45, 50, 56, 58, 61,88],[1, 5, 5, 7, 9, 9, 11, 13, 13, 15, 18, 19, 19, 20, 21, 28, 28, 28, 29, 29, 30, 31, 39, 40, 44, 47, 47, 50, 52, 56, 57, 61, 61, 61, 66, 68, 69, 70, 70, 74, 75, 75, 77, 78, 79, 80, 82, 85, 87, 89, 90, 90, 90, 92, 93, 95, 97, 98, 98, 100],12,60,64)
console.log("sol:: ",sol)