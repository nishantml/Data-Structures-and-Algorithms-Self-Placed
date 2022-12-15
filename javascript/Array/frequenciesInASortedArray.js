function frequenciesInASortedArray(arr){
    const hashMap = {}
    for(let i= 0;i<arr.length;i++){
        if(hashMap[arr[i]]){
            hashMap[arr[i]] = hashMap[arr[i]]+1
        }else{
            hashMap[arr[i]] = 1
        }
    }
    return hashMap
}




console.log(frequenciesInASortedArray([10,10,10,25,30]))
console.log(frequenciesInASortedArray([10,20,30]))