var searchInsert = function(nums, target) {
    let b, c = nums.length;
    b = Math.floor(nums.length/2);
    if(nums.length == 1) return +(nums[0] < target);
    if(nums.length < 3) {
        return +(nums[0] < target) + (nums[1] < target);
    }
    if(nums[b] <= target && nums[c] >= target)
        return b;
    if(nums[b] > target)
        return searchInsert(nums.slice(0,b), target);
    return b + searchInsert(nums.slice(b), target);
};
