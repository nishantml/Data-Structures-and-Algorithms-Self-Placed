package medium;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class FindMissingRepeatingNumbers {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 6, 7, 5, 7};
//        int[] arr = {3, 5, 4, 1, 1};

        List<Integer> output = findMissingRepeatingNumbers(arr);
        System.out.println(output);
    }
    static List<Integer> findMissingRepeatingNumbers(int[] nums){
        List<Integer> arr = new ArrayList<>();

        Arrays.sort(nums);
        System.out.println(Arrays.toString(nums));
        int missing =  0;
        int repeat = 0;
        for (int i = 0; i < nums.length-1; i++) {
            if (nums[i] == nums[i+1]){
                repeat = nums[i];
            }
        }
        int maxNum = nums[nums.length-1];
        int currentNum = 1;
        while (currentNum <= maxNum){
            boolean exists = false;
            for (int i = 0; i < nums.length; i++) {
                if (currentNum == nums[i]) {
                    exists = true;
                    break;
                }
            }
            if (!exists){
                missing =  currentNum;
            }
            currentNum++;
        }

        System.out.println(repeat);
        System.out.println(missing);
        arr.add(repeat);
        arr.add(missing);
        return arr;

    }


}

