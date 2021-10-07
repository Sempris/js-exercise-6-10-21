// 1. Write a function that accept a list of country names as input and returns the longest country name as output.
//     Example :
//     Longest_Country_Name(["Australia", "Germany", "United States of America"]) -> output : "United States of America"

let longestCountryName = input => {
    let longestWord = "";

    input.forEach((word) => {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    });
    return longestWord;
}
console.log('-------------- 1 --------------');
console.log(longestCountryName(["Australia", "Germany", "United States of America"]));

// 2. Write a function named countVowel, that accepts a string as a parameter and counts the number of vowels within the string.
//    (including all lowercase and uppercase letters)
//     Example :
//     countVowel('The QUICK brown FOX') ->  output : 5

let countVowel = input => {
    let count = input.match(/[aeiou]/gi);
    return count === null ? 0 : count.length;
}
console.log('-------------- 2 --------------');
console.log(countVowel('The QUICK brown FOX'));

// 3. Write a function named reverseNum, that accepts a number as a parameter and reverse the number.
//     Example :
//     reverseNum(32243) -> output : 34223

let reverseNum = input => Number(input.toString().split('').reverse().join(''));
console.log('-------------- 3 --------------');
console.log(reverseNum(57186));

// 4. Write a JavaScript function named generateComb, that accepts a string as a parameter and generates all combinations of a string. 
//     Example: 
//     generateComb('dog') -> d,do,dog,o,og,g
//     generateComb('four') -> f,fo,fou,four,o,ou,our,u,ur,r

function generateComb(input) {
    let strings = new Array();
    for (i = 0; i < input.length; i++) {
        for (j = i + 1; j < input.length + 1; j++) {
            strings.push(input.slice(i, j));
        }
    }
    return strings.toString();
}
console.log('-------------- 4 --------------');
console.log(generateComb('four'));

// 5. Write a function named uppercase that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
//     Example :
//     uppercase('the quick brown fox') -> output : 'The Quick Brown Fox'

let uppercase = input => input.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
console.log('-------------- 5 --------------');
console.log(uppercase('the quick brown fox'));

// 6. Write a function named findNums, which will take an array of numbers as argument and find the second lowest and second greatest numbers, respectively.
//    Consider the repeating array elements.
//     Example :
//     findNums([1, 5, 3, 2, 4, 3, 5, 1]) -> output : 2,4

function findNums(input) {
    input.sort(function (x, y) {
        return x - y;
    });

    let unique = [input[0]];
    let result = [];

    for (i = 1; i < input.length; i++) {
        if (input[i - 1] !== input[i]) {
            unique.push(input[i]);
        }
    }
    result.push(unique[1], unique[unique.length - 2]);
    return result.join(',');
}
console.log('-------------- 6 --------------');
console.log(findNums([1, 5, 3, 2, 4, 3, 5, 1]));

// 7. Write a function named countChar that accepts two arguments, a string and a letter and the function will count the number of occurrences
//    of the specified letter within the string. 
//     Example :
//     countChar('typescript', 't') -> output : 2

let countChar = (string, input) => string.split(input).length - 1;
console.log('-------------- 7 --------------');
console.log(countChar('typescript', 't'));

// 8. Write a function named convertToArray that takes an object as an argument. It should return a nested array of key value pairs.
//     Example :
//     convertToArray({name: 'John', city: 'Berlin', job: 'Developer'}) -> output : [['name', 'John'], ['city', 'Berlin'], ['job', 'Developer]]

let convertToArray = input => Object.entries(input);
console.log('-------------- 8 --------------');
console.log(convertToArray({ name: 'John', city: 'Berlin', job: 'Developer' }));

// 9. Write a function named amountToCoins that takes two argument (amount and coins array). It should convert the amount to coins. 
//     Example :
//     amountToCoins(46, [50, 20, 10, 5, 2, 1]) -> output : 20, 20, 5, 1 
//     ( Here 46 is the amount. and 50, 20, 10, 5, 2, 1 are coins. )

function amountToCoins(amount, coins) {
    if (amount === 0) {
        return [];
    }
    else {
        if (amount >= coins[0]) {
            left = (amount - coins[0]);
            return [coins[0]].concat(amountToCoins(left, coins));
        }
        else {
            coins.shift();
            return amountToCoins(amount, coins);
        }
    }
}
console.log('-------------- 9 --------------');
console.log(amountToCoins(46, [50, 20, 10, 5, 2, 1]));

// function amountTocoins(amount, coins = [50, 20, 10, 5, 2, 1]) {
//     let myArr = [];
//     coins.forEach((item) => {
//         while (amount >= item) {
//             myArr.push(item);
//             amount = amount - item;
//         }
//     });
//     return myArr;
// }
// console.log(amountTocoins(84));

// 10. Write a function named uniqueChar that takes a string argument and extracts unique characters from this string.
//     Example :
//     uniqueChar("thequickbrownfoxjumpsoverthelazydog") -> output : "thequickbrownfxjmpsvlazydg"

let uniqueChar = input => String.prototype.concat(...new Set(input));
console.log('------------- 10 --------------');
console.log(uniqueChar("thequickbrownfoxjumpsoverthelazydog"));

// 11. Write a function named getRange that takes two number arguments and returns the integers in range of these two arguments as array.
//     Example :
//     getRange(2, 9) -> output : [3, 4, 5, 6, 7, 8]

let getRange = (min, max) => {
    let result = [];
    for (i = min + 1; i < max; i++) {
        result.push(i);
    }
    return result;
}
console.log('------------- 11 --------------');
console.log(getRange(2, 9));

// 12. Create a function named manipulateArray that takes an array as an argument. Use array methods to manipulate the data the array below.
//     The first two items in the array should switch positions. The third item should be replaced by an item containing "black".
//     Return the changed array.
//     Example :
//     manipulateArray(["Red", "Green", "White"]) -> output : ["Green", "Red", "Black"]

let manipulateArray = input => [input[0], input[1]] = [input[1], input[0], input[2] = 'Black'];
// const manipulateArray = arr => arr.slice(0,2).reverse().concat(["Black"]);
console.log('------------- 12 --------------');
console.log(manipulateArray(["Red", "Green", "White"]));