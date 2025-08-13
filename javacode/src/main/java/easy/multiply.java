package easy;

public class multiply {
    public static void main(String[] args) {
        int a = 3;
        int b = 10;

        System.out.println(multiplyNums(a,b));
    }

    // without using *
    static int multiplyNums(int a, int b){
        int multiple = 0;
        for (int i = 0; i < b; i++) {
            multiple+= a;
        }

        return multiple;
    }
}
