const _ = {

    // NUMBER FUNCTIONS 
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

    // STRING FUNCTIONS

    words(string) {
        const words = string.split(' ');
        return words;
    },

    pad(string, length) {
        if(length <= string.length) {
            return string;
        }

        //getting start padding length
        const startPaddingLength = Math.floor((length - string.length) / 2);

        //getting end padding length
        const endPaddingLength = length - string.length - startPaddingLength;

        //getting final padded string
        const paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);

        return paddedString;

    },

    //Object functions
    has(object, key) {
        const value = object[key];

        if (value == undefined) {
            return false;
        } else {
            return true;
        }
    }, 

    //inverts an object key/value pairs
    invert(object) {
        const invertedObject = {};

        for (let key in object) {
            //inverting takes place here
            originalValue = object[key];
            invertedObject[originalValue] = key; 
        }

        return invertedObject;
    },

    findKey(object, predicate) {
        for (let key in object) {
            //const value = object[key];
            //predicateReturnValue = predicate(value);
            //if(value) return key;

            //if return value of the predicate function is truthy the key is returned
            if (predicate(object[key])) return key;
        }
        
        //undefined is returned if no truthy value is returned from the predicate function
        return undefined;
    },

    //Array functions
    
    //slices an array by using the number provided
    drop(array, number) {
        if (number == undefined) {
            number = 1;
        }

        return array.slice(number);
    },

    //keeps dropping elements from an array until true is returned
    dropWhile(array, predicate) {
        const dropNumber = array.findIndex((element, index) => {
            return !predicate(element, index, array);
        });

        return this.drop(array, dropNumber);
    },

    chunk(array, size) {
        if (size == undefined) {
            size = 1;
        }

        const arrayChunks = [];

        //looping through the array to slice it increment loop by
        //size of chunk
        for (let i = 0; i <= array.length-1; i += size) {
            //slicing by chunk size
            let arrayChunk = array.slice(i, i + size);

            //pushing chunk into array
            arrayChunks.push(arrayChunk);
            console.log(arrayChunks);
        }

        console.log(arrayChunks);
        return arrayChunks;
    }


  };

  _.chunk(['a', 'b', 'c', 'd'], 2);

// Do not write or modify code below this line.
module.exports = _;