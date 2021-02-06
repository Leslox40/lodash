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
    },

    words(string) {
        const words = string.split(' ');
        return words;
    },

    pad(string, length) {
        if(length <= string.length) {
            return string;
        }

        const startPaddingLength = Math.floor((length - string.length) / 2);

        const endPaddingLength = length - string.length - startPaddingLength;

        const paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);

        return paddedString;

    },

    has(object, key) {
        const value = object[key];

        if (value == undefined) {
            return false;
        } else {
            return true;
        }
    }
  };


// Do not write or modify code below this line.
module.exports = _;