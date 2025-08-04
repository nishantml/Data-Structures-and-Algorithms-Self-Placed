package medium;

public class TwoDArray {
    public static void main(String[] args) {
        int[][] matrix = {{1,3,5,7},{10,11,16,20},{23,30,34,60}};
        int target = 3;
        boolean exists = search(matrix, target);
        System.out.println(" exists:: " +exists);
    }

    static boolean search(int[][] matrix, int target){
        for(int i =0; i < matrix.length;i++){
            for(int j = 0; j< matrix[i].length;j++){
                if(matrix[i][j] == target){
                    System.out.println("matrix:: "+i+" "+j);
                    return true;
                }
            }
        }
        return false;
    }
}
