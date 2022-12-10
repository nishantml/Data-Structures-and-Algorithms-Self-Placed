function largestEle(arr){
    let largest = 0
    let sLargest = -1
    for(let i=0;i<arr.length;i++){
        if(arr[i]>arr[largest]){
            sLargest = largest
            largest = i
        }else if(arr[i] !== arr[largest]){
            if(sLargest == -1 || arr[i]>arr[sLargest])
                sLargest = i
        }
    }
    console.log("sLargest:: ",arr[sLargest]?arr[sLargest]:null)
    console.log("largest:: ",arr[largest]?arr[largest]:null)
}


largestEle([10,2,1,11,13,11,13,2])
largestEle([7,7,7])
largestEle([2,1,2])