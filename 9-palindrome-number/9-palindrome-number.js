/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
    //used to strin to convert the number into string
//split to convert the string to an array of characters
    //reverse to reverse the array
    //join to join the array back to a string
    return x == x.toString().split('').reverse().join('');
};