export const coding_javascript = {
  "title": "JavaScript Coding",
  "subtitle": "30 Core JavaScript Interview Problems",
  "isCoding": true,
  "questions": [
    {
      "id": "js-code-1",
      "title": "Reverse a String",
      "difficulty": "Easy",
      "topics": [
        "String",
        "Algorithms"
      ],
      "problemStatement": "Write a function that reverses a string.",
      "examples": [
        {
          "input": "'hello'",
          "output": "'olleh'",
          "explanation": "The reversed string is 'olleh'."
        }
      ],
      "constraints": [
        "1 <= str.length <= 10^5"
      ],
      "hints": [
        "Try using two pointers or the built-in reverse method."
      ],
      "approach": "Split the string into an array, reverse the array, and join it back. Alternatively, iterate backwards and concatenate.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(N)",
      "solution": "function reverse(s) {\n  return s.split('').reverse().join('');\n}\n",
      "optimizedSolution": "function reverseOpt(s) {\n  let r = '';\n  for (let i = s.length - 1; i >= 0; i--) r += s[i];\n  return r;\n}\n",
      "commonMistakes": [
        "Forgetting that strings are immutable in JavaScript."
      ],
      "followUp": [
        "Can you do it in-place if it was an array of characters?"
      ]
    },
    {
      "id": "js-code-2",
      "title": "Check Palindrome",
      "difficulty": "Easy",
      "topics": [
        "String",
        "Algorithms"
      ],
      "problemStatement": "Given a string, return true if the string is a palindrome or false otherwise.",
      "examples": [
        {
          "input": "'racecar'",
          "output": "true",
          "explanation": "Reads the same forwards and backwards."
        }
      ],
      "constraints": [
        "1 <= str.length <= 10^5"
      ],
      "hints": [
        "Use two pointers moving from outside in."
      ],
      "approach": "Use two pointers, one at the start and one at the end, comparing characters and moving inwards.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)",
      "solution": "function isPalindrome(s) {\n  return s === s.split('').reverse().join('');\n}\n",
      "optimizedSolution": "function isPalindromeOpt(s) {\n  let l = 0,\n    r = s.length - 1;\n  while (l < r) {\n    if (s[l] !== s[r]) return false;\n    l++;\n    r--;\n  }\n  return true;\n}\n",
      "commonMistakes": [
        "Not ignoring case or spaces if required by variations."
      ],
      "followUp": [
        "How to handle unicode characters?"
      ]
    },
    {
      "id": "js-code-3",
      "title": "Find Largest Number",
      "difficulty": "Easy",
      "topics": [
        "Array"
      ],
      "problemStatement": "Find the maximum number in an array of numbers.",
      "examples": [
        {
          "input": "[1, 5, 3, 9, 2]",
          "output": "9",
          "explanation": "9 is the largest element."
        }
      ],
      "constraints": [
        "1 <= arr.length <= 10^5"
      ],
      "hints": [
        "Math.max might exceed call stack size for very large arrays. Use a loop."
      ],
      "approach": "Iterate through the array, keeping track of the maximum value seen so far.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)",
      "solution": "function findLargest(arr) {\n  return Math.max(...arr);\n}\n",
      "optimizedSolution": "function findLargestOpt(arr) {\n  let max = -Infinity;\n  for (let n of arr) if (n > max) max = n;\n  return max;\n}\n",
      "commonMistakes": [
        "Using Math.max(...arr) on arrays with millions of elements."
      ],
      "followUp": [
        "What if the array is empty?"
      ]
    },
    {
      "id": "js-code-4",
      "title": "Find Second Largest Number",
      "difficulty": "Easy",
      "topics": [
        "Array"
      ],
      "problemStatement": "Find the second largest unique number in an array.",
      "examples": [
        {
          "input": "[10, 5, 10]",
          "output": "5",
          "explanation": "5 is the second largest unique number."
        }
      ],
      "constraints": [
        "2 <= arr.length <= 10^5"
      ],
      "hints": [
        "Keep track of the largest and second largest while iterating."
      ],
      "approach": "Initialize max and secondMax. Iterate and update both based on comparisons.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)",
      "solution": "function secondLargest(arr) {\n  const unique = [...new Set(arr)].sort((a, b) => b - a);\n  return unique[1];\n}\n",
      "optimizedSolution": "function secondLargestOpt(arr) {\n  let max = -Infinity,\n    second = -Infinity;\n  for (let n of arr) {\n    if (n > max) {\n      second = max;\n      max = n;\n    } else if (n > second && n !== max) second = n;\n  }\n  return second;\n}\n",
      "commonMistakes": [
        "Not handling duplicate maximum values correctly."
      ],
      "followUp": [
        "Find the k-th largest element."
      ]
    },
    {
      "id": "js-code-5",
      "title": "Find Missing Number",
      "difficulty": "Easy",
      "topics": [
        "Array",
        "Math"
      ],
      "problemStatement": "Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing.",
      "examples": [
        {
          "input": "[3,0,1]",
          "output": "2",
          "explanation": "2 is missing from the range [0, 3]."
        }
      ],
      "constraints": [
        "1 <= arr.length <= 10^4"
      ],
      "hints": [
        "Use the formula for the sum of the first n numbers."
      ],
      "approach": "Calculate expected sum using n*(n+1)/2. Subtract actual sum of array elements to find the missing one.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)",
      "solution": "function findMissing(arr) {\n  const n = arr.length;\n  const expectedSum = (n * (n + 1)) / 2;\n  const actualSum = arr.reduce((a, b) => a + b, 0);\n  return expectedSum - actualSum;\n}\n",
      "optimizedSolution": "function findMissingOpt(arr) {\n  let res = arr.length;\n  for (let i = 0; i < arr.length; i++) res ^= i ^ arr[i];\n  return res;\n}\n",
      "commonMistakes": [
        "Integer overflow if n is extremely large (though rare in JS as numbers are double precision floats)."
      ],
      "followUp": [
        "Can you do it using XOR?"
      ]
    },
    {
      "id": "js-code-6",
      "title": "Remove Duplicate Elements",
      "difficulty": "Easy",
      "topics": [
        "Array",
        "Set"
      ],
      "problemStatement": "Remove duplicate elements from an array.",
      "examples": [
        {
          "input": "[1, 2, 2, 3]",
          "output": "[1, 2, 3]",
          "explanation": "Duplicates are removed."
        }
      ],
      "constraints": [
        "1 <= arr.length <= 10^5"
      ],
      "hints": [
        "Use a Set."
      ],
      "approach": "Convert the array to a Set to remove duplicates, then convert it back to an array.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(N)",
      "solution": "function removeDuplicates(arr) {\n  return arr.filter((item, index) => arr.indexOf(item) === index);\n}\n",
      "optimizedSolution": "function removeDuplicatesOpt(arr) {\n  return [...new Set(arr)];\n}\n",
      "commonMistakes": [
        "Using indexOf in a loop which makes it O(N^2)."
      ],
      "followUp": [
        "How to remove duplicates from an array of objects based on a property?"
      ]
    },
    {
      "id": "js-code-7",
      "title": "Count Character Frequency",
      "difficulty": "Easy",
      "topics": [
        "String",
        "Hash Map"
      ],
      "problemStatement": "Count the frequency of each character in a given string.",
      "examples": [
        {
          "input": "'hello'",
          "output": "{h:1, e:1, l:2, o:1}",
          "explanation": "Frequency map of characters."
        }
      ],
      "constraints": [
        "1 <= str.length <= 10^5"
      ],
      "hints": [
        "Use an object or Map to store frequencies."
      ],
      "approach": "Iterate over the string and populate an object with character counts.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(K)",
      "solution": "function charFreq(str) {\n  const freq = {};\n  for (let char of str) {\n    freq[char] = (freq[char] || 0) + 1;\n  }\n  return freq;\n}\n",
      "optimizedSolution": "function charFreqOpt(str) {\n  return str.split('').reduce((acc, char) => {\n    acc[char] = (acc[char] || 0) + 1;\n    return acc;\n  }, {});\n}\n",
      "commonMistakes": [
        "Not considering spaces or special characters if they need to be excluded."
      ],
      "followUp": [
        "Return the most frequent character."
      ]
    },
    {
      "id": "js-code-8",
      "title": "Check Anagram",
      "difficulty": "Easy",
      "topics": [
        "String",
        "Hash Map"
      ],
      "problemStatement": "Check if two strings are anagrams of each other.",
      "examples": [
        {
          "input": "s='listen', t='silent'",
          "output": "true",
          "explanation": "They contain the same characters in different order."
        }
      ],
      "constraints": [
        "1 <= s.length, t.length <= 10^5"
      ],
      "hints": [
        "Sort both strings or use a character frequency map."
      ],
      "approach": "Create a frequency map for the first string, then decrement frequencies using the second string. If all counts are zero, they are anagrams.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1) (since alphabet is fixed)",
      "solution": "function isAnagram(s, t) {\n  return s.split('').sort().join('') === t.split('').sort().join('');\n}\n",
      "optimizedSolution": "function isAnagramOpt(s, t) {\n  if (s.length !== t.length) return false;\n  const map = {};\n  for (let char of s) map[char] = (map[char] || 0) + 1;\n  for (let char of t) {\n    if (!map[char]) return false;\n    map[char]--;\n  }\n  return true;\n}\n",
      "commonMistakes": [
        "Assuming sorting is O(N). It's O(N log N)."
      ],
      "followUp": [
        "What if the inputs contain unicode characters?"
      ]
    },
    {
      "id": "js-code-9",
      "title": "Fibonacci Series",
      "difficulty": "Easy",
      "topics": [
        "Math",
        "Recursion",
        "DP"
      ],
      "problemStatement": "Return the nth Fibonacci number.",
      "examples": [
        {
          "input": "5",
          "output": "5",
          "explanation": "Sequence: 0, 1, 1, 2, 3, 5"
        }
      ],
      "constraints": [
        "0 <= n <= 50"
      ],
      "hints": [
        "Use an iterative approach or recursion with memoization."
      ],
      "approach": "Iteratively calculate the next Fibonacci number by adding the two previous ones.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)",
      "solution": "function fib(n) {\n  if (n <= 1) return n;\n  return fib(n - 1) + fib(n - 2);\n}\n",
      "optimizedSolution": "function fibOpt(n) {\n  if (n <= 1) return n;\n  let a = 0,\n    b = 1,\n    next;\n  for (let i = 2; i <= n; i++) {\n    next = a + b;\n    a = b;\n    b = next;\n  }\n  return b;\n}\n",
      "commonMistakes": [
        "Using plain recursion which leads to O(2^N) time complexity."
      ],
      "followUp": [
        "Return an array of the first N Fibonacci numbers."
      ]
    },
    {
      "id": "js-code-10",
      "title": "Factorial",
      "difficulty": "Easy",
      "topics": [
        "Math",
        "Recursion"
      ],
      "problemStatement": "Calculate the factorial of a given non-negative integer.",
      "examples": [
        {
          "input": "5",
          "output": "120",
          "explanation": "5 * 4 * 3 * 2 * 1 = 120"
        }
      ],
      "constraints": [
        "0 <= n <= 170"
      ],
      "hints": [
        "Use a simple loop or recursion."
      ],
      "approach": "Multiply numbers from 1 to n.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)",
      "solution": "function factorial(n) {\n  if (n === 0 || n === 1) return 1;\n  return n * factorial(n - 1);\n}\n",
      "optimizedSolution": "function factorialOpt(n) {\n  let res = 1;\n  for (let i = 2; i <= n; i++) res *= i;\n  return res;\n}\n",
      "commonMistakes": [
        "Not returning 1 for n=0.",
        "Call stack exceeded for large N in recursion."
      ],
      "followUp": [
        "How to handle very large numbers where JS precision is lost? (Use BigInt)"
      ]
    },
    {
      "id": "js-code-11",
      "title": "Prime Number",
      "difficulty": "Easy",
      "topics": [
        "Math"
      ],
      "problemStatement": "Check if a given number is a prime number.",
      "examples": [
        {
          "input": "7",
          "output": "true",
          "explanation": "7 has no divisors other than 1 and itself."
        }
      ],
      "constraints": [
        "1 <= n <= 10^9"
      ],
      "hints": [
        "Check divisibility up to the square root of n."
      ],
      "approach": "If n <= 1, return false. Loop from 2 to Math.sqrt(n). If n is divisible by any, return false.",
      "timeComplexity": "O(sqrt(N))",
      "spaceComplexity": "O(1)",
      "solution": "function isPrime(n) {\n  if (n <= 1) return false;\n  for (let i = 2; i < n; i++) {\n    if (n % i === 0) return false;\n  }\n  return true;\n}\n",
      "optimizedSolution": "function isPrimeOpt(n) {\n  if (n <= 1) return false;\n  if (n <= 3) return true;\n  if (n % 2 === 0 || n % 3 === 0) return false;\n  for (let i = 5; i * i <= n; i += 6) {\n    if (n % i === 0 || n % (i + 2) === 0) return false;\n  }\n  return true;\n}\n",
      "commonMistakes": [
        "Checking divisibility up to N instead of sqrt(N)."
      ],
      "followUp": [
        "Find all prime numbers up to N (Sieve of Eratosthenes)."
      ]
    },
    {
      "id": "js-code-12",
      "title": "FizzBuzz",
      "difficulty": "Easy",
      "topics": [
        "Math",
        "String"
      ],
      "problemStatement": "Print numbers from 1 to n. For multiples of 3, print 'Fizz'. For multiples of 5, print 'Buzz'. For multiples of both, print 'FizzBuzz'.",
      "examples": [
        {
          "input": "5",
          "output": "['1','2','Fizz','4','Buzz']",
          "explanation": ""
        }
      ],
      "constraints": [
        "1 <= n <= 10^4"
      ],
      "hints": [
        "Use modulo operator %."
      ],
      "approach": "Loop from 1 to n. Check modulo 15 first, then 3, then 5.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(N)",
      "solution": "function fizzBuzz(n) {\n  let result = [];\n  for (let i = 1; i <= n; i++) {\n    if (i % 15 === 0) result.push('FizzBuzz');\n    else if (i % 3 === 0) result.push('Fizz');\n    else if (i % 5 === 0) result.push('Buzz');\n    else result.push(i.toString());\n  }\n  return result;\n}\n",
      "optimizedSolution": "function fizzBuzzOpt(n) {\n  let res = [];\n  for (let i = 1; i <= n; i++) {\n    let str = '';\n    if (i % 3 === 0) str += 'Fizz';\n    if (i % 5 === 0) str += 'Buzz';\n    res.push(str || String(i));\n  }\n  return res;\n}\n",
      "commonMistakes": [
        "Checking modulo 3 and modulo 5 separately but failing to check modulo 15 (or both)."
      ],
      "followUp": [
        "How to structure it so adding new conditions (like 7 for 'Bazz') is easy?"
      ]
    },
    {
      "id": "js-code-13",
      "title": "Reverse Words in a Sentence",
      "difficulty": "Easy",
      "topics": [
        "String"
      ],
      "problemStatement": "Reverse the order of words in a given sentence.",
      "examples": [
        {
          "input": "'hello world'",
          "output": "'world hello'",
          "explanation": "The words are reversed."
        }
      ],
      "constraints": [
        "1 <= str.length <= 10^4"
      ],
      "hints": [
        "Split by space, reverse, and join."
      ],
      "approach": "Use split(' '), then reverse the array, then join(' '). Ensure multiple spaces are handled if needed.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(N)",
      "solution": "function reverseWords(s) {\n  return s.split(' ').reverse().join(' ');\n}\n",
      "optimizedSolution": "function reverseWordsOpt(s) {\n  return s.trim().split(/\\s+/).reverse().join(' ');\n}\n",
      "commonMistakes": [
        "Not trimming leading/trailing spaces or handling multiple spaces between words."
      ],
      "followUp": [
        "Reverse the characters in each word but keep word order?"
      ]
    },
    {
      "id": "js-code-14",
      "title": "Flatten Nested Array",
      "difficulty": "Medium",
      "topics": [
        "Array",
        "Recursion"
      ],
      "problemStatement": "Flatten an array of arbitrarily nested arrays of integers into a flat array.",
      "examples": [
        {
          "input": "[1, [2, [3, 4], 5]]",
          "output": "[1, 2, 3, 4, 5]",
          "explanation": "The array is completely flattened."
        }
      ],
      "constraints": [
        "0 <= depth <= 100"
      ],
      "hints": [
        "Use recursion or Array.prototype.flat() if allowed."
      ],
      "approach": "Iterate over array elements. If an element is an array, recursively flatten it. Otherwise, add it to result.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(N)",
      "solution": "function flatten(arr) {\n  return arr.flat(Infinity);\n}\n",
      "optimizedSolution": "function flattenOpt(arr) {\n  const res = [];\n  for (let el of arr) {\n    if (Array.isArray(el)) res.push(...flattenOpt(el));\n    else res.push(el);\n  }\n  return res;\n}\n",
      "commonMistakes": [
        "Not flattening deeply enough (only 1 level)."
      ],
      "followUp": [
        "Implement it iteratively using a stack."
      ]
    },
    {
      "id": "js-code-15",
      "title": "Deep Copy Object",
      "difficulty": "Medium",
      "topics": [
        "Object",
        "Recursion"
      ],
      "problemStatement": "Create a deep clone of a nested object or array.",
      "examples": [
        {
          "input": "{a: 1, b: {c: 2}}",
          "output": "{a: 1, b: {c: 2}}",
          "explanation": "Returns a new identical object."
        }
      ],
      "constraints": [
        "No circular references in standard cases."
      ],
      "hints": [
        "JSON.parse(JSON.stringify(obj)) works for basic types.",
        "For complex objects, use recursion."
      ],
      "approach": "Recursively iterate over object keys and copy them. Handle Date, Map, Set, and circular references for a robust solution.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(N)",
      "solution": "function deepCopy(obj) {\n  return JSON.parse(JSON.stringify(obj));\n}\n",
      "optimizedSolution": "function deepCopyOpt(obj, map = new WeakMap()) {\n  if (obj === null || typeof obj !== 'object') return obj;\n  if (map.has(obj)) return map.get(obj);\n  const clone = Array.isArray(obj) ? [] : {};\n  map.set(obj, clone);\n  for (let key in obj) {\n    if (Object.prototype.hasOwnProperty.call(obj, key))\n      clone[key] = deepCopyOpt(obj[key], map);\n  }\n  return clone;\n}\n",
      "commonMistakes": [
        "JSON.parse approach fails with functions, undefined, Symbols, and circular references."
      ],
      "followUp": [
        "How to handle circular references?"
      ]
    },
    {
      "id": "js-code-16",
      "title": "Debounce Function",
      "difficulty": "Medium",
      "topics": [
        "Functions",
        "Closures"
      ],
      "problemStatement": "Implement a debounce function that limits the rate at which a function gets called.",
      "examples": [
        {
          "input": "debounce(fn, 300)",
          "output": "Function",
          "explanation": "Delays invoking fn until after 300ms have elapsed since the last time it was invoked."
        }
      ],
      "constraints": [
        "0 <= wait <= 10000"
      ],
      "hints": [
        "Use setTimeout and clearTimeout.",
        "Return a closure that maintains the timer state."
      ],
      "approach": "Clear the previous timeout on every call and set a new one.",
      "timeComplexity": "O(1)",
      "spaceComplexity": "O(1) for closure",
      "solution": "function debounce(fn, wait) {\n  let timeoutId;\n  return function (...args) {\n    clearTimeout(timeoutId);\n    timeoutId = setTimeout(() => fn.apply(this, args), wait);\n  };\n}\n",
      "optimizedSolution": "function debounceOpt(fn, wait) {\n  let timeoutId;\n  return function (...args) {\n    clearTimeout(timeoutId);\n    timeoutId = setTimeout(() => fn.apply(this, args), wait);\n  };\n}\n",
      "commonMistakes": [
        "Losing the correct 'this' context by not using apply/call.",
        "Not passing arguments correctly."
      ],
      "followUp": [
        "Add an 'immediate' flag to call it on the leading edge."
      ]
    },
    {
      "id": "js-code-17",
      "title": "Throttle Function",
      "difficulty": "Medium",
      "topics": [
        "Functions",
        "Closures"
      ],
      "problemStatement": "Implement a throttle function that ensures a function is called at most once in a specified time period.",
      "examples": [
        {
          "input": "throttle(fn, 300)",
          "output": "Function",
          "explanation": "Invokes fn at most once per 300ms."
        }
      ],
      "constraints": [
        "0 <= wait <= 10000"
      ],
      "hints": [
        "Keep track of the last time the function was executed.",
        "Use setTimeout for trailing edge."
      ],
      "approach": "Check if enough time has passed since the last execution. If so, call it. Otherwise, ignore.",
      "timeComplexity": "O(1)",
      "spaceComplexity": "O(1) for closure",
      "solution": "function throttle(fn, wait) {\n  let lastCall = 0;\n  return function (...args) {\n    const now = new Date().getTime();\n    if (now - lastCall < wait) return;\n    lastCall = now;\n    return fn.apply(this, args);\n  };\n}\n",
      "optimizedSolution": "function throttleOpt(fn, wait) {\n  let inThrottle;\n  return function (...args) {\n    if (!inThrottle) {\n      fn.apply(this, args);\n      inThrottle = true;\n      setTimeout(() => (inThrottle = false), wait);\n    }\n  };\n}\n",
      "commonMistakes": [
        "Failing to execute the last call if it happens during the wait period (trailing edge missing)."
      ],
      "followUp": [
        "Implement leading and trailing options."
      ]
    },
    {
      "id": "js-code-18",
      "title": "Polyfill for map()",
      "difficulty": "Medium",
      "topics": [
        "Array",
        "Polyfill"
      ],
      "problemStatement": "Implement your own version of Array.prototype.map.",
      "examples": [
        {
          "input": "[1,2,3].myMap(x => x * 2)",
          "output": "[2,4,6]",
          "explanation": "Transforms each element."
        }
      ],
      "constraints": [
        "No built-in map() allowed"
      ],
      "hints": [
        "Add the function to Array.prototype.",
        "Loop through the array and apply the callback."
      ],
      "approach": "Iterate over 'this'. Apply callback with (element, index, array). Push result to new array.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(N)",
      "solution": "Array.prototype.myMap = function (cb) {\n  const result = [];\n  for (let i = 0; i < this.length; i++) {\n    result.push(cb(this[i], i, this));\n  }\n  return result;\n};\n",
      "optimizedSolution": "Array.prototype.myMap = function (cb, thisArg) {\n  const result = new Array(this.length);\n  for (let i = 0; i < this.length; i++) {\n    if (i in this) result[i] = cb.call(thisArg, this[i], i, this);\n  }\n  return result;\n};\n",
      "commonMistakes": [
        "Not handling sparse arrays.",
        "Not supporting the optional thisArg."
      ],
      "followUp": [
        "How does your implementation handle holes in the array?"
      ]
    },
    {
      "id": "js-code-19",
      "title": "Polyfill for filter()",
      "difficulty": "Medium",
      "topics": [
        "Array",
        "Polyfill"
      ],
      "problemStatement": "Implement your own version of Array.prototype.filter.",
      "examples": [
        {
          "input": "[1,2,3].myFilter(x => x > 1)",
          "output": "[2,3]",
          "explanation": "Filters elements based on predicate."
        }
      ],
      "constraints": [
        "No built-in filter() allowed"
      ],
      "hints": [
        "Loop and push to new array if callback returns truthy."
      ],
      "approach": "Iterate over 'this'. If callback returns truthy, push element to result array.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(N) (worst case)",
      "solution": "Array.prototype.myFilter = function (cb) {\n  const result = [];\n  for (let i = 0; i < this.length; i++) {\n    if (cb(this[i], i, this)) result.push(this[i]);\n  }\n  return result;\n};\n",
      "optimizedSolution": "Array.prototype.myFilter = function (cb, thisArg) {\n  const result = [];\n  for (let i = 0; i < this.length; i++) {\n    if (i in this && cb.call(thisArg, this[i], i, this))\n      result.push(this[i]);\n  }\n  return result;\n};\n",
      "commonMistakes": [
        "Not handling sparse arrays.",
        "Not supporting thisArg."
      ],
      "followUp": [
        "Can you do it using reduce?"
      ]
    },
    {
      "id": "js-code-20",
      "title": "Polyfill for reduce()",
      "difficulty": "Medium",
      "topics": [
        "Array",
        "Polyfill"
      ],
      "problemStatement": "Implement your own version of Array.prototype.reduce.",
      "examples": [
        {
          "input": "[1,2,3].myReduce((acc, x) => acc + x, 0)",
          "output": "6",
          "explanation": "Reduces array to a single value."
        }
      ],
      "constraints": [
        "No built-in reduce() allowed"
      ],
      "hints": [
        "Handle the case where initialValue is not provided.",
        "Start index depends on initialValue."
      ],
      "approach": "Determine initial value and start index. Loop through array, updating accumulator with callback result.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)",
      "solution": "Array.prototype.myReduce = function (cb, init) {\n  let acc = init;\n  let i = 0;\n  if (init === undefined) {\n    acc = this[0];\n    i = 1;\n  }\n  for (; i < this.length; i++) {\n    acc = cb(acc, this[i], i, this);\n  }\n  return acc;\n};\n",
      "optimizedSolution": "Array.prototype.myReduce = function (cb, init) {\n  let i = 0,\n    acc = init;\n  if (init === undefined) {\n    if (this.length === 0)\n      throw new TypeError(\n        'Reduce of empty array with no initial value',\n      );\n    while (i < this.length && !(i in this)) i++;\n    acc = this[i++];\n  }\n  for (; i < this.length; i++) {\n    if (i in this) acc = cb(acc, this[i], i, this);\n  }\n  return acc;\n};\n",
      "commonMistakes": [
        "Failing when no initialValue is provided and array has 1 element.",
        "Not skipping empty slots in sparse arrays."
      ],
      "followUp": [
        "What happens when reduce is called on an empty array without initialValue?"
      ]
    },
    {
      "id": "js-code-21",
      "title": "Promise Implementation",
      "difficulty": "Hard",
      "topics": [
        "Async",
        "Promises"
      ],
      "problemStatement": "Create a basic polyfill for the Promise class (MyPromise).",
      "examples": [
        {
          "input": "new MyPromise((res, rej) => res(1))",
          "output": "MyPromise { state: 'fulfilled', value: 1 }",
          "explanation": "Basic promise structure."
        }
      ],
      "constraints": [
        "Implement constructor, then, catch"
      ],
      "hints": [
        "Manage state: pending, fulfilled, rejected.",
        "Store callbacks for asynchronous execution."
      ],
      "approach": "Class with state, value, and arrays for onResolve and onReject callbacks. The executor function is called immediately.",
      "timeComplexity": "O(1)",
      "spaceComplexity": "O(N) for storing callbacks",
      "solution": "class MyPromise {\n  constructor(exec) {\n    this.state = 'pending';\n    this.value = null;\n    const res = (val) => {\n      if (this.state === 'pending') {\n        this.state = 'fulfilled';\n        this.value = val;\n      }\n    };\n    const rej = (err) => {\n      if (this.state === 'pending') {\n        this.state = 'rejected';\n        this.value = err;\n      }\n    };\n    exec(res, rej);\n  }\n}\n",
      "optimizedSolution": "class MyPromise {\n  constructor(exec) {\n    this.state = 'pending';\n    this.value = null;\n    this.callbacks = [];\n    const resolve = (val) => {\n      if (this.state !== 'pending') return;\n      this.state = 'fulfilled';\n      this.value = val;\n      this.callbacks.forEach((cb) => cb.onFulfilled(val));\n    };\n    const reject = (err) => {\n      if (this.state !== 'pending') return;\n      this.state = 'rejected';\n      this.value = err;\n      this.callbacks.forEach((cb) => cb.onRejected(err));\n    };\n    try {\n      exec(resolve, reject);\n    } catch (err) {\n      reject(err);\n    }\n  }\n  then(onFulfilled, onRejected) {\n    return new MyPromise((res, rej) => {\n      /* queue microtask to handle resolution */\n    });\n  }\n}\n",
      "commonMistakes": [
        "Not making `then` callbacks execute asynchronously (using queueMicrotask or setTimeout).",
        "Not chaining promises correctly in `then`."
      ],
      "followUp": [
        "Implement Promise.all()",
        "How to make callbacks execute asynchronously?"
      ]
    },
    {
      "id": "js-code-22",
      "title": "Async/Await API Fetch",
      "difficulty": "Easy",
      "topics": [
        "Async",
        "Network"
      ],
      "problemStatement": "Write an async function that fetches data from an API and handles errors.",
      "examples": [
        {
          "input": "fetchData('https://api.example.com/data')",
          "output": "Promise<Object>",
          "explanation": "Returns parsed JSON."
        }
      ],
      "constraints": [
        "Use fetch API"
      ],
      "hints": [
        "Use try/catch blocks.",
        "Check response.ok."
      ],
      "approach": "Await fetch call. If response is not ok, throw error. Await response.json(). Catch and handle errors.",
      "timeComplexity": "O(1)",
      "spaceComplexity": "O(1)",
      "solution": "async function fetchData(url) {\n  try {\n    const res = await fetch(url);\n    const data = await res.json();\n    return data;\n  } catch (e) {\n    console.error(e);\n  }\n}\n",
      "optimizedSolution": "async function fetchDataOpt(url) {\n  try {\n    const res = await fetch(url);\n    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);\n    return await res.json();\n  } catch (error) {\n    console.error('Fetch failed:', error.message);\n    throw error;\n  }\n}\n",
      "commonMistakes": [
        "Forgetting to check response.ok. fetch doesn't throw on 404/500."
      ],
      "followUp": [
        "How to add a timeout to the fetch request? (Use AbortController)"
      ]
    },
    {
      "id": "js-code-23",
      "title": "Implement setTimeout",
      "difficulty": "Hard",
      "topics": [
        "System Design",
        "Async"
      ],
      "problemStatement": "How would you implement your own setTimeout if you only had access to requestAnimationFrame or a busy loop? (Conceptual)",
      "examples": [
        {
          "input": "mySetTimeout(fn, 1000)",
          "output": "id",
          "explanation": "Executes fn after 1s."
        }
      ],
      "constraints": [
        "No using actual setTimeout"
      ],
      "hints": [
        "Use Date.now() to check elapsed time in a loop (rAF or while)."
      ],
      "approach": "Create a loop using requestAnimationFrame that continually checks if the current time minus the start time is greater than the delay.",
      "timeComplexity": "O(1) per frame",
      "spaceComplexity": "O(1)",
      "solution": "function mySetTimeout(cb, delay) {\n  const start = Date.now();\n  function loop() {\n    if (Date.now() - start >= delay) {\n      cb();\n    } else {\n      requestAnimationFrame(loop);\n    }\n  }\n  requestAnimationFrame(loop);\n}\n",
      "optimizedSolution": "function mySetTimeoutOpt(cb, delay) {\n  let start;\n  let id;\n  function loop(time) {\n    if (!start) start = time;\n    if (time - start >= delay) {\n      cb();\n    } else {\n      id = requestAnimationFrame(loop);\n    }\n  }\n  id = requestAnimationFrame(loop);\n  return () => cancelAnimationFrame(id);\n}\n",
      "commonMistakes": [
        "Using a while loop which blocks the main thread completely."
      ],
      "followUp": [
        "How to implement clearMyTimeout?"
      ]
    },
    {
      "id": "js-code-24",
      "title": "LRU Cache (Medium)",
      "difficulty": "Medium",
      "topics": [
        "Class",
        "Data Structures"
      ],
      "problemStatement": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
      "examples": [
        {
          "input": "LRUCache(2)",
          "output": "Instance",
          "explanation": "Capacity of 2."
        }
      ],
      "constraints": [
        "get and put must be O(1) time."
      ],
      "hints": [
        "Use a Map because JS Maps preserve insertion order."
      ],
      "approach": "When getting, if exists, delete and re-insert to mark as recently used. When putting, if exists, delete first. Insert new value. If size exceeds capacity, delete the first item in the Map (using map.keys().next().value).",
      "timeComplexity": "O(1)",
      "spaceComplexity": "O(capacity)",
      "solution": "class LRUCache {\n  constructor(cap) {\n    this.cache = new Map();\n    this.cap = cap;\n  }\n  get(key) {\n    if (!this.cache.has(key)) return -1;\n    const val = this.cache.get(key);\n    this.cache.delete(key);\n    this.cache.set(key, val);\n    return val;\n  }\n  put(key, value) {\n    if (this.cache.has(key)) this.cache.delete(key);\n    this.cache.set(key, value);\n    if (this.cache.size > this.cap)\n      this.cache.delete(this.cache.keys().next().value);\n  }\n}\n",
      "optimizedSolution": "class LRUCacheOpt {\n  constructor(capacity) {\n    this.cache = new Map();\n    this.capacity = capacity;\n  }\n  get(key) {\n    if (!this.cache.has(key)) return -1;\n    const v = this.cache.get(key);\n    this.cache.delete(key);\n    this.cache.set(key, v);\n    return v;\n  }\n  put(key, value) {\n    if (this.cache.has(key)) this.cache.delete(key);\n    this.cache.set(key, value);\n    if (this.cache.size > this.capacity) {\n      this.cache.delete(this.cache.keys().next().value);\n    }\n  }\n}\n",
      "commonMistakes": [
        "Implementing it with Object and Array, making operations O(N)."
      ],
      "followUp": [
        "Implement it using a Doubly Linked List and a Hash Map."
      ]
    },
    {
      "id": "js-code-25",
      "title": "Group Array by Property",
      "difficulty": "Easy",
      "topics": [
        "Array",
        "Object"
      ],
      "problemStatement": "Group an array of objects by a specific property.",
      "examples": [
        {
          "input": "[{id: 1, cat: 'A'}, {id: 2, cat: 'B'}, {id: 3, cat: 'A'}]",
          "output": "{ 'A': [{id: 1...}, {id:3...}], 'B': [{id: 2...}] }",
          "explanation": "Grouped by 'cat'."
        }
      ],
      "constraints": [
        "1 <= arr.length <= 10^4"
      ],
      "hints": [
        "Use Array.prototype.reduce."
      ],
      "approach": "Reduce the array into an object. If the group key doesn't exist on the object, initialize it with an array. Push the item to the array.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(N)",
      "solution": "function groupBy(arr, prop) {\n  const res = {};\n  for (let item of arr) {\n    const key = item[prop];\n    if (!res[key]) res[key] = [];\n    res[key].push(item);\n  }\n  return res;\n}\n",
      "optimizedSolution": "function groupByOpt(arr, prop) {\n  return arr.reduce((acc, obj) => {\n    const key = obj[prop];\n    acc[key] = acc[key] || [];\n    acc[key].push(obj);\n    return acc;\n  }, {});\n}\n",
      "commonMistakes": [
        "Mutating the original objects unnecessarily."
      ],
      "followUp": [
        "Group by a function instead of a property name."
      ]
    },
    {
      "id": "js-code-26",
      "title": "Merge Two Objects",
      "difficulty": "Easy",
      "topics": [
        "Object"
      ],
      "problemStatement": "Merge two objects. If properties conflict, the second object's properties should overwrite the first's.",
      "examples": [
        {
          "input": "a={x:1, y:2}, b={y:3, z:4}",
          "output": "{x:1, y:3, z:4}",
          "explanation": "Property y is overwritten."
        }
      ],
      "constraints": [
        "Shallow merge"
      ],
      "hints": [
        "Use the spread operator or Object.assign."
      ],
      "approach": "Spread syntax `{...a, ...b}` or `Object.assign({}, a, b)` achieves this simply.",
      "timeComplexity": "O(K)",
      "spaceComplexity": "O(K)",
      "solution": "function mergeObjects(a, b) {\n  return Object.assign({}, a, b);\n}\n",
      "optimizedSolution": "function mergeObjectsOpt(a, b) {\n  return { ...a, ...b };\n}\n",
      "commonMistakes": [
        "Mutating object a instead of returning a new merged object."
      ],
      "followUp": [
        "How to perform a deep merge?"
      ]
    },
    {
      "id": "js-code-27",
      "title": "Chunk Array",
      "difficulty": "Medium",
      "topics": [
        "Array"
      ],
      "problemStatement": "Split an array into smaller arrays of a specified size.",
      "examples": [
        {
          "input": "arr=[1,2,3,4,5], size=2",
          "output": "[[1,2], [3,4], [5]]",
          "explanation": "Chunked into sizes of 2."
        }
      ],
      "constraints": [
        "1 <= size <= arr.length"
      ],
      "hints": [
        "Use a loop and Array.prototype.slice."
      ],
      "approach": "Loop through the array, incrementing by `size`. Push `arr.slice(i, i + size)` to the result array.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(N)",
      "solution": "function chunk(arr, size) {\n  const res = [];\n  for (let i = 0; i < arr.length; i += size) {\n    res.push(arr.slice(i, i + size));\n  }\n  return res;\n}\n",
      "optimizedSolution": "function chunkOpt(arr, size) {\n  const chunked = [];\n  let i = 0;\n  while (i < arr.length) {\n    chunked.push(arr.slice(i, i + size));\n    i += size;\n  }\n  return chunked;\n}\n",
      "commonMistakes": [
        "Off-by-one errors in loop conditions."
      ],
      "followUp": [
        "Implement it without using slice."
      ]
    },
    {
      "id": "js-code-28",
      "title": "Find Duplicate Elements",
      "difficulty": "Easy",
      "topics": [
        "Array",
        "Set"
      ],
      "problemStatement": "Find all duplicate elements in an array.",
      "examples": [
        {
          "input": "[1, 2, 3, 2, 4, 3]",
          "output": "[2, 3]",
          "explanation": "2 and 3 appear more than once."
        }
      ],
      "constraints": [
        "1 <= arr.length <= 10^5"
      ],
      "hints": [
        "Use a Set or Map to keep track of seen elements."
      ],
      "approach": "Iterate over the array. If an element is already in a 'seen' Set, add it to a 'duplicates' Set to ensure duplicates aren't listed multiple times.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(N)",
      "solution": "function findDuplicates(arr) {\n  return arr.filter((item, index) => arr.indexOf(item) !== index);\n}\n",
      "optimizedSolution": "function findDuplicatesOpt(arr) {\n  const seen = new Set();\n  const dupes = new Set();\n  for (let val of arr) {\n    if (seen.has(val)) dupes.add(val);\n    else seen.add(val);\n  }\n  return [...dupes];\n}\n",
      "commonMistakes": [
        "Using indexOf inside filter making it O(N^2).",
        "Returning duplicates multiple times if they appear more than twice."
      ],
      "followUp": [
        "Find duplicates in O(N) time and O(1) extra space if array contains numbers from 1 to N."
      ]
    },
    {
      "id": "js-code-29",
      "title": "Two Sum",
      "difficulty": "Easy",
      "topics": [
        "Array",
        "Hash Map"
      ],
      "problemStatement": "Given an array of integers and a target sum, return indices of the two numbers such that they add up to the target.",
      "examples": [
        {
          "input": "nums=[2,7,11,15], target=9",
          "output": "[0, 1]",
          "explanation": "nums[0] + nums[1] == 9"
        }
      ],
      "constraints": [
        "2 <= nums.length <= 10^4",
        "Exactly one valid answer exists."
      ],
      "hints": [
        "Use a Hash Map to store the difference between target and current number."
      ],
      "approach": "Iterate over nums. Calculate complement (target - num). If complement is in map, return map[complement] and current index. Else store map[num] = index.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(N)",
      "solution": "function twoSum(nums, target) {\n  for (let i = 0; i < nums.length; i++) {\n    for (let j = i + 1; j < nums.length; j++) {\n      if (nums[i] + nums[j] === target) return [i, j];\n    }\n  }\n}\n",
      "optimizedSolution": "function twoSumOpt(nums, target) {\n  const map = new Map();\n  for (let i = 0; i < nums.length; i++) {\n    const complement = target - nums[i];\n    if (map.has(complement)) return [map.get(complement), i];\n    map.set(nums[i], i);\n  }\n  return [];\n}\n",
      "commonMistakes": [
        "Using nested loops yielding O(N^2) time complexity."
      ],
      "followUp": [
        "What if the array is sorted? (Use Two Pointers)"
      ]
    },
    {
      "id": "js-code-30",
      "title": "Longest Substring Without Repeating Characters",
      "difficulty": "Medium",
      "topics": [
        "String",
        "Sliding Window"
      ],
      "problemStatement": "Given a string, find the length of the longest substring without repeating characters.",
      "examples": [
        {
          "input": "'abcabcbb'",
          "output": "3",
          "explanation": "The answer is 'abc', with the length of 3."
        }
      ],
      "constraints": [
        "0 <= s.length <= 5 * 10^4"
      ],
      "hints": [
        "Use a sliding window with two pointers."
      ],
      "approach": "Use a Set and two pointers (left, right). If s[right] is not in Set, add it, increment right, update max length. If it is in Set, remove s[left], increment left.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(min(N, M)) where M is character set size",
      "solution": "function lengthOfLongestSubstring(s) {\n  let max = 0;\n  for (let i = 0; i < s.length; i++) {\n    let set = new Set();\n    for (let j = i; j < s.length; j++) {\n      if (set.has(s[j])) break;\n      set.add(s[j]);\n      max = Math.max(max, set.size);\n    }\n  }\n  return max;\n}\n",
      "optimizedSolution": "function lengthOfLongestSubstringOpt(s) {\n  let set = new Set(),\n    max = 0,\n    left = 0;\n  for (let right = 0; right < s.length; right++) {\n    while (set.has(s[right])) {\n      set.delete(s[left]);\n      left++;\n    }\n    set.add(s[right]);\n    max = Math.max(max, right - left + 1);\n  }\n  return max;\n}\n",
      "commonMistakes": [
        "Using O(N^2) or O(N^3) brute force solutions."
      ],
      "followUp": [
        "Optimize the sliding window by storing character indices in a Map to jump the left pointer directly."
      ]
    }
  ]
};
