/**
 * This function accepts an array and a number, and returns the number nearest to the given number
 * @param {arrya of numbers} arr 
 * @param {number} num 
 * @returns the nearest number
 */
function findNearest(arr ,num){
    // First, we will consider the first element as the nearest one, and the diffence to be the minimum
    //Using math functions, so that 8-6 and 6-8 has the same result
    let nearestDiff = Math.sqrt(Math.pow((arr[0]-num),2));
    let result = arr[0];
    

    //inside the loop, we loop through the array, and check if there is any number, with lesser difference
    for(let i=1;i<arr.length;i++){
      let difference = Math.sqrt(Math.pow((arr[i]-num),2));
        if(  difference < nearestDiff ){
            //if there exist such number, then we update the nearestDiff 
            nearestDiff = difference;
            //and keep the number in a vaiable
            result = arr[i];
        }
    }
    return result;

}