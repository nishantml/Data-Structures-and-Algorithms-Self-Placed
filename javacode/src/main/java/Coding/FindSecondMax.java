package Coding;

public class FindSecondMax {

    public static void main(String[] args) {

        int[] nums = {2,1,31,11,45,1,2};
        int maxNum = getSecondMaxFromArray(nums);
        System.out.println("maxNum:: "+maxNum);

    }

    static int getSecondMaxFromArray(int[] nums){
        int maxNum = nums[0];
        int secondMax = nums[1];
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] > maxNum) {
                secondMax = maxNum;
                maxNum = nums[i];
            }
        }
        return secondMax;
    }
}
