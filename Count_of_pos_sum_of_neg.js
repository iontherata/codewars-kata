
// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


// My solution:


function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
        return [];

    const positive = []
    let negative = 0

    for (let units of input) {
        if (units > 0) {
            positive.push(units)
        }
        if (units < 0) {

            negative += units
        }
    }
    return [positive.length, negative]
}




// OTHER SOLUTION:

function countPositivesSumNegatives(input) {
    return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
}