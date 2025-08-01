package easy;

import Coding.RotateArray;

import java.util.Arrays;

public class RotateArrayN {

    public static void main(String[] args) {
        int[] nums = {1,2,3,4,5,6};
        int times = 3;
        rotateArrayNTimes(nums,times);

    }

    static void rotateArrayNTimes(int[] nums, int times) {
        for (int i = 0; i < times; i++) {
            RotateArray.rotateArr(nums);
            System.out.println("nums: "+ Arrays.toString(nums));
        }
    }


}
