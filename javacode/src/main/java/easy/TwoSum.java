package easy;

import java.util.Arrays;

public class TwoSum {
    public static void main(String[] args) {

        int[] nums = {1, 6, 2, 10, 3};
        int target = 16;

        int[] sumPair = twoSum(nums, target);
        System.out.println(Arrays.toString(sumPair));

    }

    static int[]  twoSum(int[] nums, int target) {
        for (int i = 0; i < nums.length-1; i++) {
            for (int j = i+1; j < nums.length; j++) {
                int sum = nums[i] + nums[j];
                if (sum == target){
                    return new int[] {i,j};
                }
            }

        }
        return new int[] {};
    }
}
