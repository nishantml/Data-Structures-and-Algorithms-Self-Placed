/*
Naive Method
 */

function LeadersInAnArray(arr){
    const newA = []
    for(let i= 0;i<arr.length;i++){
        let isLeader = true
        for(let j = i+1;j<arr.length;j++){
            if(arr[i]<arr[j]){
                isLeader = false
                break
            }
        }
        if(isLeader){
            newA.push(arr[i])
        }
    }
    return newA

}

console.log(LeadersInAnArray([16,17,4,3,5,2]))
console.log(LeadersInAnArray([1,2,3,4,0]))