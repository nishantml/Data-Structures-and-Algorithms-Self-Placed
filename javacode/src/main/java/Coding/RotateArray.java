package Coding;

import java.util.Arrays;

public class RotateArray {
    public static void main(String[] args) {

        int[] nums = {1,2,3,4,5,6};
        nums = rotateArr(nums);
        System.out.println("nums:: "+ Arrays.toString(nums));
    }

    public static int[] rotateArr(int[] nums){
        int first = nums[0];
        int last = nums[nums.length-1];

        for (int i = 1; i < nums.length; i++) {
            nums[i-1] = nums[i];
        }
        nums[nums.length-1] = first;

        return nums;

    }
}
