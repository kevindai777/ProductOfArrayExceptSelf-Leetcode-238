//Objective is to find the product of an array without each index of the array.
//For example, an input of [1,2,3,4] should return [24,12,8,6]

let arr = [1,2,3,4]


//O(n) approach where we fill in a 'left' and 'right' array w/ a cumulative product
//up to that index. Then we multiply both arrays to get our answer.

let left = []
let right = []
let ans = []

left[0] = 1
for (let i = 1; i < arr.length; i++) {
    left[i] = left[i - 1] * arr[i - 1]
}

right[arr.length - 1] = 1
for (let i = arr.length - 2; i >= 0; i--) {
    right[i] = right[i + 1] * arr[i + 1]
}

for (let i = 0; i < arr.length; i++) {
    ans[i] = left[i] * right[i]
}

return ans