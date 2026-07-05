export const coding_dsa = {
  "title": "DSA Coding",
  "subtitle": "25 Essential DSA Questions for MERN",
  "isCoding": true,
  "questions": [
    {
      "id": "dsa-code-1",
      "title": "Binary Search",
      "difficulty": "Easy",
      "topics": [
        "Arrays",
        "Searching"
      ],
      "problemStatement": "Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.",
      "examples": [
        {
          "input": "nums = [-1,0,3,5,9,12], target = 9",
          "output": "4",
          "explanation": "9 exists in nums and its index is 4"
        }
      ],
      "constraints": [
        "1 <= nums.length <= 10^4",
        "All integers in nums are unique",
        "nums is sorted in ascending order"
      ],
      "hints": [
        "Since the array is sorted, we can divide the search space in half at each step."
      ],
      "approach": "Use two pointers to represent the boundaries of the search space. Repeatedly check the middle element and halve the search space based on whether the target is smaller or larger than the middle element.",
      "timeComplexity": "O(log N)",
      "spaceComplexity": "O(1)",
      "solution": "function search(nums, target) {\n  for (let i = 0; i < nums.length; i++) {\n    if (nums[i] === target) return i;\n  }\n  return -1;\n}\n",
      "optimizedSolution": "function search(nums, target) {\n  let left = 0,\n    right = nums.length - 1;\n  while (left <= right) {\n    let mid = left + Math.floor((right - left) / 2);\n    if (nums[mid] === target) return mid;\n    if (nums[mid] < target) left = mid + 1;\n    else right = mid - 1;\n  }\n  return -1;\n}\n",
      "commonMistakes": [
        "Not using Math.floor leading to decimal indices.",
        "Incorrect boundary updates (e.g. left = mid) leading to infinite loops."
      ],
      "followUp": [
        "What if there are duplicate elements and you need to find the first occurrence?"
      ]
    },
    {
      "id": "dsa-code-2",
      "title": "Bubble Sort",
      "difficulty": "Easy",
      "topics": [
        "Arrays",
        "Sorting"
      ],
      "problemStatement": "Write a function that takes in an array of integers and returns a sorted version of that array. Use the Bubble Sort algorithm.",
      "examples": [
        {
          "input": "[8, 5, 2, 9, 5, 6, 3]",
          "output": "[2, 3, 5, 5, 6, 8, 9]",
          "explanation": "Array sorted in ascending order."
        }
      ],
      "constraints": [
        "1 <= arr.length <= 1000"
      ],
      "hints": [
        "Iterate through the array and swap adjacent elements if they are out of order. Repeat until no swaps are made."
      ],
      "approach": "Repeatedly step through the list, compare adjacent elements and swap them if they are in the wrong order. The pass through the list is repeated until the list is sorted.",
      "timeComplexity": "O(N^2)",
      "spaceComplexity": "O(1)",
      "solution": "function bubbleSort(arr) {\n  for (let i = 0; i < arr.length; i++) {\n    for (let j = 0; j < arr.length - 1; j++) {\n      if (arr[j] > arr[j + 1]) {\n        let temp = arr[j];\n        arr[j] = arr[j + 1];\n        arr[j + 1] = temp;\n      }\n    }\n  }\n  return arr;\n}\n",
      "optimizedSolution": "function bubbleSort(arr) {\n  let isSorted = false;\n  let counter = 0;\n  while (!isSorted) {\n    isSorted = true;\n    for (let i = 0; i < arr.length - 1 - counter; i++) {\n      if (arr[i] > arr[i + 1]) {\n        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];\n        isSorted = false;\n      }\n    }\n    counter++;\n  }\n  return arr;\n}\n",
      "commonMistakes": [
        "Not optimizing the inner loop boundary (elements at the end are already sorted).",
        "Failing to break early if no swaps occurred."
      ],
      "followUp": [
        "What is the best-case time complexity of the optimized version?"
      ]
    },
    {
      "id": "dsa-code-3",
      "title": "Selection Sort",
      "difficulty": "Easy",
      "topics": [
        "Arrays",
        "Sorting"
      ],
      "problemStatement": "Write a function that takes in an array of integers and returns a sorted version of that array. Use the Selection Sort algorithm.",
      "examples": [
        {
          "input": "[8, 5, 2, 9, 5, 6, 3]",
          "output": "[2, 3, 5, 5, 6, 8, 9]",
          "explanation": "Array sorted in ascending order."
        }
      ],
      "constraints": [
        "1 <= arr.length <= 1000"
      ],
      "hints": [
        "Find the smallest element in the unsorted portion of the array and swap it with the first unsorted element."
      ],
      "approach": "Divide the input list into two parts: a sorted sublist of items which is built up from left to right, and a sublist of the remaining unsorted items. Find the minimum element in the unsorted sublist and swap it with the leftmost unsorted element.",
      "timeComplexity": "O(N^2)",
      "spaceComplexity": "O(1)",
      "solution": "function selectionSort(arr) {\n  let startIdx = 0;\n  while (startIdx < arr.length - 1) {\n    let smallestIdx = startIdx;\n    for (let i = startIdx + 1; i < arr.length; i++) {\n      if (arr[smallestIdx] > arr[i]) smallestIdx = i;\n    }\n    let temp = arr[smallestIdx];\n    arr[smallestIdx] = arr[startIdx];\n    arr[startIdx] = temp;\n    startIdx++;\n  }\n  return arr;\n}\n",
      "optimizedSolution": "function selectionSort(arr) {\n  for (let i = 0; i < arr.length - 1; i++) {\n    let minIdx = i;\n    for (let j = i + 1; j < arr.length; j++) {\n      if (arr[j] < arr[minIdx]) minIdx = j;\n    }\n    if (minIdx !== i) [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];\n  }\n  return arr;\n}\n",
      "commonMistakes": [
        "Swapping elements on every comparison rather than only at the end of the inner loop."
      ],
      "followUp": [
        "Is Selection Sort stable?"
      ]
    },
    {
      "id": "dsa-code-4",
      "title": "Insertion Sort",
      "difficulty": "Easy",
      "topics": [
        "Arrays",
        "Sorting"
      ],
      "problemStatement": "Write a function that takes in an array of integers and returns a sorted version of that array. Use the Insertion Sort algorithm.",
      "examples": [
        {
          "input": "[8, 5, 2, 9, 5, 6, 3]",
          "output": "[2, 3, 5, 5, 6, 8, 9]",
          "explanation": "Array sorted in ascending order."
        }
      ],
      "constraints": [
        "1 <= arr.length <= 1000"
      ],
      "hints": [
        "Build the sorted array one element at a time by repeatedly taking the next unsorted element and inserting it into its correct position."
      ],
      "approach": "Iterate from the second element to the end. For each element, compare it with the previous elements and shift them to the right until the correct position is found.",
      "timeComplexity": "O(N^2)",
      "spaceComplexity": "O(1)",
      "solution": "function insertionSort(arr) {\n  for (let i = 1; i < arr.length; i++) {\n    for (let j = i; j > 0; j--) {\n      if (arr[j] < arr[j - 1]) {\n        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];\n      } else break;\n    }\n  }\n  return arr;\n}\n",
      "optimizedSolution": "function insertionSort(arr) {\n  for (let i = 1; i < arr.length; i++) {\n    let currentVal = arr[i];\n    let j = i - 1;\n    while (j >= 0 && arr[j] > currentVal) {\n      arr[j + 1] = arr[j];\n      j--;\n    }\n    arr[j + 1] = currentVal;\n  }\n  return arr;\n}\n",
      "commonMistakes": [
        "Using repeated swaps instead of shifting elements, which is less efficient."
      ],
      "followUp": [
        "When is Insertion Sort preferred over Quick Sort?"
      ]
    },
    {
      "id": "dsa-code-5",
      "title": "Merge Sort",
      "difficulty": "Medium",
      "topics": [
        "Arrays",
        "Sorting",
        "Divide and Conquer"
      ],
      "problemStatement": "Given an array of integers nums, sort the array in ascending order using Merge Sort.",
      "examples": [
        {
          "input": "[5,2,3,1]",
          "output": "[1,2,3,5]",
          "explanation": "Array sorted in ascending order."
        }
      ],
      "constraints": [
        "1 <= nums.length <= 5 * 10^4",
        "-5 * 10^4 <= nums[i] <= 5 * 10^4"
      ],
      "hints": [
        "Divide the array in half, sort each half, and merge them back together."
      ],
      "approach": "Recursively split the array until subarrays have 1 element. Then merge the sorted subarrays together to produce a single sorted array.",
      "timeComplexity": "O(N log N)",
      "spaceComplexity": "O(N)",
      "solution": "function mergeSort(arr) {\n  if (arr.length <= 1) return arr;\n  const mid = Math.floor(arr.length / 2);\n  const left = mergeSort(arr.slice(0, mid));\n  const right = mergeSort(arr.slice(mid));\n  let res = [],\n    i = 0,\n    j = 0;\n  while (i < left.length && j < right.length) {\n    if (left[i] < right[j]) res.push(left[i++]);\n    else res.push(right[j++]);\n  }\n  return res.concat(left.slice(i)).concat(right.slice(j));\n}\n",
      "optimizedSolution": "function mergeSort(arr) {\n  if (arr.length <= 1) return arr;\n  const mid = Math.floor(arr.length / 2);\n  const left = mergeSort(arr.slice(0, mid));\n  const right = mergeSort(arr.slice(mid));\n  return merge(left, right);\n}\nfunction merge(arr1, arr2) {\n  let results = [],\n    i = 0,\n    j = 0;\n  while (i < arr1.length && j < arr2.length) {\n    if (arr2[j] >= arr1[i]) results.push(arr1[i++]);\n    else results.push(arr2[j++]);\n  }\n  while (i < arr1.length) results.push(arr1[i++]);\n  while (j < arr2.length) results.push(arr2[j++]);\n  return results;\n}\n",
      "commonMistakes": [
        "Creating too many new arrays during slice and concat, leading to memory issues in strict environments."
      ],
      "followUp": [
        "Can you implement an iterative version of Merge Sort?"
      ]
    },
    {
      "id": "dsa-code-6",
      "title": "Quick Sort",
      "difficulty": "Medium",
      "topics": [
        "Arrays",
        "Sorting",
        "Divide and Conquer"
      ],
      "problemStatement": "Given an array of integers nums, sort the array in ascending order using Quick Sort.",
      "examples": [
        {
          "input": "[5,2,3,1]",
          "output": "[1,2,3,5]",
          "explanation": "Array sorted in ascending order."
        }
      ],
      "constraints": [
        "1 <= nums.length <= 5 * 10^4"
      ],
      "hints": [
        "Pick a pivot element, partition the array around it, and recursively sort the left and right subarrays."
      ],
      "approach": "Choose a pivot, partition the array such that elements less than pivot are to its left, and greater are to its right. Recursively apply to the sub-arrays.",
      "timeComplexity": "O(N log N)",
      "spaceComplexity": "O(log N)",
      "solution": "function quickSort(arr) {\n  if (arr.length <= 1) return arr;\n  let pivot = arr[arr.length - 1];\n  let left = [],\n    right = [];\n  for (let i = 0; i < arr.length - 1; i++) {\n    if (arr[i] < pivot) left.push(arr[i]);\n    else right.push(arr[i]);\n  }\n  return [...quickSort(left), pivot, ...quickSort(right)];\n}\n",
      "optimizedSolution": "function quickSort(arr, left = 0, right = arr.length - 1) {\n  if (left < right) {\n    let pivotIndex = pivot(arr, left, right);\n    quickSort(arr, left, pivotIndex - 1);\n    quickSort(arr, pivotIndex + 1, right);\n  }\n  return arr;\n}\nfunction pivot(arr, start = 0, end = arr.length - 1) {\n  const swap = (arr, idx1, idx2) =>\n    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);\n  let pivot = arr[start];\n  let swapIdx = start;\n  for (let i = start + 1; i <= end; i++) {\n    if (pivot > arr[i]) {\n      swapIdx++;\n      swap(arr, swapIdx, i);\n    }\n  }\n  swap(arr, start, swapIdx);\n  return swapIdx;\n}\n",
      "commonMistakes": [
        "Using naive O(N) memory approach (creating new arrays left/right) instead of in-place swapping."
      ],
      "followUp": [
        "How would you choose a better pivot to avoid O(N^2) worst case?"
      ]
    },
    {
      "id": "dsa-code-7",
      "title": "Stack",
      "difficulty": "Easy",
      "topics": [
        "Data Structures",
        "Stack"
      ],
      "problemStatement": "Implement a Stack class with push, pop, peek, and isEmpty methods.",
      "examples": [
        {
          "input": "push(5), push(10), pop()",
          "output": "10",
          "explanation": "LIFO order: 10 was the last added, so it is popped first."
        }
      ],
      "constraints": [
        "0 <= val <= 10^5",
        "At most 10^5 calls will be made to push, pop, peek, and isEmpty."
      ],
      "hints": [
        "A stack follows Last-In-First-Out (LIFO) principle.",
        "An array can be used as the underlying data structure."
      ],
      "approach": "Use a Javascript array and its built-in push and pop methods to create a LIFO queue.",
      "timeComplexity": "O(1)",
      "spaceComplexity": "O(N)",
      "solution": "class Stack {\n  constructor() {\n    this.items = [];\n  }\n  push(element) {\n    this.items.push(element);\n  }\n  pop() {\n    return this.items.pop();\n  }\n  peek() {\n    return this.items[this.items.length - 1];\n  }\n  isEmpty() {\n    return this.items.length === 0;\n  }\n}\n",
      "optimizedSolution": "class Node {\n  constructor(value) {\n    this.value = value;\n    this.next = null;\n  }\n}\nclass Stack {\n  constructor() {\n    this.first = null;\n    this.last = null;\n    this.size = 0;\n  }\n  push(val) {\n    let newNode = new Node(val);\n    if (!this.first) {\n      this.first = newNode;\n      this.last = newNode;\n    } else {\n      let temp = this.first;\n      this.first = newNode;\n      this.first.next = temp;\n    }\n    return ++this.size;\n  }\n  pop() {\n    if (!this.first) return null;\n    let temp = this.first;\n    if (this.first === this.last) this.last = null;\n    this.first = this.first.next;\n    this.size--;\n    return temp.value;\n  }\n}\n",
      "commonMistakes": [
        "Not handling the pop operation when the stack is empty."
      ],
      "followUp": [
        "Can you implement a stack using a Linked List to guarantee O(1) resizing time?"
      ]
    },
    {
      "id": "dsa-code-8",
      "title": "Queue",
      "difficulty": "Easy",
      "topics": [
        "Data Structures",
        "Queue"
      ],
      "problemStatement": "Implement a Queue class with enqueue, dequeue, front, and isEmpty methods.",
      "examples": [
        {
          "input": "enqueue(5), enqueue(10), dequeue()",
          "output": "5",
          "explanation": "FIFO order: 5 was added first, so it is removed first."
        }
      ],
      "constraints": [
        "0 <= val <= 10^5"
      ],
      "hints": [
        "A queue follows First-In-First-Out (FIFO) principle."
      ],
      "approach": "Use a Linked List internally to allow O(1) enqueues and dequeues, since Array.shift() is O(N).",
      "timeComplexity": "O(1)",
      "spaceComplexity": "O(N)",
      "solution": "class Queue {\n  constructor() {\n    this.items = [];\n  }\n  enqueue(element) {\n    this.items.push(element);\n  }\n  dequeue() {\n    return this.items.shift();\n  }\n  front() {\n    return this.items[0];\n  }\n  isEmpty() {\n    return this.items.length === 0;\n  }\n}\n",
      "optimizedSolution": "class Node {\n  constructor(value) {\n    this.value = value;\n    this.next = null;\n  }\n}\nclass Queue {\n  constructor() {\n    this.first = null;\n    this.last = null;\n    this.size = 0;\n  }\n  enqueue(val) {\n    let newNode = new Node(val);\n    if (!this.first) {\n      this.first = newNode;\n      this.last = newNode;\n    } else {\n      this.last.next = newNode;\n      this.last = newNode;\n    }\n    return ++this.size;\n  }\n  dequeue() {\n    if (!this.first) return null;\n    let temp = this.first;\n    if (this.first === this.last) this.last = null;\n    this.first = this.first.next;\n    this.size--;\n    return temp.value;\n  }\n}\n",
      "commonMistakes": [
        "Using Array.shift() for dequeue in JS, which causes O(N) performance per operation."
      ],
      "followUp": [
        "Implement a circular queue."
      ]
    },
    {
      "id": "dsa-code-9",
      "title": "Linked List",
      "difficulty": "Medium",
      "topics": [
        "Data Structures",
        "Linked List"
      ],
      "problemStatement": "Design a singly linked list class with append, prepend, deleteWithValue, and find methods.",
      "examples": [
        {
          "input": "append(1), append(2), deleteWithValue(1)",
          "output": "List: 2 -> null",
          "explanation": "1 is removed."
        }
      ],
      "constraints": [
        "0 <= val <= 10^5"
      ],
      "hints": [
        "Keep track of the head (and optionally tail) pointer."
      ],
      "approach": "Create a Node class. In LinkedList, implement methods by traversing pointers. Take care of edge cases like deleting the head.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(N)",
      "solution": "class Node {\n  constructor(val) {\n    this.val = val;\n    this.next = null;\n  }\n}\nclass LinkedList {\n  constructor() {\n    this.head = null;\n  }\n  append(val) {\n    let newNode = new Node(val);\n    if (!this.head) {\n      this.head = newNode;\n      return;\n    }\n    let current = this.head;\n    while (current.next) current = current.next;\n    current.next = newNode;\n  }\n  find(val) {\n    let current = this.head;\n    while (current) {\n      if (current.val === val) return current;\n      current = current.next;\n    }\n    return null;\n  }\n}\n",
      "optimizedSolution": "class Node {\n  constructor(val) {\n    this.val = val;\n    this.next = null;\n  }\n}\nclass LinkedList {\n  constructor() {\n    this.head = null;\n    this.tail = null;\n  }\n  append(val) {\n    let newNode = new Node(val);\n    if (!this.head) {\n      this.head = newNode;\n      this.tail = newNode;\n      return;\n    }\n    this.tail.next = newNode;\n    this.tail = newNode;\n  }\n  deleteWithValue(val) {\n    if (!this.head) return;\n    if (this.head.val === val) {\n      this.head = this.head.next;\n      return;\n    }\n    let current = this.head;\n    while (current.next && current.next.val !== val)\n      current = current.next;\n    if (current.next) {\n      current.next = current.next.next;\n      if (!current.next) this.tail = current;\n    }\n  }\n}\n",
      "commonMistakes": [
        "Forgetting to update the tail pointer when deleting the last node."
      ],
      "followUp": [
        "How would you implement a doubly linked list?"
      ]
    },
    {
      "id": "dsa-code-10",
      "title": "HashMap",
      "difficulty": "Medium",
      "topics": [
        "Data Structures",
        "HashMap",
        "Hashing"
      ],
      "problemStatement": "Implement a simple Hash Table with set, get, and keys methods using an array.",
      "examples": [
        {
          "input": "set('pink', '#ffc0cb'), get('pink')",
          "output": "'#ffc0cb'",
          "explanation": "Stores and retrieves a key-value pair."
        }
      ],
      "constraints": [
        "Keys are strings"
      ],
      "hints": [
        "Use a hash function to convert a string key into an array index."
      ],
      "approach": "Create an array of fixed size. Use a simple hash function. Handle collisions using separate chaining (storing arrays or linked lists at each index).",
      "timeComplexity": "O(1)",
      "spaceComplexity": "O(N)",
      "solution": "class HashTable {\n  constructor(size = 53) {\n    this.keyMap = new Array(size);\n  }\n  _hash(key) {\n    let total = 0,\n      WEIRD_PRIME = 31;\n    for (let i = 0; i < Math.min(key.length, 100); i++) {\n      let char = key[i];\n      let value = char.charCodeAt(0) - 96;\n      total = (total * WEIRD_PRIME + value) % this.keyMap.length;\n    }\n    return total;\n  }\n}\n",
      "optimizedSolution": "class HashTable {\n  constructor(size = 53) {\n    this.keyMap = new Array(size);\n  }\n  _hash(key) {\n    let total = 0,\n      WEIRD_PRIME = 31;\n    for (let i = 0; i < Math.min(key.length, 100); i++) {\n      total =\n        (total * WEIRD_PRIME + key.charCodeAt(i) - 96) %\n        this.keyMap.length;\n    }\n    return total;\n  }\n  set(key, value) {\n    let index = this._hash(key);\n    if (!this.keyMap[index]) this.keyMap[index] = [];\n    this.keyMap[index].push([key, value]);\n  }\n  get(key) {\n    let index = this._hash(key);\n    if (this.keyMap[index]) {\n      for (let i = 0; i < this.keyMap[index].length; i++) {\n        if (this.keyMap[index][i][0] === key)\n          return this.keyMap[index][i][1];\n      }\n    }\n    return undefined;\n  }\n}\n",
      "commonMistakes": [
        "Not handling hash collisions."
      ],
      "followUp": [
        "How would you handle resizing the hash table?"
      ]
    },
    {
      "id": "dsa-code-11",
      "title": "Two Pointers",
      "difficulty": "Easy",
      "topics": [
        "Arrays",
        "Two Pointers"
      ],
      "problemStatement": "Given a sorted array of unique integers and a target sum, find if there is a pair of numbers that add up to the target. Return their indices, or [-1, -1] if no such pair exists.",
      "examples": [
        {
          "input": "nums = [1, 2, 3, 4, 6], target = 6",
          "output": "[1, 3]",
          "explanation": "nums[1] + nums[3] = 2 + 4 = 6"
        }
      ],
      "constraints": [
        "2 <= nums.length <= 10^5",
        "Array is sorted in ascending order."
      ],
      "hints": [
        "Use a pointer at the beginning and a pointer at the end of the array."
      ],
      "approach": "Since the array is sorted, initialize a left pointer at 0 and right pointer at length - 1. If sum is too small, increment left. If too large, decrement right.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)",
      "solution": "function twoSum(nums, target) {\n  for (let i = 0; i < nums.length; i++) {\n    for (let j = i + 1; j < nums.length; j++) {\n      if (nums[i] + nums[j] === target) return [i, j];\n    }\n  }\n  return [-1, -1];\n}\n",
      "optimizedSolution": "function twoSum(nums, target) {\n  let left = 0,\n    right = nums.length - 1;\n  while (left < right) {\n    let sum = nums[left] + nums[right];\n    if (sum === target) return [left, right];\n    if (sum < target) left++;\n    else right--;\n  }\n  return [-1, -1];\n}\n",
      "commonMistakes": [
        "Failing to handle duplicate logic if indices need to be unique.",
        "Using nested loops (O(N^2)) instead of two pointers."
      ],
      "followUp": [
        "What if the array is not sorted?"
      ]
    },
    {
      "id": "dsa-code-12",
      "title": "Sliding Window",
      "difficulty": "Medium",
      "topics": [
        "Arrays",
        "Sliding Window"
      ],
      "problemStatement": "Given an array of integers and a number k, find the maximum sum of a contiguous subarray of size k.",
      "examples": [
        {
          "input": "arr = [2, 1, 5, 1, 3, 2], k = 3",
          "output": "9",
          "explanation": "Subarray with maximum sum is [5, 1, 3]."
        }
      ],
      "constraints": [
        "1 <= k <= arr.length <= 10^5"
      ],
      "hints": [
        "Instead of calculating the sum of every k-sized subarray from scratch, subtract the element going out and add the element coming in."
      ],
      "approach": "Calculate the sum of the first k elements. Then, slide the window by subtracting the first element of the previous window and adding the next element of the array. Track the maximum sum.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)",
      "solution": "function maxSumSubarray(arr, k) {\n  let max = -Infinity;\n  for (let i = 0; i <= arr.length - k; i++) {\n    let sum = 0;\n    for (let j = 0; j < k; j++) sum += arr[i + j];\n    if (sum > max) max = sum;\n  }\n  return max;\n}\n",
      "optimizedSolution": "function maxSumSubarray(arr, k) {\n  let maxSum = 0,\n    tempSum = 0;\n  for (let i = 0; i < k; i++) maxSum += arr[i];\n  tempSum = maxSum;\n  for (let i = k; i < arr.length; i++) {\n    tempSum = tempSum - arr[i - k] + arr[i];\n    maxSum = Math.max(maxSum, tempSum);\n  }\n  return maxSum;\n}\n",
      "commonMistakes": [
        "Recalculating the sum of the entire window every time, resulting in O(N*K) time complexity."
      ],
      "followUp": [
        "What if k is not fixed but you need a target sum?"
      ]
    },
    {
      "id": "dsa-code-13",
      "title": "Recursion",
      "difficulty": "Easy",
      "topics": [
        "Recursion",
        "Math"
      ],
      "problemStatement": "Write a function that calculates the nth Fibonacci number recursively.",
      "examples": [
        {
          "input": "n = 5",
          "output": "5",
          "explanation": "Fibonacci sequence: 0, 1, 1, 2, 3, 5"
        }
      ],
      "constraints": [
        "0 <= n <= 30"
      ],
      "hints": [
        "Base cases are n=0 -> 0, n=1 -> 1. Recursive step is F(n) = F(n-1) + F(n-2)."
      ],
      "approach": "Define base cases for 0 and 1. For other numbers, return the sum of the function called with n-1 and n-2. Use memoization to optimize.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(N)",
      "solution": "function fib(n) {\n  if (n <= 1) return n;\n  return fib(n - 1) + fib(n - 2);\n}\n",
      "optimizedSolution": "function fib(n, memo = {}) {\n  if (n in memo) return memo[n];\n  if (n <= 1) return n;\n  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);\n  return memo[n];\n}\n",
      "commonMistakes": [
        "Missing base cases causing stack overflow.",
        "Not using memoization, resulting in Exponential time."
      ],
      "followUp": [
        "Can you do it iteratively in O(1) space?"
      ]
    },
    {
      "id": "dsa-code-14",
      "title": "DFS",
      "difficulty": "Medium",
      "topics": [
        "Graphs",
        "DFS"
      ],
      "problemStatement": "Given an adjacency list representing a graph and a starting node, return an array of nodes visited using Depth First Search.",
      "examples": [
        {
          "input": "graph = {A:['B','C'], B:['D'], C:['E'], D:[], E:[]}, start = 'A'",
          "output": "['A', 'B', 'D', 'C', 'E']",
          "explanation": "DFS traversal order."
        }
      ],
      "constraints": [
        "Graph has V vertices and E edges.",
        "1 <= V <= 1000"
      ],
      "hints": [
        "Use a recursion or a stack to explore as far down a branch as possible before backtracking."
      ],
      "approach": "Use a recursive helper function. Keep track of visited nodes in a Set or object. Add node to result array and visit all its unvisited neighbors.",
      "timeComplexity": "O(V + E)",
      "spaceComplexity": "O(V)",
      "solution": "function dfsRecursive(graph, start) {\n  let result = [],\n    visited = {};\n  function dfs(vertex) {\n    if (!vertex) return;\n    visited[vertex] = true;\n    result.push(vertex);\n    graph[vertex].forEach((neighbor) => {\n      if (!visited[neighbor]) dfs(neighbor);\n    });\n  }\n  dfs(start);\n  return result;\n}\n",
      "optimizedSolution": "function dfsIterative(graph, start) {\n  let result = [],\n    visited = {},\n    stack = [start];\n  visited[start] = true;\n  while (stack.length) {\n    let current = stack.pop();\n    result.push(current);\n    graph[current].forEach((neighbor) => {\n      if (!visited[neighbor]) {\n        visited[neighbor] = true;\n        stack.push(neighbor);\n      }\n    });\n  }\n  return result;\n}\n",
      "commonMistakes": [
        "Not keeping track of visited nodes leading to infinite loops in cyclic graphs."
      ],
      "followUp": [
        "How does the iterative output order differ from recursive?"
      ]
    },
    {
      "id": "dsa-code-15",
      "title": "BFS",
      "difficulty": "Medium",
      "topics": [
        "Graphs",
        "BFS"
      ],
      "problemStatement": "Given an adjacency list representing a graph and a starting node, return an array of nodes visited using Breadth First Search.",
      "examples": [
        {
          "input": "graph = {A:['B','C'], B:['D'], C:['E'], D:[], E:[]}, start = 'A'",
          "output": "['A', 'B', 'C', 'D', 'E']",
          "explanation": "BFS traversal order."
        }
      ],
      "constraints": [
        "Graph has V vertices and E edges.",
        "1 <= V <= 1000"
      ],
      "hints": [
        "Use a queue to explore all neighbors of a node before moving to the next level."
      ],
      "approach": "Initialize a queue with the starting node. While the queue is not empty, dequeue a node, add it to results, and enqueue all its unvisited neighbors.",
      "timeComplexity": "O(V + E)",
      "spaceComplexity": "O(V)",
      "solution": "function bfs(graph, start) {\n  let queue = [start],\n    result = [],\n    visited = { [start]: true };\n  while (queue.length) {\n    let current = queue.shift();\n    result.push(current);\n    graph[current].forEach((neighbor) => {\n      if (!visited[neighbor]) {\n        visited[neighbor] = true;\n        queue.push(neighbor);\n      }\n    });\n  }\n  return result;\n}\n",
      "optimizedSolution": "function bfs(graph, start) {\n  // In a real scenario, use a real Queue class instead of Array.shift() for O(1) dequeue\n  let queue = [start],\n    result = [],\n    visited = new Set([start]);\n  while (queue.length) {\n    let current = queue.shift();\n    result.push(current);\n    for (let neighbor of graph[current]) {\n      if (!visited.has(neighbor)) {\n        visited.add(neighbor);\n        queue.push(neighbor);\n      }\n    }\n  }\n  return result;\n}\n",
      "commonMistakes": [
        "Using Array.shift() in tight loops can cause performance drops on huge datasets."
      ],
      "followUp": [
        "How can BFS be used to find the shortest path in an unweighted graph?"
      ]
    },
    {
      "id": "dsa-code-16",
      "title": "Tree Traversal",
      "difficulty": "Easy",
      "topics": [
        "Trees",
        "Binary Tree",
        "DFS"
      ],
      "problemStatement": "Implement InOrder traversal for a binary tree.",
      "examples": [
        {
          "input": "root = [1,null,2,3]",
          "output": "[1,3,2]",
          "explanation": "Inorder traversal visits Left, Root, Right."
        }
      ],
      "constraints": [
        "Number of nodes is in range [0, 100]"
      ],
      "hints": [
        "Traverse the left subtree, visit the root, traverse the right subtree."
      ],
      "approach": "Create a recursive function that takes a node, calls itself on the left child, pushes the node's value to an array, and calls itself on the right child.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(H)",
      "solution": "function inorder(root) {\n  let res = [];\n  function traverse(node) {\n    if (!node) return;\n    traverse(node.left);\n    res.push(node.val);\n    traverse(node.right);\n  }\n  traverse(root);\n  return res;\n}\n",
      "optimizedSolution": "function inorderIterative(root) {\n  let res = [],\n    stack = [],\n    current = root;\n  while (current || stack.length) {\n    while (current) {\n      stack.push(current);\n      current = current.left;\n    }\n    current = stack.pop();\n    res.push(current.val);\n    current = current.right;\n  }\n  return res;\n}\n",
      "commonMistakes": [
        "Confusing the order of InOrder, PreOrder, and PostOrder."
      ],
      "followUp": [
        "Can you implement PostOrder iteratively?"
      ]
    },
    {
      "id": "dsa-code-17",
      "title": "Binary Tree Height",
      "difficulty": "Easy",
      "topics": [
        "Trees",
        "Binary Tree",
        "DFS"
      ],
      "problemStatement": "Given the root of a binary tree, return its maximum depth/height.",
      "examples": [
        {
          "input": "root = [3,9,20,null,null,15,7]",
          "output": "3",
          "explanation": "The longest path from root to leaf has 3 nodes."
        }
      ],
      "constraints": [
        "Number of nodes is in range [0, 10^4]"
      ],
      "hints": [
        "A tree's depth is 1 + the max depth of its left and right subtrees."
      ],
      "approach": "Recursively calculate the depth of the left subtree and right subtree. Return 1 + the maximum of those two depths.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(H)",
      "solution": "function maxDepth(root) {\n  if (!root) return 0;\n  let leftDepth = maxDepth(root.left);\n  let rightDepth = maxDepth(root.right);\n  return 1 + Math.max(leftDepth, rightDepth);\n}\n",
      "optimizedSolution": "const maxDepth = (root) =>\n  root ? 1 + Math.max(maxDepth(root.left), maxDepth(root.right)) : 0;\n",
      "commonMistakes": [
        "Returning 0 for a leaf node instead of 1, depending on if you are counting nodes or edges."
      ],
      "followUp": [
        "How would you do this iteratively using BFS?"
      ]
    },
    {
      "id": "dsa-code-18",
      "title": "Balanced Parentheses",
      "difficulty": "Medium",
      "topics": [
        "Strings",
        "Stack"
      ],
      "problemStatement": "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. A string is valid if open brackets are closed by the same type of brackets in the correct order.",
      "examples": [
        {
          "input": "s = \"()[]{}\"",
          "output": "true",
          "explanation": "Every opening bracket has a matching closing bracket."
        }
      ],
      "constraints": [
        "1 <= s.length <= 10^4"
      ],
      "hints": [
        "Use a stack. Push opening brackets. When encountering a closing bracket, pop the stack and check if they match."
      ],
      "approach": "Iterate through the string. Push opening brackets to a stack. If a closing bracket is found, pop the stack and verify it corresponds to the current closing bracket. At the end, the stack must be empty.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(N)",
      "solution": "function isValid(s) {\n  let stack = [];\n  for (let i = 0; i < s.length; i++) {\n    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {\n      stack.push(s[i]);\n    } else {\n      let last = stack.pop();\n      if (s[i] === ')' && last !== '(') return false;\n      if (s[i] === '}' && last !== '{') return false;\n      if (s[i] === ']' && last !== '[') return false;\n    }\n  }\n  return stack.length === 0;\n}\n",
      "optimizedSolution": "function isValid(s) {\n  const map = { ')': '(', '}': '{', ']': '[' };\n  const stack = [];\n  for (const char of s) {\n    if (char === '(' || char === '{' || char === '[') {\n      stack.push(char);\n    } else {\n      if (stack.pop() !== map[char]) return false;\n    }\n  }\n  return stack.length === 0;\n}\n",
      "commonMistakes": [
        "Not checking if the stack is empty at the end (e.g. input '[')."
      ],
      "followUp": [
        "What if there are other characters in the string besides brackets?"
      ]
    },
    {
      "id": "dsa-code-19",
      "title": "Longest Common Prefix",
      "difficulty": "Easy",
      "topics": [
        "Strings"
      ],
      "problemStatement": "Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string.",
      "examples": [
        {
          "input": "strs = [\"flower\",\"flow\",\"flight\"]",
          "output": "\"fl\"",
          "explanation": "The common prefix is 'fl'."
        }
      ],
      "constraints": [
        "1 <= strs.length <= 200",
        "0 <= strs[i].length <= 200"
      ],
      "hints": [
        "Compare the first string with the second, find their common prefix, then compare that prefix with the third string, and so on."
      ],
      "approach": "Take the first string as the initial prefix. Loop through the remaining strings and continuously shorten the prefix from the end until the current string starts with the prefix.",
      "timeComplexity": "O(S)",
      "spaceComplexity": "O(1)",
      "solution": "function longestCommonPrefix(strs) {\n  if (!strs.length) return '';\n  let prefix = strs[0];\n  for (let i = 1; i < strs.length; i++) {\n    while (strs[i].indexOf(prefix) !== 0) {\n      prefix = prefix.substring(0, prefix.length - 1);\n      if (prefix === '') return '';\n    }\n  }\n  return prefix;\n}\n",
      "optimizedSolution": "function longestCommonPrefix(strs) {\n  if (!strs.length) return '';\n  strs.sort();\n  let first = strs[0],\n    last = strs[strs.length - 1],\n    i = 0;\n  while (i < first.length && i < last.length && first[i] === last[i])\n    i++;\n  return first.substring(0, i);\n}\n",
      "commonMistakes": [
        "Using indexOf instead of checking strictly from index 0."
      ],
      "followUp": [
        "Can you do it using a Trie data structure?"
      ]
    },
    {
      "id": "dsa-code-20",
      "title": "Kadane's Algorithm",
      "difficulty": "Medium",
      "topics": [
        "Arrays",
        "Dynamic Programming"
      ],
      "problemStatement": "Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
      "examples": [
        {
          "input": "nums = [-2,1,-3,4,-1,2,1,-5,4]",
          "output": "6",
          "explanation": "[4,-1,2,1] has the largest sum = 6."
        }
      ],
      "constraints": [
        "1 <= nums.length <= 10^5",
        "-10^4 <= nums[i] <= 10^4"
      ],
      "hints": [
        "If the current sum becomes negative, it's better to start a new subarray from the next element."
      ],
      "approach": "Iterate over the array, keeping track of the current subarray sum. If the sum drops below zero, reset it to 0. Update the maximum sum encountered so far.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)",
      "solution": "function maxSubArray(nums) {\n  let max = nums[0];\n  for (let i = 0; i < nums.length; i++) {\n    let sum = 0;\n    for (let j = i; j < nums.length; j++) {\n      sum += nums[j];\n      if (sum > max) max = sum;\n    }\n  }\n  return max;\n}\n",
      "optimizedSolution": "function maxSubArray(nums) {\n  let currentMax = nums[0],\n    globalMax = nums[0];\n  for (let i = 1; i < nums.length; i++) {\n    currentMax = Math.max(nums[i], currentMax + nums[i]);\n    globalMax = Math.max(globalMax, currentMax);\n  }\n  return globalMax;\n}\n",
      "commonMistakes": [
        "Returning 0 if all numbers are negative. The answer should be the maximum negative number."
      ],
      "followUp": [
        "Can you return the start and end indices of the max subarray?"
      ]
    },
    {
      "id": "dsa-code-21",
      "title": "Merge Intervals",
      "difficulty": "Medium",
      "topics": [
        "Arrays",
        "Sorting"
      ],
      "problemStatement": "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals.",
      "examples": [
        {
          "input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
          "output": "[[1,6],[8,10],[15,18]]",
          "explanation": "Intervals [1,3] and [2,6] overlap, so they merge into [1,6]."
        }
      ],
      "constraints": [
        "1 <= intervals.length <= 10^4",
        "intervals[i].length == 2"
      ],
      "hints": [
        "Sort the intervals based on the start time."
      ],
      "approach": "Sort intervals by start time. Iterate through them, and if the current interval's start time is less than or equal to the previous interval's end time, merge them by updating the end time.",
      "timeComplexity": "O(N log N)",
      "spaceComplexity": "O(N)",
      "solution": "function merge(intervals) {\n  intervals.sort((a, b) => a[0] - b[0]);\n  let merged = [intervals[0]];\n  for (let i = 1; i < intervals.length; i++) {\n    let lastMerged = merged[merged.length - 1];\n    if (intervals[i][0] <= lastMerged[1]) {\n      lastMerged[1] = Math.max(lastMerged[1], intervals[i][1]);\n    } else {\n      merged.push(intervals[i]);\n    }\n  }\n  return merged;\n}\n",
      "optimizedSolution": "function merge(intervals) {\n  if (!intervals.length) return [];\n  intervals.sort((a, b) => a[0] - b[0]);\n  const result = [intervals[0]];\n  for (let [start, end] of intervals) {\n    const lastEnd = result[result.length - 1][1];\n    if (start <= lastEnd) {\n      result[result.length - 1][1] = Math.max(lastEnd, end);\n    } else {\n      result.push([start, end]);\n    }\n  }\n  return result;\n}\n",
      "commonMistakes": [
        "Not sorting the intervals first.",
        "Not taking the maximum of the end times when merging."
      ],
      "followUp": [
        "How would you insert a new interval into an already sorted list of non-overlapping intervals?"
      ]
    },
    {
      "id": "dsa-code-22",
      "title": "Valid Parentheses",
      "difficulty": "Easy",
      "topics": [
        "Strings",
        "Stack"
      ],
      "problemStatement": "Given a string s containing just the characters '(', ')', determine if the input string is valid. Open brackets must be closed by the same type of brackets in the correct order.",
      "examples": [
        {
          "input": "s = \"(())\"",
          "output": "true",
          "explanation": "Correctly matched."
        }
      ],
      "constraints": [
        "1 <= s.length <= 10^4"
      ],
      "hints": [
        "You can simply keep a counter since there's only one type of bracket."
      ],
      "approach": "Instead of a stack, since there is only one type of bracket, we can just maintain a count. Increment for '(', decrement for ')'. If count goes below 0, it's invalid. Must end at 0.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)",
      "solution": "function isValidSimple(s) {\n  let stack = [];\n  for (let char of s) {\n    if (char === '(') stack.push(char);\n    else {\n      if (!stack.length) return false;\n      stack.pop();\n    }\n  }\n  return stack.length === 0;\n}\n",
      "optimizedSolution": "function isValidSimple(s) {\n  let count = 0;\n  for (let i = 0; i < s.length; i++) {\n    if (s[i] === '(') count++;\n    else count--;\n    if (count < 0) return false;\n  }\n  return count === 0;\n}\n",
      "commonMistakes": [
        "Returning true if the string is just '(' without checking count at the end."
      ],
      "followUp": [
        "What if you need to find the length of the longest valid parentheses substring?"
      ]
    },
    {
      "id": "dsa-code-23",
      "title": "Rotate Array",
      "difficulty": "Medium",
      "topics": [
        "Arrays",
        "Math"
      ],
      "problemStatement": "Given an array, rotate the array to the right by k steps, where k is non-negative.",
      "examples": [
        {
          "input": "nums = [1,2,3,4,5,6,7], k = 3",
          "output": "[5,6,7,1,2,3,4]",
          "explanation": "Rotate right by 3 steps."
        }
      ],
      "constraints": [
        "1 <= nums.length <= 10^5",
        "0 <= k <= 10^5"
      ],
      "hints": [
        "Try reversing the entire array, then reversing the first k elements, then the rest."
      ],
      "approach": "To achieve O(1) space, reverse the whole array, then reverse the first k elements, then reverse the remaining n-k elements. Modulo k by n first.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)",
      "solution": "function rotate(nums, k) {\n  k = k % nums.length;\n  let temp = nums.splice(nums.length - k);\n  nums.unshift(...temp);\n}\n",
      "optimizedSolution": "function rotate(nums, k) {\n  k %= nums.length;\n  const reverse = (arr, start, end) => {\n    while (start < end) {\n      [arr[start], arr[end]] = [arr[end], arr[start]];\n      start++;\n      end--;\n    }\n  };\n  reverse(nums, 0, nums.length - 1);\n  reverse(nums, 0, k - 1);\n  reverse(nums, k, nums.length - 1);\n}\n",
      "commonMistakes": [
        "Using unshift and splice repeatedly, resulting in O(N^2) complexity.",
        "Not handling k > array.length properly by using k % length."
      ],
      "followUp": [
        "Can you do this using cyclic replacements?"
      ]
    },
    {
      "id": "dsa-code-24",
      "title": "Move Zeroes",
      "difficulty": "Easy",
      "topics": [
        "Arrays",
        "Two Pointers"
      ],
      "problemStatement": "Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements. You must do this in-place without making a copy of the array.",
      "examples": [
        {
          "input": "nums = [0,1,0,3,12]",
          "output": "[1,3,12,0,0]",
          "explanation": "Zeroes moved to end, order of 1,3,12 preserved."
        }
      ],
      "constraints": [
        "1 <= nums.length <= 10^4"
      ],
      "hints": [
        "Keep a pointer for the position where the next non-zero element should be written."
      ],
      "approach": "Iterate with a fast pointer. Whenever a non-zero element is found, swap it with the element at the slow pointer, and increment the slow pointer.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)",
      "solution": "function moveZeroes(nums) {\n  let nonZeros = nums.filter((n) => n !== 0);\n  let zeros = nums.filter((n) => n === 0);\n  let res = [...nonZeros, ...zeros];\n  for (let i = 0; i < nums.length; i++) nums[i] = res[i];\n}\n",
      "optimizedSolution": "function moveZeroes(nums) {\n  let insertPos = 0;\n  for (let i = 0; i < nums.length; i++) {\n    if (nums[i] !== 0) {\n      [nums[insertPos], nums[i]] = [nums[i], nums[insertPos]];\n      insertPos++;\n    }\n  }\n}\n",
      "commonMistakes": [
        "Creating a new array, violating the in-place constraint.",
        "Using Array.splice() in a loop, causing O(N^2) complexity."
      ],
      "followUp": [
        "How can you minimize the total number of operations if the array has very few non-zero elements?"
      ]
    },
    {
      "id": "dsa-code-25",
      "title": "Maximum Subarray",
      "difficulty": "Medium",
      "topics": [
        "Arrays",
        "Divide and Conquer",
        "Dynamic Programming"
      ],
      "problemStatement": "Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum. (Alternative Kadane's)",
      "examples": [
        {
          "input": "nums = [5,4,-1,7,8]",
          "output": "23",
          "explanation": "The entire array has the max sum of 23."
        }
      ],
      "constraints": [
        "1 <= nums.length <= 10^5"
      ],
      "hints": [
        "Think about Kadane's algorithm, or try a divide and conquer approach."
      ],
      "approach": "Kadane's algorithm is optimal. For an alternative, use divide and conquer: split array in half, max subarray is either entirely in left, entirely in right, or crossing the midpoint.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)",
      "solution": "function maxSubArray(nums) {\n  let maxSoFar = nums[0],\n    maxEndingHere = nums[0];\n  for (let i = 1; i < nums.length; i++) {\n    maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);\n    maxSoFar = Math.max(maxSoFar, maxEndingHere);\n  }\n  return maxSoFar;\n}\n",
      "optimizedSolution": "function maxSubArray(nums) {\n  // Divide and conquer approach (O(N log N)) for variety\n  function helper(arr, left, right) {\n    if (left === right) return arr[left];\n    let mid = Math.floor((left + right) / 2);\n    let leftMax = helper(arr, left, mid);\n    let rightMax = helper(arr, mid + 1, right);\n    let crossMax = crossSum(arr, left, right, mid);\n    return Math.max(leftMax, rightMax, crossMax);\n  }\n  function crossSum(arr, left, right, mid) {\n    let leftSum = -Infinity,\n      currSum = 0;\n    for (let i = mid; i >= left; i--) {\n      currSum += arr[i];\n      leftSum = Math.max(leftSum, currSum);\n    }\n    let rightSum = -Infinity;\n    currSum = 0;\n    for (let i = mid + 1; i <= right; i++) {\n      currSum += arr[i];\n      rightSum = Math.max(rightSum, currSum);\n    }\n    return leftSum + rightSum;\n  }\n  return helper(nums, 0, nums.length - 1);\n}\n",
      "commonMistakes": [
        "Initializing max sum as 0 instead of the first element, which fails for all-negative arrays."
      ],
      "followUp": [
        "Can you print the actual subarray along with the sum?"
      ]
    }
  ]
};
