/**
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement = function(nums) {
    const n = nums.length
    if(n == 1){
        return 0
    }
    if(nums[0] >= nums[1]){
        return 0
    }
    if(nums[n-1] >= nums[n-2]){
        return n-1
    }

    for(let i =0;i<n-1;i++){
        if(nums[i] >= nums[i-1] && nums[i] >= nums[i+1]){
            return i
        }
    }
};

findPeakElement([1,2,1,3,5,6,4])