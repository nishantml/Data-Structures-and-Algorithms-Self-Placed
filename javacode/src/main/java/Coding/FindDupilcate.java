package Coding;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class FindDupilcate {
    public static void main(String[] args) {
        int[] nums = {3,2,5,6,7,3,2,1,1};
//        List<Integer> duplicates = getDuplicates(nums);
        List<Integer> duplicates = getDuplicatesHash(nums);
        System.out.println("duplicates:: "+ duplicates);

    }
    static List<Integer> getDuplicates(int[] nums){
        List<Integer> result = new ArrayList<>();

        for (int i = 0; i < nums.length; i++) {
            int count = 0;
            for (int j = 0; j < nums.length; j++) {
                if (nums[i] == nums[j]) {
                    count++;
                }
            }
            if (count == 2) {
                if (!result.contains(nums[i])) {
                    result.add(nums[i]);
                }
            }
        }
        return result;
    }

    static List<Integer> getDuplicatesHash(int[] nums){
        List<Integer> result = new ArrayList<>();
        HashMap<Integer, Integer> hashMap = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            if(hashMap.containsKey(nums[i])) {
                hashMap.put(nums[i], hashMap.get(nums[i])+1);
            }else{
                hashMap.put(nums[i], 1);
            }
        }
        System.out.println(hashMap);

        for (Integer key : hashMap.keySet()){
            if (hashMap.get(key) > 1){
                result.add(key);
            }
        }

        return result;
    }
}
