export const javascript = {
  title: "JavaScript Core & Advanced",
  subtitle: "The engine of the web. Master these 45 concepts to crack any frontend or backend interview.",
  questions: [
    {
      id: "js-26",
      question: "var vs let vs const",
      answer: "'var' is function-scoped and can be re-declared. 'let' and 'const' are block-scoped. 'let' can be reassigned, 'const' cannot.",
      story: { title: "The Fences", text: "var ignores wooden fences (block scope {}). let and const respect the fences, staying trapped inside the block they were defined in." },
      code: `if(true) {\n  var x = 1; \n  let y = 2;\n}\nconsole.log(x); // 1\n// console.log(y); // Error`,
      output: "1",
      outputExplanation: "The variable 'x' is declared with 'var', which is not block-scoped. It gets hoisted to the global or function scope, allowing it to be accessed outside the 'if' block. If 'y' were logged, it would throw a ReferenceError because 'let' is strictly block-scoped to the 'if' statement."
    },
    {
      id: "js-27",
      question: "Primitive vs Reference Types",
      answer: "Primitives (string, number, boolean, null, undefined, symbol) are passed by VALUE. Reference types (objects, arrays, functions) are passed by REFERENCE (memory address).",
      story: { title: "The Photograph vs The House Key", text: "Passing a primitive is giving someone a photograph of your house. If they draw on it, your real house is fine. Passing a reference is giving them your house key. If they paint the walls inside, your real house changes!" },
      code: `let a = 10; let b = a; b = 20; // a is still 10\nlet obj1 = { name: "John" }; let obj2 = obj1; obj2.name = "Doe"; // obj1 is now "Doe" too!`,
      output: "",
      outputExplanation: "Although this code doesn't print anything to the console, internally 'a' remains 10 because primitives are copied by value. However, 'obj1.name' becomes 'Doe' because objects are copied by reference, so 'obj1' and 'obj2' point to the exact same memory location."
    },
    {
      id: "js-28",
      question: "== vs ===",
      answer: "== (Loose equality) compares values after attempting type coercion. === (Strict equality) compares both value AND type without coercion. Always use ===.",
      story: { title: "The Bouncer", text: "== is a lazy bouncer who lets a 21-year-old in, but also lets someone in wearing a shirt that says '21'. === is a strict bouncer who checks the actual ID type." },
      code: `console.log(5 == "5"); // true\nconsole.log(5 === "5"); // false`,
      output: "true\nfalse",
      outputExplanation: "The first statement evaluates to 'true' because '==' performs type coercion, converting the string '5' to the number 5 before comparing. The second evaluates to 'false' because '===' checks both value and type strictly, and a number is not the same type as a string."
    },
    {
      id: "js-29",
      question: "Truthy vs Falsy Values",
      answer: "A falsy value translates to false when evaluated in a Boolean context. There are exactly 6 falsy values in JS: false, 0, '', null, undefined, NaN. Everything else is truthy.",
      story: { title: "The Empty Boxes", text: "If a box is empty (0, empty string, null), JS considers it a 'No'. Even an empty array [] or object {} is technically a box that exists, so it's a 'Yes'." },
      code: `if ("") { console.log("Won't run"); }\nif ([]) { console.log("Will run!"); }`,
      output: "Will run!",
      outputExplanation: "An empty string \"\" is a falsy value, so the first condition is evaluated as false and its block is skipped. An empty array [] is an object, and all objects (even empty ones) are truthy in JavaScript, so the second block runs and prints the message."
    },
    {
      id: "js-30",
      question: "Hoisting",
      answer: "Hoisting moves declarations to the top of the scope before execution. 'var' is hoisted as undefined. 'let/const' are hoisted but remain in the Temporal Dead Zone (TDZ).",
      story: { title: "The VIP List", text: "Like a bouncer writing down names before a party (declarations). He doesn't check IDs (initializations) until they enter. Asking for ID early gets an error (TDZ)." },
      code: `console.log(a); // undefined\nvar a = 10;\n// console.log(b); // ReferenceError\nlet b = 20;`,
      output: "undefined",
      outputExplanation: "The declaration of 'a' using 'var' is hoisted to the top of the scope and initialized with 'undefined'. Thus, logging it before its actual assignment line prints 'undefined'. Variables declared with 'let' or 'const' are also hoisted but not initialized, residing in the Temporal Dead Zone, which is why accessing 'b' early would throw a ReferenceError."
    },
    {
      id: "js-31",
      question: "Scope",
      answer: "Scope determines the accessibility (visibility) of variables. JS has Global Scope, Function Scope, and Block Scope (introduced in ES6 for let/const).",
      story: { title: "The One-Way Mirror", text: "Inner scopes can look out through a one-way mirror to see outer variables, but outer scopes cannot look inside to see inner variables." },
      code: `let globalVar = "I am global";\nfunction test() {\n  let localVar = "I am local";\n  console.log(globalVar); // Works\n}\n// console.log(localVar); // Error`,
      output: "",
      outputExplanation: "This specific snippet only defines a variable and a function; the function 'test()' is never called, so nothing prints. If 'test()' were called, it would print 'I am global' because functions have access to their outer lexical scope. Accessing 'localVar' outside the function fails because it is confined to the function's scope."
    },
    {
      id: "js-32",
      question: "Closures",
      answer: "A closure is when an inner function has access to the outer function's variables, even after the outer function has returned. This achieves data privacy.",
      story: { title: "The Backpack", text: "Imagine you pack for a trip. When you travel to a new location (returned function), you carry your backpack (the closure). You can always reach in and grab those variables." },
      code: `function makeCounter() {\n  let count = 0;\n  return () => count++;\n}\nconst counter = makeCounter();\nconsole.log(counter()); // 0`,
      output: "0",
      outputExplanation: "The 'makeCounter' function returns an inner arrow function that increments and returns 'count'. Because of closures, this inner function retains access to the 'count' variable declared in its parent's scope even after 'makeCounter' has finished executing. The postfix 'count++' returns the current value (0) before incrementing it to 1."
    },
    {
      id: "js-33",
      question: "Lexical Scope",
      answer: "Lexical scope means that the scope of a variable is determined by its position in the source code. Nested functions have access to variables declared in their outer scope.",
      story: { title: "The Russian Dolls", text: "The smallest inner doll can ask the slightly bigger doll for a variable, which can ask the next bigger one, all the way to the largest outer doll." },
      code: `function outer() {\n  let x = 10;\n  function inner() { console.log(x); } // Lexically bound to outer's x\n  inner();\n}`,
      output: "",
      outputExplanation: "Like snippet 31, 'outer()' is defined but never invoked, so there is no console output. If called, it would log '10' because 'inner()' relies on lexical scoping to look up the 'x' variable declared in its immediately enclosing function."
    },
    {
      id: "js-34",
      question: "this Keyword",
      answer: "'this' refers to the object that is currently executing the function. In global scope, it's window. In a method, it's the owner object.",
      story: { title: "The ID Badge", text: "When you use a company printer, your ID badge ('this') tells the printer who is printing." },
      code: `const obj = { name: 'John', print() { console.log(this.name); } };\nobj.print(); // "John"`,
      output: "John",
      outputExplanation: "When the 'print' method is called as a property of 'obj' (i.e., 'obj.print()'), the 'this' context inside the method implicitly points to the object before the dot ('obj'). Therefore, 'this.name' resolves to 'John'."
    },
    {
      id: "js-35",
      question: "Arrow Functions",
      answer: "Arrow functions provide a concise syntax and do not bind their own 'this'. They inherit 'this' lexically from the parent scope.",
      story: { title: "The Borrowed Badge", text: "If a friend uses your ID badge (arrow function), the printer logs the print under your name, not theirs. They have no identity of their own." },
      code: `const obj = { \n  name: 'John', \n  arrow: () => console.log(this.name) // Inherits from global, usually undefined\n};`,
      output: "",
      outputExplanation: "The code defines an object but doesn't call the method, producing no output. If 'obj.arrow()' were called, it would log 'undefined' (or an empty string in a browser) because arrow functions do not have their own 'this' binding. They inherit 'this' from the enclosing lexical context, which in this case is the global object, where 'name' is usually undefined."
    },
    {
      id: "js-36",
      question: "Function Declaration vs Expression",
      answer: "A Function Declaration defines a named function and is fully hoisted. A Function Expression assigns a function to a variable and is NOT hoisted.",
      story: { title: "The Blueprint vs The Variable", text: "A declaration is a blueprint given to the builder before construction starts. An expression is a variable handed to the builder halfway through the day." },
      code: `// Declaration (Hoisted)\nfoo(); function foo() {}\n// Expression (Not hoisted)\n// bar(); // Error!\nconst bar = function() {};`,
      output: "",
      outputExplanation: "The function 'foo' runs without errors because function declarations are fully hoisted (both the name and the body) to the top of their scope. Calling 'bar' before its initialization would result in an error because function expressions assigned to 'const' or 'let' are not hoisted (they remain in the Temporal Dead Zone)."
    },
    {
      id: "js-37",
      question: "Callback Functions",
      answer: "A callback is a function passed as an argument to another function, which is then invoked inside the outer function to complete some kind of routine or action.",
      story: { title: "Call Me Back", text: "You call a customer service line. They are busy, so you leave your number (the callback). When they are free, they 'call you back' to finish the task." },
      code: `function fetchData(callback) {\n  setTimeout(() => callback("Data loaded"), 1000);\n}\nfetchData((data) => console.log(data));`,
      output: "Data loaded",
      outputExplanation: "The 'fetchData' function receives an anonymous arrow function as a callback. After a simulated 1-second delay via setTimeout, 'fetchData' invokes the callback, passing 'Data loaded' as the argument. The callback then executes and logs the argument."
    },
    {
      id: "js-38",
      question: "Callback Hell",
      answer: "Callback Hell (Pyramid of Doom) occurs when multiple asynchronous operations are nested inside each other's callbacks, making the code unreadable and hard to debug.",
      story: { title: "The Endless Matryoshka", text: "Opening a doll to find another doll, opening that to find another, until you are 10 levels deep and forgot why you started opening them." },
      code: `step1(function(res1) {\n  step2(res1, function(res2) {\n    step3(res2, function(res3) {\n      // This is hell\n    });\n  });\n});`,
      output: "",
      outputExplanation: "This is pseudocode representing deeply nested callbacks. There's no output since 'step1', 'step2', and 'step3' are not defined. It illustrates how chaining sequential asynchronous operations using callbacks forces deep indentation, known as Callback Hell or the Pyramid of Doom."
    },
    {
      id: "js-39",
      question: "Promises",
      answer: "A Promise represents the eventual completion of an async operation. It has 3 states: Pending, Fulfilled, or Rejected. It solves Callback Hell via chaining (.then).",
      story: { title: "The Restaurant Pager", text: "A pager is 'Pending'. It buzzes (Fulfills) when food is ready. It flashes red (Rejects) if they ran out of food." },
      code: `const myPromise = new Promise((resolve, reject) => {\n  setTimeout(() => resolve("Success!"), 1000);\n});\nmyPromise.then(res => console.log(res));`,
      output: "Success!",
      outputExplanation: "A new Promise is created and enters the 'Pending' state. After 1000ms, the setTimeout triggers the 'resolve' function with 'Success!', shifting the Promise to a 'Fulfilled' state. This triggers the '.then()' handler, which receives the resolved value and logs it to the console."
    },
    {
      id: "js-40",
      question: "async/await",
      answer: "Syntactic sugar over Promises. 'async' makes a function return a Promise. 'await' pauses execution until the Promise settles, making async code look synchronous.",
      story: { title: "Standing in Line", text: "Instead of taking a pager (.then) and walking away, 'await' is you simply standing at the counter waiting until the food is handed to you." },
      code: `async function getData() {\n  try {\n    const res = await fetch('/api');\n    const data = await res.json();\n  } catch(e) { console.error(e); }\n}`,
      output: "",
      outputExplanation: "The function is only declared, not invoked, so there is no output. If called, the runtime pauses execution at each 'await' keyword until the returned Promise settles (either fetching data or parsing JSON). If any Promise rejects, the execution jumps straight to the 'catch' block."
    },
    {
      id: "js-41",
      question: "Promise.all(), race(), any(), allSettled()",
      answer: "all(): Fails if ANY fail, succeeds if ALL succeed. race(): Returns the FIRST to finish (success or fail). any(): Returns FIRST to succeed. allSettled(): Waits for all, regardless of pass/fail.",
      story: { title: "The Horse Race", text: "all() = bet all 5 horses win. race() = bet on the fastest horse. any() = bet that at least one horse crosses the finish line alive. allSettled() = wait until every horse is back in the stable." },
      code: `Promise.all([p1, p2]).then(values => console.log(values));`,
      output: "",
      outputExplanation: "This snippet uses undefined variables (p1, p2) so it would throw a ReferenceError. Conceptually, if p1 and p2 were valid Promises, Promise.all() would wait for both to fulfill, returning an array of their resolved results in order. If either Promise rejected, the entire Promise.all() would immediately reject."
    },
    {
      id: "js-42",
      question: "Event Loop",
      answer: "The Event Loop monitors the Call Stack and the Callback/Microtask queues. If the Stack is empty, it pushes tasks from the Microtask Queue first, then the Callback Queue to the Stack.",
      story: { title: "The Kitchen Manager", text: "The Manager watches the Chef (Stack). When the Chef is free, the Manager hands them high-priority tasks (Microtasks) first, then regular orders (Callbacks)." },
      code: `setTimeout(() => console.log("Macrotask"), 0);\nPromise.resolve().then(() => console.log("Microtask"));\n// Output: Microtask, Macrotask`,
      output: "Microtask\nMacrotask",
      outputExplanation: "Both tasks are scheduled asynchronously. However, Promises resolve into the Microtask Queue, which has a higher priority than the Callback (Macrotask) Queue where setTimeout callbacks go. The Event Loop completely drains the Microtask Queue before processing any macrotasks, meaning 'Microtask' prints first."
    },
    {
      id: "js-43",
      question: "Call Stack",
      answer: "A LIFO (Last In, First Out) data structure that records where in the program we are. If we step into a function, we push it to the stack. If we return, we pop it off.",
      story: { title: "The Stack of Plates", text: "You can only add a plate to the top of the stack, and you can only wash the plate at the top of the stack." },
      code: `function first() { second(); } \nfunction second() { console.log('Hi'); } \nfirst(); // Stack: [main() -> first() -> second()]`,
      output: "Hi",
      outputExplanation: "Calling 'first()' pushes it onto the call stack. Inside 'first()', it calls 'second()', which is pushed on top of 'first()'. 'second()' then executes 'console.log()', which prints 'Hi'. As each function finishes execution, it is sequentially popped off the stack."
    },
    {
      id: "js-44",
      question: "Web APIs",
      answer: "Features provided by the browser (not the JS engine itself), like setTimeout, DOM manipulation, fetch, and Geolocation. Node.js provides similar background C++ APIs.",
      story: { title: "The Kitchen Assistants", text: "The JS Chef can't bake, set timers, or browse the web. They hand those tasks to the Kitchen Assistants (Web APIs) who do it in the background." },
      code: `// setTimeout is NOT part of core JavaScript! It's a Web API.\nwindow.setTimeout(() => {}, 1000);`,
      output: "",
      outputExplanation: "This code delegates an empty callback function to the browser's Timer Web API for a 1-second delay. Since the callback is empty and nothing is logged, there is no console output. The JavaScript engine itself simply moves on immediately without waiting."
    },
    {
      id: "js-45",
      question: "Microtask Queue vs Callback Queue",
      answer: "The Microtask Queue (Promises, MutationObserver) has HIGHER priority than the Callback/Macrotask Queue (setTimeout, DOM events). The Event Loop empties the Microtask Queue completely before taking one item from the Callback Queue.",
      story: { title: "VIPs vs Regular Line", text: "Microtasks are VIPs. If a VIP arrives, the bouncer lets them in immediately before the regular line. If VIPs keep arriving, the regular line starves." },
      code: `setTimeout(() => console.log("Regular"));\nPromise.resolve().then(() => console.log("VIP"));`,
      output: "VIP\nRegular",
      outputExplanation: "Even though setTimeout appears first in the code and has a default 0ms delay, its callback is sent to the Macrotask Queue. The resolved Promise callback goes to the Microtask Queue. The Event Loop prioritizes emptying the Microtask Queue before processing anything in the Macrotask Queue."
    },
    {
      id: "js-46",
      question: "Debouncing",
      answer: "Debouncing ensures a function is not called again until a certain amount of time has passed without it being called. Used for search inputs.",
      story: { title: "The Elevator Door", text: "Every time someone enters, the 5-second door timer restarts. The door only closes when 5 seconds pass with NO ONE entering." },
      code: `function debounce(func, delay) {\n  let timer;\n  return (...args) => {\n    clearTimeout(timer);\n    timer = setTimeout(() => func(...args), delay);\n  };\n}`,
      output: "",
      outputExplanation: "The code defines a utility function 'debounce' but doesn't execute it, so there's no output. Conceptually, it uses closures to preserve a 'timer' variable. Each time the returned function is called, it clears any pending timer and sets a new one, ensuring 'func' is only invoked after the calls have stopped for the 'delay' duration."
    },
    {
      id: "js-47",
      question: "Throttling",
      answer: "Throttling guarantees a function is executed at most once in a specified time period. Used for window resizing or scrolling.",
      story: { title: "The Water Fountain", text: "A fountain dispenses exactly one cup every 10 seconds. Pressing the button 100 times won't get you water faster." },
      code: `function throttle(func, limit) {\n  let inThrottle;\n  return (...args) => {\n    if (!inThrottle) {\n      func(...args);\n      inThrottle = true;\n      setTimeout(() => inThrottle = false, limit);\n    }\n  };\n}`,
      output: "",
      outputExplanation: "This defines a 'throttle' function without calling it, producing no output. It limits the execution rate of a function. Using a closure, the 'inThrottle' boolean prevents subsequent calls to 'func' from running until the 'setTimeout' flips 'inThrottle' back to false after the specified 'limit'."
    },
    {
      id: "js-48",
      question: "Currying",
      answer: "Currying transforms a function with multiple arguments into a sequence of nested functions, each taking a single argument. f(a, b, c) becomes f(a)(b)(c).",
      story: { title: "The Assembly Line", text: "Instead of building a whole car at once f(wheels, doors, engine), you pass it down a line: addWheels(wheels)(doors)(engine)." },
      code: `const add = (a) => (b) => a + b;\nconsole.log(add(5)(10)); // 15`,
      output: "15",
      outputExplanation: "The 'add' function takes parameter 'a' and returns an inner function taking parameter 'b'. When 'add(5)' is called, it returns the inner function remembering 'a' as 5 via closure. Then passing '(10)' invokes this inner function with 'b' as 10, resolving '5 + 10' and printing 15."
    },
    {
      id: "js-49",
      question: "Memoization",
      answer: "Memoization is an optimization technique that speeds up programs by storing the results of expensive function calls and returning the cached result when the same inputs occur.",
      story: { title: "The Math Cheat Sheet", text: "Instead of doing 345 * 987 on a calculator every time, you write the answer on a sticky note. Next time someone asks, you just read the note." },
      code: `function memoize(fn) {\n  const cache = {};\n  return (...args) => {\n    if (cache[args]) return cache[args];\n    return cache[args] = fn(...args);\n  };\n}`,
      output: "",
      outputExplanation: "This is just a utility definition for memoization with no execution, hence no output. It returns a wrapped version of 'fn' that intercepts calls. If the arguments exist as a key in the 'cache' object, it skips execution and returns the stored value; otherwise, it computes the value, stores it, and returns it."
    },
    {
      id: "js-50",
      question: "map()",
      answer: "Creates a NEW array populated with the results of calling a provided function on every element in the calling array. It does not mutate the original.",
      story: { title: "The Paint Factory", text: "A conveyor belt of raw wood blocks goes in. A machine paints them all red. A brand new pile of red blocks comes out." },
      code: `const nums = [1, 2, 3];\nconst doubled = nums.map(n => n * 2); // [2, 4, 6]`,
      output: "",
      outputExplanation: "There are no console.log statements, so there is no terminal output. Internally, '.map()' iterates over 'nums', applying the callback to multiply each number by 2. This returns a completely new array [2, 4, 6] assigned to 'doubled', leaving the original 'nums' array untouched."
    },
    {
      id: "js-51",
      question: "filter()",
      answer: "Creates a NEW array with all elements that pass the test implemented by the provided function. Elements that fail are excluded.",
      story: { title: "The Sieve", text: "Pouring sand and rocks through a sieve. Only the fine sand (passes the test) makes it through to the new bucket." },
      code: `const nums = [1, 2, 3, 4];\nconst evens = nums.filter(n => n % 2 === 0); // [2, 4]`,
      output: "",
      outputExplanation: "This code produces no output. The '.filter()' method iterates over the array and executes the callback condition on each item. It constructs a new array, 'evens', populated only with the numbers that evaluated to true for 'n % 2 === 0' (i.e., the even numbers 2 and 4)."
    },
    {
      id: "js-52",
      question: "reduce()",
      answer: "Executes a reducer function on each element of the array, resulting in a single output value (like a sum, or a flattened array).",
      story: { title: "The Snowball", text: "Rolling a snowball down a hill. It touches every flake (element) and accumulates them into one giant ball (the total)." },
      code: `const nums = [1, 2, 3];\nconst sum = nums.reduce((acc, curr) => acc + curr, 0); // 6`,
      output: "",
      outputExplanation: "Without a console.log, it has no output. '.reduce()' accumulates a single value over multiple iterations. Starting with an initial 'acc' value of 0, the reducer function adds the 'curr' (current item) to the 'acc' on each step. The final accumulated sum is 6."
    },
    {
      id: "js-53",
      question: "forEach() vs map()",
      answer: "forEach() iterates over an array but returns undefined. map() iterates and returns a NEW array. Use forEach for side-effects, use map for data transformation.",
      story: { title: "The Inspector vs The Factory", text: "forEach is an inspector walking down the line checking boxes (side effects). map is a factory machine that takes boxes and spits out painted boxes." },
      code: `[1, 2].forEach(n => console.log(n)); // Returns undefined\nconst doubled = [1, 2].map(n => n * 2); // Returns [2, 4]`,
      output: "1\n2",
      outputExplanation: "The '.forEach()' loop iterates through the first array and calls console.log on each element, printing 1 and 2 sequentially. The '.map()' function creates and returns a new transformed array [2, 4], but this result is silently assigned to 'doubled' without being logged."
    },
    {
      id: "js-54",
      question: "JSON.parse() vs JSON.stringify()",
      answer: "JSON.stringify() converts a JavaScript object into a JSON string (for sending to a server). JSON.parse() parses a JSON string back into a JS object.",
      story: { title: "The Flatpack Furniture", text: "Stringify takes your assembled chair and packs it flat in a cardboard box to ship. Parse takes the flatpack box and rebuilds it into a usable chair." },
      code: `const str = JSON.stringify({ a: 1 }); // '{"a":1}'\nconst obj = JSON.parse(str); // { a: 1 }`,
      output: "",
      outputExplanation: "Because there's no console.log, there's no output. 'JSON.stringify' serializes the memory representation of the JS object into a plain text string formatted as JSON. 'JSON.parse' reads that string representation and reconstructs a brand-new native JavaScript object in memory."
    },
    {
      id: "js-55",
      question: "Local Storage vs Session Storage vs Cookies",
      answer: "LocalStorage persists forever until cleared (10MB). SessionStorage persists only until the browser tab closes (5MB). Cookies are tiny (4KB) but are automatically sent to the server with every HTTP request.",
      story: { title: "The Backpack, The Desk, and The Wallet", text: "Local is your backpack (always with you). Session is a school desk (gone when the class ends). Cookies are your ID in your wallet (you show it at every checkpoint)." },
      code: `localStorage.setItem('theme', 'dark');\nsessionStorage.setItem('tempId', '123');`,
      output: "",
      outputExplanation: "No output is produced. This code calls the browser's native Web Storage APIs to save data locally on the user's computer. 'theme' will remain saved indefinitely in localStorage, while 'tempId' will be wiped as soon as the current browser tab or window is closed."
    },
    {
      id: "js-56",
      question: "Prototype",
      answer: "Every JavaScript object has a hidden internal property called [[Prototype]] that points to another object. This is how JS implements inheritance.",
      story: { title: "The DNA", text: "A prototype is like DNA. If you don't know how to do something, you look at your DNA (Prototype) to see if your ancestors knew how to do it." },
      code: `const arr = [];\n// arr doesn't have push() physically on it, \n// it inherits it from Array.prototype`,
      output: "",
      outputExplanation: "No output. Creating a literal array '[]' assigns the object's internal prototype to JavaScript's global 'Array.prototype'. Because of this hidden link, 'arr' gains access to methods like '.push()' and '.map()', even though those methods were not directly defined on the 'arr' instance."
    },
    {
      id: "js-57",
      question: "Prototype Chain",
      answer: "When trying to access a property on an object, JS will look at the object itself. If not found, it traverses up the Prototype Chain to its parent, and so on, until it reaches null.",
      story: { title: "The Chain of Command", text: "If you don't know the answer, you ask your manager. If they don't know, they ask the CEO. If the CEO doesn't know, the answer is 'undefined'." },
      code: `// myObj -> Object.prototype -> null`,
      output: "",
      outputExplanation: "This is purely a comment explaining concept flow, so there is no executable code and no output. It represents the standard prototype chain for a basic object, which delegates lookups to Object.prototype before hitting the end of the chain, represented by null."
    },
    {
      id: "js-58",
      question: "Inheritance in JavaScript",
      answer: "Modern JS uses the 'class' and 'extends' keywords to implement inheritance, though under the hood it is still just Prototypal Inheritance.",
      story: { title: "The Family Business", text: "The Child class inherits the wealth and methods of the Parent class, but can also override them or create its own new rules." },
      code: `class Animal { speak() { console.log("Roar"); } }\nclass Dog extends Animal { speak() { console.log("Woof"); } }`,
      output: "",
      outputExplanation: "The code only declares classes but doesn't instantiate or call them, so there is no output. When 'Dog' extends 'Animal', the 'Dog.prototype' delegates to 'Animal.prototype'. The 'speak' method defined on Dog shadows the one on Animal, allowing instances of Dog to override the behavior to 'Woof'."
    },
    {
      id: "js-59",
      question: "Object.create()",
      answer: "Object.create() creates a new object, using an existing object as the prototype of the newly created object.",
      story: { title: "The Clone Maker", text: "Instead of calling a constructor function, you just hand a machine a finished object and say 'Make me a new empty object that points to this one as its parent'." },
      code: `const parent = { greet: () => 'Hi' };\nconst child = Object.create(parent);\nconsole.log(child.greet()); // Hi`,
      output: "Hi",
      outputExplanation: "The 'Object.create(parent)' call instantiates a new empty object ('child') and sets its internal prototype link to 'parent'. When 'child.greet()' is called, JS finds 'child' is empty and checks its prototype, finds 'greet' on the parent, executes it, and logs 'Hi'."
    },
    {
      id: "js-60",
      question: "call(), apply(), bind()",
      answer: "call() executes a function with a specific 'this' and comma-separated args. apply() takes args as an array. bind() returns a NEW function with the bound 'this'.",
      story: { title: "The Rental Car", text: "Call/Apply is renting a car for one trip right now. Bind is buying a bus pass to use later." },
      code: `function add(a, b) { return this.num + a + b; }\nadd.call({num: 2}, 3, 4); // 9`,
      output: "",
      outputExplanation: "The return value '9' is not logged. Using '.call()', the function is immediately invoked with its 'this' context overridden to the object '{num: 2}'. Arguments 3 and 4 are passed sequentially for 'a' and 'b'. The equation evaluates to 2 + 3 + 4, returning 9."
    },
    {
      id: "js-61",
      question: "Deep Copy vs Shallow Copy",
      answer: "A Shallow Copy copies top-level properties; nested objects still reference the original memory. A Deep Copy duplicates everything, creating a completely independent object.",
      story: { title: "The Blueprint vs The House", text: "Shallow copy is copying a house, but sharing the same plumbing. If one pipe bursts, both flood. Deep copy is building a brand new house on a different street." },
      code: `// Shallow: const copy = {...obj};\n// Deep: const copy = structuredClone(obj);`,
      output: "",
      outputExplanation: "These are commented-out conceptual examples, so there's no output. The spread operator '{...obj}' performs a shallow copy, merely referencing nested structures. The 'structuredClone()' API creates a deep copy by recursively cloning every node, totally severing references to the original object."
    },
    {
      id: "js-62",
      question: "Object.freeze() vs Object.seal()",
      answer: "freeze() prevents ANY changes to an object (no adding, deleting, or modifying properties). seal() prevents adding or deleting properties, but ALLOWS modifying existing ones.",
      story: { title: "The Ice Cube vs The Tupperware", text: "Freeze turns the object into solid ice; nothing moves. Seal puts it in a Tupperware; you can't put new things in, but you can shake around what's already inside." },
      code: `Object.freeze(obj);\nobj.newProp = 1; // Fails\nobj.oldProp = 2; // Fails`,
      output: "",
      outputExplanation: "Assuming 'obj' was defined, this code prints nothing. Under the hood, 'Object.freeze()' makes the object immutable. If running in strict mode, the assignment attempts will throw TypeErrors; in non-strict mode, the operations fail silently without modifying the object."
    },
    {
      id: "js-63",
      question: "Destructuring",
      answer: "A syntax that allows you to unpack values from arrays, or properties from objects, into distinct variables.",
      story: { title: "Unpacking Groceries", text: "Instead of carrying the whole grocery bag everywhere (obj.apple, obj.banana), you unpack the specific fruits you want directly onto the counter." },
      code: `const { name, age } = user;\nconst [first, second] = array;`,
      output: "",
      outputExplanation: "There's no output, and this would error if 'user' and 'array' weren't defined. The object destructuring searches for properties exactly named 'name' and 'age' in 'user' to extract. The array destructuring relies on position, plucking the index 0 and 1 items from 'array'."
    },
    {
      id: "js-64",
      question: "Spread vs Rest Operator (...)",
      answer: "The Spread operator EXPANDS an iterable into individual elements (used in function calls or arrays). The Rest operator CONDENSES multiple elements into a single array (used in function parameters).",
      story: { title: "The Shotgun vs The Net", text: "Spread is a shotgun blasting an array into pieces. Rest is a fishing net catching all the loose pieces and pulling them into one array bag." },
      code: `// Spread\nconst arr2 = [...arr1, 4, 5];\n// Rest\nfunction sum(...args) { return args.reduce((a,b)=>a+b); }`,
      output: "",
      outputExplanation: "No executable log calls exist here. The spread operator unpacks all existing items from 'arr1' into the new 'arr2' alongside elements 4 and 5. The rest operator in the 'sum' parameter list collects whatever number of arguments are passed to it into a true JavaScript array named 'args'."
    },
    {
      id: "js-65",
      question: "Optional Chaining (?.)",
      answer: "Allows reading the value of a deeply nested property without checking if each reference in the chain is valid. Returns undefined instead of throwing an error if a reference is nullish.",
      story: { title: "The Polite Knocker", text: "Instead of kicking the door down and crashing if no one is home, ?. politely knocks. If nobody answers, it just walks away and returns undefined." },
      code: `// Without: const city = user && user.address && user.address.city;\n// With: const city = user?.address?.city;`,
      output: "",
      outputExplanation: "This is purely declarative code with no logging. Optional chaining checks if 'user' or 'address' is null or undefined before digging deeper. If it hits a nullish link, it gracefully shorts the evaluation and returns undefined instead of throwing a 'Cannot read property of undefined' exception."
    },
    {
      id: "js-66",
      question: "Nullish Coalescing Operator (??)",
      answer: "Returns the right-hand operand ONLY when the left-hand operand is null or undefined. Unlike ||, it respects falsy values like 0 or ''.",
      story: { title: "The Strict Backup", text: "The || operator replaces a zero score with a default (bad!). The ?? operator knows that '0' is a valid score, and only steps in if the score is completely missing (null)." },
      code: `const score = 0;\nconsole.log(score || 10); // 10 (Wrong!)\nconsole.log(score ?? 10); // 0 (Correct!)`,
      output: "10\n0",
      outputExplanation: "The first log evaluates to 10 because '||' looks for falsy values, and the number 0 is falsy, triggering the right-hand fallback. The second log uses '??', which strictly checks only for 'null' or 'undefined', treating 0 as a valid and accepted value, thereby printing 0."
    },
    {
      id: "js-67",
      question: "Modules (CommonJS vs ES Modules)",
      answer: "CommonJS uses require() and module.exports (synchronous, native to Node). ES Modules use import and export (asynchronous, native to browsers and modern Node).",
      story: { title: "The Old Fax vs The Email", text: "CommonJS is the old reliable fax machine. ES Modules are modern emails—faster, asynchronous, and tree-shakeable." },
      code: `// CJS: const fs = require('fs');\n// ESM: import fs from 'fs';`,
      output: "",
      outputExplanation: "These are just commented import statements with no console output. CommonJS uses the synchronous 'require' method native to Node's module system. ES Modules use the 'import' syntax, which is the official modern standard for both the browser and Node, enabling static analysis and tree-shaking."
    },
    {
      id: "js-68",
      question: "Generators",
      answer: "Functions that can be exited and later re-entered, keeping their context (variable bindings) saved across re-entrances. Denoted by function* and the 'yield' keyword.",
      story: { title: "The Pause Button", text: "Normal functions run to completion. Generators have a remote control. You hit 'yield' to pause the movie, and '.next()' to resume playing exactly where you left off." },
      code: `function* count() {\n  yield 1;\n  yield 2;\n}\nconst gen = count();\nconsole.log(gen.next().value); // 1`,
      output: "1",
      outputExplanation: "Calling the generator function 'count()' doesn't execute its body; instead, it returns a generator object. Calling '.next()' on it starts execution until it hits the first 'yield', which pauses execution and returns an object '{ value: 1, done: false }'. Accessing '.value' logs 1."
    },
    {
      id: "js-69",
      question: "Iterators",
      answer: "An object is an iterator if it implements a next() method that returns an object with two properties: value and done (boolean).",
      story: { title: "The Pez Dispenser", text: "You ask the dispenser for the next candy (.next()). It hands you a candy (value: 'cherry') and tells you if the dispenser is empty (done: false)." },
      code: `// Arrays have built-in iterators\nconst iter = [1, 2][Symbol.iterator]();\niter.next(); // { value: 1, done: false }`,
      output: "",
      outputExplanation: "Nothing is printed. Calling '[Symbol.iterator]()' on an array explicitly retrieves its built-in iterator object. Calling '.next()' on this iterator manually steps through the elements. The first call evaluates to the object '{ value: 1, done: false }' behind the scenes."
    },
    {
      id: "js-70",
      question: "Garbage Collection",
      answer: "A form of automatic memory management. The Garbage Collector monitors objects and frees memory if they are no longer reachable (referenced) by the application (Mark-and-Sweep algorithm).",
      story: { title: "The Janitor", text: "The Janitor walks the halls. If they see a room with no doors connecting to it (unreachable object), they demolish it to save space." },
      code: `let user = { name: "John" };\nuser = null; // The {name: "John"} object is now garbage collected.`,
      output: "",
      outputExplanation: "There is no output. By assigning 'null' to the variable 'user', the underlying object '{ name: \"John\" }' loses its only reference. During the engine's next automatic garbage collection sweep, it detects the unreachable object in memory and safely deletes it to free up resources."
    }
  ]
};
