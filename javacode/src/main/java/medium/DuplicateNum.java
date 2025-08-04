package medium;

import java.util.HashMap;
import java.util.Map;

public class DuplicateNum {
    public static void main(String[] args) {
        int[] nums = {1,3,4,2,3};
//        int[] nums = {1,1};
//        int[] nums = {3,1,3,4,2};
//        System.out.println(getDuplicate(nums));
        System.out.println(getDuplicateWithHash(nums));

    }


    static int getDuplicate(int[] nums){
        for (int i = 0; i < nums.length-1; i++) {
            for (int j = i+1; j < nums.length; j++) {
                if (nums[i] == nums[j]){
                    return nums[i];
                }
            }

        }
        return -1;
    }

    static int getDuplicateWithHash(int[] nums){
        Map<Integer, Integer> Hash = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            if (Hash.containsKey(nums[i])){
                return nums[i];
            }else{
                Hash.put(nums[i], 1);
            }
        }
        return -1;
    }
}
