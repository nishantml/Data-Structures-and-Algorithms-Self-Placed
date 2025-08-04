package medium;

import java.util.Arrays;

public class SortZeroOneTwo {
    public static void main(String[] args) {

        int[] nums = {1, 0, 2, 1, 0};
        sortZeroOneTwo(nums);
        System.out.println(Arrays.toString(nums));
    }

    static void sortZeroOneTwo(int[] nums){
        Arrays.sort(nums);
    }
}
