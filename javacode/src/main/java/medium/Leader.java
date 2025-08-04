package medium;

import java.util.ArrayList;
import java.util.List;

public class Leader {
    public static void main(String[] args) {

//        int[] nums = {1, 2, 5, 3, 1, 2};
        int[] nums = {-3, 4, 5, 1, -4, -5};
        List<Integer> leaders = getLeaders(nums);
        System.out.println(leaders);
    }



    static List<Integer> getLeaders(int[] nums){
        List<Integer> leaders = new ArrayList<>();
        for (int i = 0; i < nums.length - 1; i++) {
            boolean isLeader = true;
            for (int j = i+1; j < nums.length; j++) {
               if (nums[i] < nums[j]){
                   isLeader = false;
                   break;
               }
            }
            if (isLeader) {
                leaders.add(nums[i]);
            }
        }
        leaders.add(nums[nums.length-1]);
        System.out.println(leaders);
        return leaders;
    }
}
