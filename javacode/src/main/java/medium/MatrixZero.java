package medium;

import java.sql.Array;
import java.util.ArrayList;
import java.util.Arrays;

public class MatrixZero {
    public static void main(String[] args) {
// https://leetcode.com/problems/set-matrix-zeroes/description/
//        int[][] matrix = {
//                {1, 1, 1},
//                {1, 0, 1},
//                {1, 1, 1}
//        };

        int[][] matrix = {
                {0, 1, 2, 0},
                {3, 4, 5, 2},
                {1, 3, 1, 5}
        };

        getUpdatedMatrix(matrix);
        System.out.println();
    }

    static void getUpdatedMatrix(int[][] matrix){

        ArrayList<ArrayList<Integer>> zeroIndexs = new ArrayList<>();
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 0){
                    ArrayList<Integer> row = new ArrayList<>();
                    row.add(i);
                    row.add(j);
                    zeroIndexs.add(row);
                }
            }
        }

        System.out.println(zeroIndexs);

        for (ArrayList<Integer> row : zeroIndexs) {
            int rowIndex = row.get(0);
            int colIndex = row.get(1);
            System.out.println(row);
            System.out.println(rowIndex);
            System.out.println(colIndex);

            // setting rows value
            for (int i = 0; i < matrix[0].length; i++) {
                matrix[rowIndex][i] = 0;
            }
            // setting rows value
            for (int i = 0; i < matrix.length; i++) {
                matrix[i][colIndex] = 0;
            }

        }

        for (int[] row : matrix) {
            System.out.println(Arrays.toString(row));
        }
//        System.out.println(Arrays.deepToString(matrix));

    }
}
