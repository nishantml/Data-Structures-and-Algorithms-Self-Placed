package medium;

import java.sql.Array;
import java.util.*;

public class MajorityElements {
    public static void main(String[] args){

//        int[] nums = {1,2,2,3,2};
        int[] nums =  {11,33,33,11,33,11};
        List<Integer> res = getMajority(nums);
        System.out.println(res);

    }


    static List<Integer> getMajority(int[] nums) {
        List<Integer> majorityEle = new ArrayList<>();
        Map<Integer, Integer> hash = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            if (hash.containsKey(nums[i])) {
                hash.put(nums[i], hash.get(nums[i]) + 1);
            }else {
                hash.put(nums[i], 1);
            }
        }
        System.out.println(hash);
        // Get all keys
        Set<Integer> keys = hash.keySet();
        int nth = nums.length/3;
        for (int key : keys) {
            if (nth < hash.get(key) ){
                majorityEle.add(key);
            }
        }

        return majorityEle;




    }
}
