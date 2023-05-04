


const mostStr = function(str){
  const strArr = str.split("")
  console.log("strArr:: ",strArr)
  let currentI = 0
  let startStr = strArr[currentI++]
  let longestStr = startStr
  const longestArr = []
  let longestStrLen = 0
  while(currentI <= strArr.length -1){
     if(startStr === strArr[currentI]){
       longestStr += strArr[currentI]
     }else{
       const currLen = longestStr.split("").length
       if(longestStrLen < currLen){
         longestStrLen = currLen
       }
       longestArr.push(longestStr)
       startStr = strArr[currentI]
       longestStr = strArr[currentI]
     }
     currentI++
  }
  console.log(longestStrLen)
  console.log(longestArr)
}

const str = "aabbcccbbdddd"
mostStr(str)