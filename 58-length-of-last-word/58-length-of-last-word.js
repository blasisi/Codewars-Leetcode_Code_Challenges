/**
 * @param {string} s
 * @return {number}
 */
const  lengthOfLastWord = (s) => {
        const trimSplitArr = s.trim().split(' ');
    if(trimSplitArr.length === 0){
      return 0;
    }else{
      return trimSplitArr[trimSplitArr.length - 1].length;
    }
};
