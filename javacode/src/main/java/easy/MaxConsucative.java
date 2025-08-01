package easy;

public class MaxConsucative {
    public static void main(String[] args) {

        int[] nums = {1,1,1,1,2,1,1,4,1,1,1};

        int count = maxConsucativeOne(nums);
        System.out.println("count:: "+count);

    }


    static int maxConsucativeOne(int[] nums){
        int maxCount = 0;
        int currentCount = 0;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == 1){
                currentCount++ ;
            } else {
                if (currentCount> maxCount){
                    maxCount = currentCount;
                }
                currentCount = 0;
            }
        }
        if (maxCount < currentCount){
            maxCount = currentCount;
        }

        return maxCount;
    }
}
