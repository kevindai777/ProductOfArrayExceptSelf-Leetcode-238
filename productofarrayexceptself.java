//Java Solution

class Solution {
    public int[] productExceptSelf(int[] nums) {
        int length = nums.length;
        
        int[] left = new int[length];
        int[] right = new int[length];
        left[0] = 1;
        right[nums.length - 1] = 1;
        
        for (int i = 1; i < nums.length; i++) {
            left[i] = left[i - 1] * nums[i - 1];
        }
        
        for (int i = nums.length - 2; i >= 0; i--) {
            right[i] = right[i + 1] * nums[i + 1];
        }
        
        int[] result = new int[length];
        for (int i = 0; i < nums.length; i++) {
            result[i] = left[i] * right[i];
        }
        
        return result;
    }
}