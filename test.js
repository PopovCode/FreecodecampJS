// function countdown(n){
//     if(n < 1){
//         return [];
//     }else{
//         const countArray = countdown(n - 1);
//         countArray.unshift(n);
//         return countArray;
//     }
//   }


function rangeOfNumbers(startNum, endNum) {
    if(startNum === endNum){
        return [startNum]
    }else{ 
        const countArray = rangeOfNumbers(startNum, endNum - 1);
        countArray.push(endNum);
        return countArray;
    }
  };

console.log(rangeOfNumbers(1,10))