/**
 * @param {string[]} strs
 * @return {string}
 */
//comp
//N = number of strings
//m = length of the largest string string
//o(m) used to store the longest prefix
const longestCommonPrefix = (strs) =>{
    
    //compare strs and loop over the first element
  for (let j = 0; j < strs[0].length; j++) {
        //This line will ignore the first element
    for (let i = 1; i < strs.length; i++) {
        if(j >= strs[i].length){
            return strs[i]
        }
               if(strs[0][j] != strs[i] [j]){
                   return strs[0].substr(0, j)
                  
                  }

    } 
    }
    return strs[0]
};