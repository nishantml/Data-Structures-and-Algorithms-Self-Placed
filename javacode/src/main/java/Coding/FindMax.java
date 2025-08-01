package Coding;

public class FindMax {
    public static void main(String[] args) {

        int[] nums = {2,1,3,11,45,1,2};
        int maxNum = getMaxFromArray(nums);
        System.out.println("maxNum:: "+maxNum);

    }

    static int getMaxFromArray(int[] nums){
        int maxNum = nums[0];
        for (int i = 1; i < nums.length; i++) {
           if (nums[i] > maxNum) {
               maxNum = nums[i];
           }
        }
        return maxNum;
    }
}
