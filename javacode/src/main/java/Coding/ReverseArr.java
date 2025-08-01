package Coding;

import java.util.Arrays;

public class ReverseArr {

    public static void main(String[] args) {
        int[] nums = {1,2,3,4,5,6,7,8};
        int[] reversed = getReversedArr(nums);
        System.out.println("reversed:: "+ Arrays.toString(reversed));
    }

    static int[]  getReversedArr(int[] nums) {

        int start = 0;
        int last = nums.length -1;
        int mid = nums.length / 2;
        System.out.println("mid:: "+mid);
        for (int i = 0; i < mid-1; i++) {
            int temp = nums[start];
            nums[start] =nums[last];
            nums[last] = temp;
            start++;
            last--;
        }
        return nums;
    }


}
