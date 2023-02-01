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

    // optimal solution
    checkOptimalSol(A,B,N){
        const AHash = {}
        for(let i = 0;i<N;i++){
            if(AHash[A[i]]){
                AHash[A[i]] = AHash[A[i]] + 1
            }else{
                AHash[A[i]] = 1
            }
        }
        for(let i = 0;i<N;i++){
            if(AHash[B[i]]){
                AHash[B[i]] = AHash[B[i]] - 1
            }
        }
        for (let key in AHash) {
            if(AHash[key] != 0){
                return 0
            }
        }
        return 1


    }

}

const ins = new Solution()
const sol = ins.check([2,2,5,4,0],[2,4,5,0,1],5)
const OptimalSol = ins.checkOptimalSol([2,2,5,4,0],[2,4,5,0,1],5)
console.log("sol:: ",sol)
console.log("OptimalSol:: ",OptimalSol)