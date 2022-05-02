/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) =>{
    //create romanValues with all roman-integer pair value and symbols
    let romanValues={
        I: 1,
         V: 5,
	     X: 10,
	     L: 50,
	     C: 100,
	     D: 500,
	      M: 1000
        
    };
    //initialise result and keep track of result
    let result = 0;
    //this line check element it in the array
    for (let i = 0; i < s.length; i++) {
            // this line checked element it in the array or has a special case
        // check if current symbol is bigger than other symbols 
if(romanValues[s[i]] < romanValues[s[i + 1]]){
    //this line subtract the other value
    //if the current letters is there then subtract the value
    result -=romanValues[s[i]]
}
            //this line add the other value
        //store the result in romanToIntConverension
        else{
             result +=romanValues[s[i]];
        }
    }
        // console.log(total)
    return result;
       // console.log(romanValues)  
    }

