
/*
 * arrays-03.js
 * Language: javascript
 * Test: tests/arrays-03.test.js
 * Path: src/arrays-03.js
 *
 * Description: Challenges using various array methods.
 *
 * Concepts:
 *  - Utilizes forEach, map, filter, find, sort, join, reverse, and concat.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 */

/**
 * Returns the sum of all numbers in an array.
 * @param {Array<number>} arr - An array of numbers.
 * @returns {number} The sum.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 */
function addUpArrayElements(arr) {
  let sum = 0;
  arr.forEach(function (num) {
    sum += num;
  });
  return sum;
}

/**
 * Returns a new array with each number squared.
 * @param {Array<number>} arr - An array of numbers.
 * @returns {Array<number>} A new array with squared values.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
function makeSquareNumbers(arr) {
  return arr.map(function (num) {
    return num * num;
  });
}

/**
 * Filters an array of words, returning only those longer than a given length.
 * @param {Array<string>} arr - An array of words.
 * @param {number} length - The minimum length.
 * @returns {Array<string>} The filtered array.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 */
function filterForLargeWords(arr, length) {
  return arr.filter(function (word) {
    return word.length > length;
  });
}

/**
 * Returns the first even number found in an array.
 * @param {Array<number>} arr - An array of numbers.
 * @returns {number|undefined} The first even number or undefined.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 */
function findTheFirstEvenNumber(arr) {
  return arr.find(function (num) {
    return num % 2 === 0;
  });
}

/**
 * Sorts an array of words in ascending, case-sensitive order.
 * @param {Array<string>} arr - An array of words.
 * @returns {Array<string>} The sorted array.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 */
function sortCaseSensitive(arr) {
  let copy = [...arr];
  copy.sort();
  return copy;
}

/**
 * Joins an array of words into a string using a specified separator.
 * @param {Array} arr - The array of words.
 * @param {string} separator - The separator.
 * @returns {string} The resulting string.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
 */
function makeTheString(arr, separator) {
  return arr.join(separator);
}

/**
 * Returns a new array with the elements reversed.
 * @param {Array} arr - The original array.
 * @returns {Array} The reversed array.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
 */
function reverseTheArray(arr) {
  return arr.slice().reverse();
}

/**
 * Creates a mirror array by appending a reversed copy of the original array.
 * For example, [1, 2, 3] becomes [1, 2, 3, 2, 1].
 * @param {Array} arr - The original array.
 * @returns {Array} The mirror array.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
 */
function makeMirrorArray(arr) {
  if (arr.length <= 1) {
    return [...arr];
  }
  const reversedPart = [...arr].slice(0, arr.length - 1).reverse();
  return arr.concat(reversedPart);
}

/**
 * Creates a new array by dropping the last n elements.
 * @param {Array} arr - The original array.
 * @param {number} n - Number of elements to drop.
 * @returns {Array} The resulting array.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
 */
function dropRight(arr, n) {
  if (n >= arr.length) {
    return [];
  }
  return arr.slice(0, arr.length - n);
}

/**
 * Creates a new array by dropping the first n elements.
 * @param {Array} arr - The original array.
 * @param {number} n - Number of elements to drop.
 * @returns {Array} The resulting array.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
 */
function dropLeft(arr, n) {
  return arr.slice(n);
}

/**
 * Checks whether an array contains a specific value.
 * @param {Array} arr - The array.
 * @param {*} val - The value to search for.
 * @returns {boolean} True if found, false otherwise.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
 */
function checkArrayForValue(arr, val) {
  return arr.includes(val);
}

module.exports = {
  addUpArrayElements,
  makeSquareNumbers,
  filterForLargeWords,
  findTheFirstEvenNumber,
  sortCaseSensitive,
  makeTheString,
  reverseTheArray,
  makeMirrorArray,
  dropRight,
  dropLeft,
  checkArrayForValue,
};
