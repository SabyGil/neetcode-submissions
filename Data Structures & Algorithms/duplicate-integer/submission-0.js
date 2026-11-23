class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let mySet = new Set();
        for(let i of nums){
            if(mySet.has(i)) return true
            else mySet.add(i)
        }
        return false;
    }
}
