// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// My solution:


function getCount(str) {

    let countVowels = 0;
    const vowels = ["a", "e", "i", "o", "u"];

    for (let letters of str) {

        for (let vowel of vowels) {
            if (letters === vowel) {
                countVowels++;
            }
        }
    }
    return countVowels
}