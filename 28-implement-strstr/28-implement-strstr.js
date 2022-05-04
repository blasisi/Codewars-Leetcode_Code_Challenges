/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
    //check and find if needle is present in the haystack
    //check if needle is equal to 0, return 0, we return 0 when we need an empty string
    //check if needle is equal to haystack 
    //loop overthe haystack and check if. needle is equal to haystack substr
    //if no match when subract then we return -1
    if(needle.length === 0)
        
        return 0;
    
    //This line check if need in present 
    if(needle === haystack)
        return 0;
    for (let i = 0; i <= haystack.length - needle.length; i++){
      if (needle === haystack.substring(i, i + needle.length)){
          return i;
      }          
    }
        // this line return -1 because needle is not present in the haystack
    return -1;
};
