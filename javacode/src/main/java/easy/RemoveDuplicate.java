package easy;

import java.util.Arrays;

public class RemoveDuplicate {
    public static void main(String[] args) {
            int[] nums = {1,1,2,5,6,7,7,7,7,8,9,10};
            int uniqueCount = removeDuplicate(nums);
            System.out.println(uniqueCount);
    }

    static int removeDuplicate(int[] nums) {

        int uniqueCount = 0;
        for (int i = 0; i < nums.length-1; i++) {
            if (nums[i] != nums[i+1]) {
//                nums[i] = -1;
                  uniqueCount++;
            }
        }
        System.out.println(Arrays.toString(nums));
        return uniqueCount;
    }

}
