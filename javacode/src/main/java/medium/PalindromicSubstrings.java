package medium;

import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

//https://leetcode.com/problems/palindromic-substrings/description/
public class PalindromicSubstrings {

    public static void main(String[] args) {

//        String s = "abc";
        String s = "aaa";
        int count = countSubstrings(s);
        System.out.println(count);
    }

    static int countSubstrings(String s) {
        String[] strArr = s.split("") ;
        System.out.println(Arrays.toString(strArr));

        int palindromeCount = 0;

        int maxWindowSize = strArr.length;
        int currentWindow = 1;
        while (currentWindow <= maxWindowSize) {
            System.out.println("================================================");
            int startIndex = 0;
            int endIndex = currentWindow;
            System.out.println("startIndex:: "+startIndex);
            System.out.println("endIndex:: "+endIndex);
            System.out.println("currentWindow:: "+currentWindow);

            while (endIndex <= strArr.length) {
                System.out.println("start, end "+ startIndex+" "+ endIndex);
                String[] subArr = Arrays.copyOfRange(strArr,startIndex, endIndex );
                endIndex++;
                startIndex++;
                boolean isPalindromic = isPalindromicSubString(subArr);
                if (isPalindromic) {
                    palindromeCount++;
                }
            }

            currentWindow++;

        }


        return palindromeCount;
    }

    static boolean isPalindromicSubString(String[] str) {

        String mainStr = "";
        String revString = "";
        System.out.println("isPalindromicSubString:: "+ Arrays.toString(str));

        for (int i = 0; i < str.length; i++) {
            mainStr = mainStr + str[i];
            revString = str[i] + revString;
        }
        System.out.println("mainStr:: "+ mainStr);
        System.out.println("revString:: "+ revString);

        if (mainStr.equals(revString)) {
            System.out.println("mainStr:: "+ mainStr);
            System.out.println("revString:: "+ revString);
            System.out.println("True");
            return true;
        }else {
            return false;
        }
    }
}
