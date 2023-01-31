class Solution {
    //Function to check if two arrays are equal or not.
    // bruteforce approach
    check(A,B,N){
        // code here
        A.sort()
        B.sort()
        console.log(A)
        console.log(B)
        for(let i = 0;i<N;i++){
            if(A[i] !== B[i]){
                return 0
            }
        }
        return 1
    }

}

const sol = new Solution().check([2,2,5,4,0],[2,4,5,0,1],5)
console.log("sol:: ",sol)