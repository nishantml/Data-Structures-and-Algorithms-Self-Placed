package Coding;

public class CheckIfArrayShorted {
    public static void main(String[] args) {

//        int[] nums = {1,2,3,4,5,6,7};
        int[] nums = {1,0,3,4,5,6,7};
        boolean shorted = checkIfArrayIsShorted(nums);
        System.out.println("shorted:: "+shorted);

    }

    static boolean checkIfArrayIsShorted(int[] nums){
        for (int i = 0; i < nums.length-1; i++) {
            if (!(nums[i]<=nums[i+1])){
                return false;
            }
        }
        return true;

    }
}
