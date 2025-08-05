import java.util.Arrays;

public class Anagram {

    public static void main(String[] args) {
        String s = "anagram";
        String t = "nagaram";

        boolean anagram = checkAnagram(s, t);
        System.out.println(" :: "+anagram);
    }


    static boolean checkAnagram(String s, String t) {
        String[] sArr = s.split("");
        String[] tArr = t.split("");
        if(sArr.length != tArr.length) {
            return false;
        }

        Arrays.sort(sArr);
        Arrays.sort(tArr);

        String sN= String.join("", sArr);
        String tN= String.join("", tArr);


        System.out.println(sN);
        System.out.println(tN);

        return sN.equals(tN);
    }
}
