
function fizzBuzz(num) {
    let result = '';
    const isValidNumRange = num < 1 || num > 100;
    if (isValidNumRange) {
        return null;
    }

    const isDivisibleByThree = num % 3 === 0;
    const containsNumThree = num.toString().match(/3/) !== null;
    const isDivisibleByFive = num % 5 === 0;
    const containsNumFive = num.toString().match(/5/) !== null;

    if (isDivisibleByThree) {
        result += 'Fizz';
    }
    if (containsNumThree) {
        result += 'Fizz';
    }
    if (isDivisibleByFive) {
        result += 'Buzz';
    }
    if (containsNumFive) {
        result += 'Buzz';
    }
    if (result === '') {
        return num;
    }

    return result;
};


module.exports = fizzBuzz;