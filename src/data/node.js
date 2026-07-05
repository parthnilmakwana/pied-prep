export const node = {
  title: "Node.js Fundamentals",
  subtitle: "JavaScript outside the browser. Learn how V8 and libuv power backend servers.",
  questions: [
    {
      id: "node-106",
      question: "What is Node.js?",
      answer: "Node.js is an open-source, cross-platform JavaScript runtime environment built on Chrome's V8 engine. It allows developers to run JavaScript code outside of a web browser, making it possible to build backend services.",
      story: { title: "The Translator", text: "JavaScript used to only speak 'Browser'. V8 is an ultra-fast translator. Node took that translator, put it in a server box, and suddenly JavaScript could speak 'Server', managing files and databases." },
      code: `// Run a file using Node in the terminal\n$ node server.js`,
      output: `Server running on port 3000`,
      outputExplanation: "This is a terminal command, not JavaScript code. Executing 'node' followed by a filename instructs the V8 engine to read, parse, and execute the JavaScript contained in that file. If the file contains a server setup, it will bind to a port and wait for requests, printing any initialization logs."
    },
    {
      id: "node-107",
      question: "Why Node.js?",
      answer: "It is fast (V8 engine), asynchronous and non-blocking (great for high I/O operations), uses a single language for both frontend and backend (full-stack JS), and has a massive ecosystem via NPM.",
      story: { title: "The One-Stop Shop", text: "Instead of hiring a French chef for pastries (PHP) and an Italian chef for pasta (Java), you hire one Master Chef (JavaScript) who can expertly cook everything in the restaurant." },
      code: `// Full-stack uniform data:\nconst user = { name: "Alice" }; // Valid on frontend and backend`,
      output: `(No output)`,
      outputExplanation: "This code defines a variable but does not log anything. However, because it's standard JavaScript, the exact same object syntax works identically whether it's running in Chrome's V8 engine on the frontend or Node's V8 engine on the backend."
    },
    {
      id: "node-108",
      question: "Event-Driven Architecture",
      answer: "Node.js relies heavily on events. When a specific action occurs (like a file finishing reading, or a request arriving), an event is triggered, and a corresponding callback function is executed.",
      story: { title: "The Drive-Thru Bell", text: "The worker doesn't stand at the window staring at the street (polling). They do other work inside until a car runs over the hose, ringing the bell (Event Trigger). Then they walk to the window (Callback)." },
      code: `server.on('request', (req, res) => {\n  console.log("A new request arrived!");\n});`,
      output: `A new request arrived!`,
      outputExplanation: "The output is not immediate. The code registers an event listener for the 'request' event. The callback function is stored in memory. When an actual HTTP request hits the server, the Node.js event loop picks up the event and places the callback into the queue to be executed, printing the message to the console."
    },
    {
      id: "node-109",
      question: "Event Emitter",
      answer: "The EventEmitter class is the core of Node's event-driven architecture. It allows you to create custom events, emit them, and listen for them.",
      story: { title: "The Radio Broadcaster", text: "EventEmitter is a radio station. You 'emit' a signal on 99.5 FM. Anyone who is 'listening' to 99.5 FM (using .on()) will hear the broadcast and react to it." },
      code: `const EventEmitter = require('events');\nconst myEmitter = new EventEmitter();\nmyEmitter.on('login', (user) => console.log(user + ' logged in'));\nmyEmitter.emit('login', 'Alice');`,
      output: `Alice logged in`,
      outputExplanation: "First, we register a listener for the 'login' event using '.on()'. This stores the callback in memory. Then, synchronously, '.emit()' triggers the event and passes 'Alice' as the argument. The EventEmitter immediately looks up any registered listeners for 'login' and executes them in order, logging the result."
    },
    {
      id: "node-110",
      question: "Streams",
      answer: "Streams allow reading or writing of data in small chunks rather than loading the entire payload into memory at once. Great for handling large files (videos, massive logs).",
      story: { title: "The Netflix Movie", text: "You don't download a 4GB movie entirely before you start watching. You watch it in chunks as it streams. Node streams work exactly the same way for memory efficiency." },
      code: `const fs = require('fs');\n// Reads the file piece by piece\nconst readStream = fs.createReadStream('largeFile.txt');\nreadStream.on('data', chunk => console.log('Received chunk:', chunk));`,
      output: `Received chunk: <Buffer 48 65 6c 6c 6f ... >\nReceived chunk: <Buffer ... >`,
      outputExplanation: "fs.createReadStream doesn't read the file all at once. Instead, it reads the file in chunks (typically 64KB chunks). Each time a chunk is read from the disk, it emits a 'data' event. The callback logs the chunk, which by default is a Buffer object containing raw binary data."
    },
    {
      id: "node-111",
      question: "Buffers",
      answer: "A Buffer is a temporary memory spot for raw binary data being moved from one place to another. Streams use Buffers under the hood to hold the current chunk of data.",
      story: { title: "The Bus Stop", text: "People (data) gather at a bus stop (Buffer) until the bus is full, then the bus leaves and the next group starts gathering. It's a temporary holding area." },
      code: `const buf = Buffer.from('Hello');\nconsole.log(buf); // <Buffer 48 65 6c 6c 6f>`,
      output: `<Buffer 48 65 6c 6c 6f>`,
      outputExplanation: "Buffer.from() converts the UTF-8 string 'Hello' into raw binary data. When printed to the console, Node.js formats the buffer contents as hexadecimal values. Each pair of characters represents one byte (e.g., '48' is hexadecimal for 72, which is the ASCII value for 'H')."
    },
    {
      id: "node-112",
      question: "File System Module (fs)",
      answer: "The 'fs' module provides an API for interacting with the file system (reading, writing, deleting files/folders). It provides both synchronous (blocking) and asynchronous (non-blocking) methods.",
      story: { title: "The Filing Cabinet", text: "The 'fs' module is the key to the server's physical filing cabinet, letting you create new folders, read old documents, and shred trash." },
      code: `const fs = require('fs');\nfs.readFile('data.txt', 'utf8', (err, data) => {\n  console.log(data);\n});`,
      output: `(The text contents of data.txt)`,
      outputExplanation: "fs.readFile is an asynchronous, non-blocking operation. Node offloads the file reading task to the underlying operating system (via libuv). The JavaScript thread continues executing other code. Once the OS finishes reading the file, the callback is pushed to the event loop and executed, printing the file's decoded string contents."
    },
    {
      id: "node-113",
      question: "Path Module",
      answer: "The 'path' module provides utilities for working with file and directory paths. It automatically handles the differences between Windows (\\\\) and POSIX (/) path separators.",
      story: { title: "The Map Navigator", text: "If you tell an American 'Drive down Route 66', they understand. If you tell a Brit, they are confused. Path translates file routes so every operating system perfectly understands." },
      code: `const path = require('path');\nconst fullPath = path.join(__dirname, 'views', 'index.html');`,
      output: `(No output)`,
      outputExplanation: "This code doesn't log anything, but it generates a path string. path.join() intelligently concatenates the directory names using the correct path separator for the host OS ('/' on Linux/Mac, '\\\\' on Windows). __dirname is a special Node variable that holds the absolute path to the current module's directory."
    },
    {
      id: "node-114",
      question: "Process Object",
      answer: "The 'process' object provides information about, and control over, the current Node.js process. It is a global object, so it's always available without requiring it.",
      story: { title: "The Control Room", text: "It's the dashboard for your server. You can see how much memory you are using, what commands were passed in, and even hit the 'Self Destruct' button (process.exit())." },
      code: `console.log(process.env.PORT); // Environment variables\nconsole.log(process.memoryUsage()); // RAM usage\nprocess.exit(1); // Force crash/exit`,
      output: `3000\n{ rss: 24534528, heapTotal: 4784128, heapUsed: 3123456, external: 123456, arrayBuffers: 1234 }\n(Process exits)`,
      outputExplanation: "The process object is a global that provides information about the current Node instance. The first log accesses the PORT environment variable. The second log calls process.memoryUsage(), which returns an object detailing RAM usage in bytes. Finally, process.exit(1) synchronously terminates the Node runtime immediately with a failure code of 1."
    },
    {
      id: "node-115",
      question: "Environment Variables",
      answer: "Dynamic values passed to the runtime environment, typically used to store sensitive data (API keys, database passwords) or configuration (PORT) outside of the codebase.",
      story: { title: "The Safe Code", text: "You don't write the safe combination directly on the safe (source code). You keep it in your head (environment variable) so only the authorized person (server) knows it." },
      code: `// .env file: DB_PASS=secret123\nrequire('dotenv').config();\nconsole.log(process.env.DB_PASS);`,
      output: `secret123`,
      outputExplanation: "When dotenv.config() is called, it synchronously reads the .env file in the root directory, parses its contents, and loads the key-value pairs into the global process.env object. The console.log then retrieves the value 'secret123' that was bound to the DB_PASS key."
    },
    {
      id: "node-116",
      question: "CommonJS vs ES Modules",
      answer: "CommonJS uses require() and module.exports (synchronous, native to Node). ES Modules use import and export (asynchronous, standard for browsers and modern Node).",
      story: { title: "The Old Fax vs The Email", text: "CommonJS is the old reliable fax machine. ES Modules are modern emails—faster, asynchronous, and tree-shakeable." },
      code: `// CJS\nconst express = require('express');\n\n// ESM (Add "type": "module" in package.json)\nimport express from 'express';`,
      output: `(No output)`,
      outputExplanation: "These are module import statements and do not produce console output. require() is synchronous and part of the CommonJS specification (Node's original default). import is asynchronous and part of the ECMAScript standard. They both bring the express module into the current file's scope, but under the hood they use different loading mechanisms."
    },
    {
      id: "node-117",
      question: "Package.json",
      answer: "The manifest file for a Node.js project. It contains metadata (name, version), scripts, and the list of dependencies (packages) required to run the project.",
      story: { title: "The Recipe Ingredients", text: "If I give you a cake recipe, I don't give you the actual flour and eggs (node_modules). I give you a list of ingredients (package.json). You take the list to the store (npm install) to get them." },
      code: `{\n  "name": "my-app",\n  "scripts": { "start": "node server.js" },\n  "dependencies": { "express": "^4.18.2" }\n}`,
      output: `(No output)`,
      outputExplanation: "This is not JavaScript code; it's a JSON configuration file. When you run 'npm start' in the terminal, npm reads this file, looks at the 'scripts' block, and executes 'node server.js'. The 'dependencies' block tells npm which packages to download into node_modules when 'npm install' is executed."
    },
    {
      id: "node-118",
      question: "npm vs npx",
      answer: "npm (Node Package Manager) installs packages locally or globally. npx (Node Package Execute) directly executes a package from the npm registry WITHOUT installing it globally.",
      story: { title: "Buying vs Renting", text: "npm is buying a DVD to keep in your house forever. npx is renting a movie on demand—you watch it once, and it doesn't take up space on your shelf permanently." },
      code: `npm install -g create-react-app // Installs forever\nnpx create-react-app my-app // Executes once on the fly`,
      output: `(Terminal output detailing package installation or script execution)`,
      outputExplanation: "These are bash commands executed in a terminal. 'npm install -g' downloads the package to a global system directory permanently. 'npx' checks if the package exists locally/globally; if not, it temporarily downloads the package to a cache, executes its binary, and then leaves your system clean."
    },
    {
      id: "node-119",
      question: "Middleware Concept",
      answer: "A function that intercepts a request before it reaches the final route handler. It can modify the request, execute code, or end the response cycle entirely.",
      story: { title: "The Bouncer", text: "Before you enter the club (Route), the Bouncer (Middleware) checks your ID. If you're underage, they kick you out (res.send). If you're good, they say 'Next!' (next())." },
      code: `const logger = (req, res, next) => {\n  console.log('Request made to:', req.url);\n  next();\n};`,
      output: `Request made to: /api/users`,
      outputExplanation: "This function does not output anything immediately upon definition. In an Express app, this middleware function is placed in the request pipeline. Whenever an HTTP request comes in, Express passes the request, response, and next function to it. It logs the URL and then critically calls next() to pass control to the next middleware or route handler."
    },
    {
      id: "node-120",
      question: "Error Handling in Node.js",
      answer: "In sync code, use try/catch. In callback code, follow the 'Error-First Callback' convention. In Promises, use .catch(). Unhandled promise rejections can crash the Node process.",
      story: { title: "The Paramedic", text: "Node hates unhandled errors. If someone faints and nobody catches them (unhandled exception), the entire building shuts down. Always have a try/catch paramedic on duty." },
      code: `fs.readFile('file.txt', (err, data) => {\n  if (err) return console.error('Error first pattern:', err);\n  console.log(data);\n});`,
      output: `Error first pattern: [Error: ENOENT: no such file or directory, open 'file.txt']\n\n// OR if successful:\n(File contents)`,
      outputExplanation: "Node.js callbacks traditionally use the 'Error-First' pattern. When the asynchronous fs.readFile finishes, it puts the callback on the event loop. If the OS encountered an error (like a missing file), the first argument 'err' is populated with an Error object, which we log and return early to prevent further execution. If successful, 'err' is null, and 'data' contains the result."
    }
  ]
};
