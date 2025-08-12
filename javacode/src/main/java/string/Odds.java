package string;

public class Odds {
    public static void main(String[] args) {
//        String num = "39427";
        String num = "4206";
        String[] nums = num.split("");
        int largestOdd = 1;
        for (int i = 0; i < nums.length; i++) {
            int nn = Integer.parseInt(nums[i]);
            if (nn % 2 != 0){
                if (largestOdd < nn){
                    largestOdd = nn;
                }
            }
        }
        System.out.println(" :: "+largestOdd);
    }
}
