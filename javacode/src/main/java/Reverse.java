public class Reverse {
    public static void main(String[] args) {

        String s = "example   good a";
//        String s = "the sky is blue";
        //Output: "blue is sky the"

        String reversed = reverseSen(s);
        System.out.println("reversed:: "+reversed);

    }

    static String reverseSen(String s){
        String[] str = s.trim().split("\\s+");
        String newStr = "";

        System.out.println();
        for (int i = str.length-1; i >0 ; i--) {

             newStr += str[i] + " ";

        }
        newStr+=str[0];

        return newStr;
    }
}
