
// Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// My solution:

function oddOrEven(array) {
    //enter code here

    const total = array.reduce((a, b) => a + b, 0)
    if (array === [] || total % 2 === 0) {
        return `even`
    } return 'odd'
}