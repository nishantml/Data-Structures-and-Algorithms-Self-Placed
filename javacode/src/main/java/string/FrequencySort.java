package string;

import java.util.HashMap;
import java.util.Map;
import java.util.TreeMap;

public class FrequencySort {
    public static void main(String[] args) {
//        String s = "tree";
        String s = "cccaaa";
        String out = frequencySort(s);
        System.out.println("out:: "+out);
    }

    static String frequencySort(String s){
        String newStr = "";
        Map<String, Integer> hashMap = new TreeMap<>();
        String[] strArr = s.split("");
        for (int i = 0; i < strArr.length; i++) {
            System.out.println(strArr[i]);
            if (!hashMap.containsKey(strArr[i])){
               hashMap.put(strArr[i], 1);
            }else {
                hashMap.put(strArr[i], hashMap.get(strArr[i])+1);
            }
        }
        System.out.println(hashMap);

        for (String key : hashMap.keySet()){
            int loopLen = hashMap.get(key);
            for (int i = 0; i < loopLen; i++) {
                newStr += key;
            }
        }

        return newStr;
    }
}
