function largestElementInAnArray(arr) {
    let lar = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]>lar){
            lar = arr[i]
        }
    }
    return lar
}

console.log("largestElementInAnArray:: ",largestElementInAnArray([34,1,22,3,45,200,1]))