// Find the maximum
function maxOfTwoNumbers(num1, num2) {
  let maxNumber = num1;
  // console.log(maxNumber);
  num1 > num2 ? maxNumber : (maxNumber = num2);
  return maxNumber;
}

//console.log(maxOfTwoNumbers(5, 7));
/* dry run 
0. create function call as console.log
1. create let maxNumber = num1;
2. if statement compare num1 and num2 with tenary-operator
3. update maxNumber
4. return maxNumber


*/

// Find the longest word

const words = ["Jaws", "Up", "Alien", "Gravity", "Inception", "Psycho"];

function findLongestWord(words) {
  let longestWord = "";
  for (let word of words) {
    //console.log(word);
    if (word.length > longestWord.length) {
      longestWord = word;
      // console.log(longestWord);
    }
  }
  return longestWord;
}

// console.log(findLongestWord(words));
/* 
1. create function call
2. declare let longestWord = ""
3.  forof loop for words
4. compare word.length with longestWord.length in an if-Statement
5. update longestWord
6. after finishing the loop return longestword 

*/

// Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let sum = 0;
  //console.log(sum);
  for (let num of numbers) {
    sum = sum + num;
    // console.log(sum);
  }
  // console.log(sum);
  return sum;
}

//console.log(sumNumbers(numbers));
/*
1. declare let sum = 0;
2. forof loop to add every single number
3. update sum
4. return sum after the forof loop
5. call the function


*/

// Calculate the average length of the words

const words2 = [
  "eclipse",
  "harmony",
  "cascade",
  "labyrinth",
  "quartz",
  "serendipity",
  "zenith",
  "ephemeral",
  "vortex",
  "mystique",
];

function averageWordLength(words) {
  if (words.length === 0) {
    return "The array is empty";
  }
  let averageWordLength = 0;
  let wordsLength = [];
  wordsLength = words.map((word) => word.length);
  //console.log(wordsLength);
  let sum = 0;
  //console.log(sum);
  for (let num of wordsLength) {
    sum = sum + num;
  }
  // console.log(sum);
  averageWordLength = sum / wordsLength.length;
  return averageWordLength;
}

//console.log(averageWordLength(words2));
/*
0. create a let averageWordLength = 0
1. create a new array let wordslength = [];
2. map over the words2 array to get the length of every word store them in wordslength
3. update averageWordLength = sum of all words lengths divide through the number of words
4. return averageWordLength
5. call the function and console.log

*/

// Unique arrays - return an array without duplicates

const words3 = [
  "crab",
  "poison",
  "contagious",
  "simple",
  "bring",
  "sharp",
  "playground",
  "poison",
  "communion",
  "simple",
  "bring",
];

function uniquifyArray(words) {
  const uniqueWordsArray = words.filter(
    (word, index) => words.indexOf(word) === index
  );
  //console.log(uniqueWordsArray);
  return uniqueWordsArray;
}

//console.log(uniquifyArray(words3));

/*
1. filter the words3 array to only take the first occurence of the word 
2. the callback function  checks the indexOf(word === index)
3. return the uniqueWordsArray 
4. console.log the function call
*/

// Find elements
const wordsFind = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(haystack, needle) {
  if (wordsFind.includes(haystack)) {
    console.log(`${haystack} does exist in the array`);
  } else {
    console.log(`${haystack} does not exist in the array`);
  }
  if (wordsFind.includes(needle)) {
    console.log(`${needle} does exist in the array`);
  } else {
    console.log(`${needle} does not exist in the array`);
  }
}
doesWordExist("truth", "Eating");
/*

*/

// Count repetition

const wordsCount = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter",
];

function howManyTimes(haystack, needle) {
  let haystackOccurrence = 0;
  let needleOccurrence = 0;
  for (let word1 of wordsCount) {
    if (word1 === haystack) {
      haystackOccurrence++;
    }
  }
  for (let word2 of wordsCount) {
    if (word2 === needle) {
      needleOccurrence++;
    }
  }
  return `${haystack} is ${haystackOccurrence} times in the array, and ${needle} is ${needleOccurrence} times.`;
}

//console.log(howManyTimes("trouble", "apple"));

// 1. set two variables let haystackOccurrence = 0, let needleOccurrence = 0;
// 2. create a for of loop to iterate over the array for each word;
// 3. inside the forof loop if (word === haystack) then update haystackOccurrence
// 4. return message with temperal literals

// Bonus: A generic sum function
// for strings use the length of the string, for booleans use 1 and 0
const mixedArray = [
  "apple",
  "banana",
  "cherry",
  "date",
  42,
  7,
  1995,
  23,
  true,
  false,
];

function sum(array) {
  let sum = 0;
  for (let item of mixedArray) {
    switch (typeof item) {
      case "string":
        sum = sum + item.length;
        //console.log(sum);
        break;
      case "number":
        sum = sum + item;
        //console.log(sum);
        break;
      case "boolean":
        item === true ? sum++ : sum;
        //console.log(sum);
        break;
      default:
      //console.log("None of the 3 types!");
    }
  }
  return sum;
}

//console.log(`The sum of the array is: ${sum(mixedArray)}`) ;
// 1. Initialize let sum = 0;
// 2. loop through the array with a for .. of loop
// 3. create a switch statement to check with typeof the 3 different types of items
// 4. for each type create a statement to increase sum;
// 5. create a return message
// 6. call the function

// Bonus: Write a function that calculates the greatest product of four
// numbers that is either horizontally or vertically in the array

const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [
    49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62,
    0,
  ],
  [
    81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36,
    65,
  ],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [
    22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13,
    80,
  ],
  [
    24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12,
    50,
  ],
  [
    32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64,
    70,
  ],
  [
    67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94,
    21,
  ],
  [
    24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63,
    72,
  ],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [
    16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85,
    57,
  ],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [
    19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55,
    40,
  ],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [
    88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53,
    69,
  ],
  [
    4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76,
    36,
  ],
  [
    20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36,
    16,
  ],
  [
    20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5,
    54,
  ],
  [
    1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67,
    48,
  ],
];

function greatestProduct(matrix) {
  let maxProduct = 0;
  let rows = matrix.length;
  let columns = matrix[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      // horizontal product
      if (j + 3 < columns) {
        let productHorizontal =
          matrix[i][j] * matrix[i][j + 1] * matrix[i][j + 2] * matrix[i][j + 3];
        if (productHorizontal > maxProduct) {
          maxProduct = productHorizontal;
        }
      }
      // vertical product
      if (i + 3 < rows) {
        let productVertical =
          matrix[i][j] * matrix[i + 1][j] * matrix[i + 2][j] * matrix[i + 3][j];
        if (productVertical > maxProduct) {
          maxProduct = productVertical;
        }
      }
    }
  }
  return maxProduct;
}

console.log(
  `The greatest product of the matrix array is: ${greatestProduct(matrix)}`
);
// 1. declare let maxProduct = 0;
// 2. create nested for loops through each row(i) and each column(j);
// 3. outer loop for rows(i from 0 to 19);
// 4. inner loop for columns(j from 0 to 19)
// 5. calculate horizontal product: check if there are 4 consecutive numbers in the same row (j + 3 < 20)
// 5.a multiply four numbers starting at column j
// 5.b compare the result to maxProduct and update maxProduct if it`s larger
// 6. calculate vertical product: check if there are 4 consecutive numbers in the same column (i + 3 < 20)
// 6.a multiply four numbers starting at row i
// 6.b compare the result to maxProduct and update maxProduct if it`s larger
// 7. return maxProduct

module.exports = {
  maxOfTwoNumbers,
  findLongestWord,
  sumNumbers,
  averageWordLength,
  uniquifyArray,
  doesWordExist,
  howManyTimes,
  sum,
  greatestProduct,
};
