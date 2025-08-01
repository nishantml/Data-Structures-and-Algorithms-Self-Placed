package easy;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class MoveZero {
    public static void main(String[] args) {

//        int[] nums = {1,0,0,12,34,0,1,0};
        int[] nums = {11,0,0,12,34,0,1,10};
        moveZeroToEnd(nums);
    }


    static void moveZeroToEnd(int[] nums) {

        List<Integer> arrList = new ArrayList<>();
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] != 0){
                arrList.add(nums[i]);
            }
        }
        for (int i = 0; i < arrList.size(); i++) {
            nums[i] = arrList.get(i);
        }
        for (int i = arrList.size(); i < nums.length; i++) {
            nums[i] = 0;
        }

        System.out.println("final nums: "+ Arrays.toString(nums));
        
        
        
        
    }
}
