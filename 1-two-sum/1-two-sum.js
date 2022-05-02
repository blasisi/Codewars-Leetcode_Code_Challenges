/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


const twoSum = (nums, target) => {
    let result = [];
//     This line check each element in array 
    for (let i = 0; i < nums.length; i++){
       //     This line check another  element in array 
     for (let j = i + 1; j < nums.length; j++){
         //check if the element exit and calculate the current  and add to result 
if(nums[i] + nums[j] === target){
    result.push(i);
    result.push(j);
     }
     }
    }
//     return all pairs of interger
    return result;
};