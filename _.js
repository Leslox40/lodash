const _ = {
    clamp (number, lower, upper) {
      const lowerClampedValue = Math.max(number, lower);
      const clampedValue = Math.min(lowerClampedValue, upper);
      return clampedValue;
    },

    inRange (number, start, end) {
        //checking to see if no end value was given
        //end take the start value and start takes 0
        if (end === undefined) {
            end = start;
            start = 0;
        } else if (start > end) {
            //swapping if the start is greater end value
            let temp = end;
            end = start;
            start = temp;
        } 
        const isInRange = start <= number && number < end;
        console.log(isInRange);

        return isInRange;
    }
  };




// Do not write or modify code below this line.
module.exports = _;