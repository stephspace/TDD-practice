function analyzeArray(arr){
    let average = 0;
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let length = arr.length;

    for(let i = 0; i < arr.length; i++){
        average += arr[i];
    }

    average = average / arr.length;

    return {
        average,
        min,
        max,
        length
    }
}

module.exports = analyzeArray;