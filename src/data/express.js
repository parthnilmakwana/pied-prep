export const express = {
  title: "Express.js Routing",
  subtitle: "The minimalist web framework. Simplify HTTP, routing, and middleware.",
  questions: [
    {
      id: "exp-121",
      question: "What is Express.js?",
      answer: "Express is a minimal and flexible Node.js web application framework. It provides a robust set of features for building single-page, multi-page, and hybrid web applications and APIs.",
      story: { title: "The Scaffold", text: "Building an HTTP server with raw Node.js is like building a house out of raw timber. Express is a pre-built steel scaffold—it gives you walls and a roof instantly, so you just focus on painting the rooms." },
      code: `const express = require('express');\nconst app = express();\napp.listen(3000, () => console.log('Server running'));`,
      output: "\"Server running\" logged to the server console.",
      outputExplanation: "When the application starts listening on port 3000, the callback function provided to app.listen is executed, which logs the status message to the terminal console."
    },
    {
      id: "exp-122",
      question: "Why use Express?",
      answer: "It dramatically reduces boilerplate code for HTTP servers. It makes routing intuitive, makes writing APIs very simple, and supports a massive ecosystem of middleware.",
      story: { title: "The Speed Camera", text: "In raw Node, extracting a JSON body takes 15 lines of complex buffer parsing. In Express, you write 'app.use(express.json())' and you are done in 1 line." },
      code: `// Express makes life easy\napp.post('/user', (req, res) => {\n  console.log(req.body); // Instantly parsed!\n});`,
      output: "The parsed JSON object from the incoming request body is logged to the console.",
      outputExplanation: "Assuming body-parsing middleware is configured, Express automatically parses the incoming request body and populates req.body with the resulting object, which the route handler then logs."
    },
    {
      id: "exp-123",
      question: "Routing in Express",
      answer: "Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, etc.).",
      story: { title: "The Receptionist", text: "The receptionist (Router) asks 'What do you want to do (Method) and who are you looking for (Path)?' If you say 'POST to /login', they point you to the Login door." },
      code: `app.get('/home', (req, res) => res.send('Home Page'));\napp.post('/submit', (req, res) => res.send('Submitted'));`,
      output: "\"Home Page\" or \"Submitted\" sent as a response to the client.",
      outputExplanation: "When a GET request is made to '/home', the server responds with the string \"Home Page\". For a POST request to '/submit', it responds with \"Submitted\". The res.send() method automatically sets the Content-Type and ends the response."
    },
    {
      id: "exp-124",
      question: "Express Middleware",
      answer: "Functions that have access to the request object (req), the response object (res), and the next middleware function in the application's request-response cycle.",
      story: { title: "The Assembly Line", text: "A car frame moves down the line. Station 1 adds wheels (req.wheels = 4). Station 2 adds paint. Finally, Station 3 ships it (res.send). If a station fails, the line stops." },
      code: `app.use((req, res, next) => {\n  req.customData = "Hello";\n  next(); // Move to next station\n});`,
      output: "No direct output; it silently modifies the request object.",
      outputExplanation: "This middleware function adds a 'customData' property to the request object and then calls next(), passing control to the subsequent middleware or route handler, which can now access req.customData."
    },
    {
      id: "exp-125",
      question: "Types of Middleware",
      answer: "1. Application-level (app.use), 2. Router-level (router.use), 3. Error-handling (4 params), 4. Built-in (express.json), 5. Third-party (helmet, cors).",
      story: { title: "The Toolkit", text: "Different tools for different jobs. Built-in tools come with the box. Third-party tools you buy from the store. Error-handling tools are the emergency fire extinguishers." },
      code: `// Application level\napp.use(logger);\n\n// Third party\nconst cors = require('cors');\napp.use(cors());`,
      output: "Applies logging and CORS headers to incoming requests.",
      outputExplanation: "The 'logger' middleware records request details, while the 'cors()' middleware adds appropriate Access-Control headers to the response, permitting cross-origin requests from browsers."
    },
    {
      id: "exp-126",
      question: "express.json() vs express.urlencoded()",
      answer: "express.json() parses incoming requests with JSON payloads (e.g., from React/fetch). express.urlencoded() parses requests with URL-encoded payloads (e.g., from a standard HTML <form> submission).",
      story: { title: "The Translators", text: "One translator only speaks JSON. The other only speaks HTML Form language. You usually hire both for your server so anyone can talk to you." },
      code: `app.use(express.json());\napp.use(express.urlencoded({ extended: true }));`,
      output: "Populates req.body with parsed JSON or URL-encoded data.",
      outputExplanation: "These built-in middlewares intercept the request, read the incoming data stream, parse it according to the Content-Type header (application/json or application/x-www-form-urlencoded), and attach the result to req.body for downstream handlers."
    },
    {
      id: "exp-127",
      question: "Custom Middleware",
      answer: "You can write your own middleware functions to perform specific logic, like checking if a user is an admin before allowing them to delete a post.",
      story: { title: "The VIP Check", text: "You write a custom guard that checks the user's role. If it's not 'Admin', the guard rejects the request. Otherwise, the guard calls next()." },
      code: `const isAdmin = (req, res, next) => {\n  if (req.user.role === 'admin') next();\n  else res.status(403).send('Forbidden');\n};`,
      output: "Either passes control to the next handler, or sends a 403 status with \"Forbidden\".",
      outputExplanation: "The middleware checks the user's role. If they are an admin, next() is called to continue the request lifecycle. Otherwise, it intercepts the request and sends an HTTP 403 Forbidden response back to the client, halting further processing."
    },
    {
      id: "exp-128",
      question: "Route Parameters vs Query Parameters",
      answer: "Route Parameters (/users/:id) are used to identify a specific resource (part of the path). Query Parameters (/users?sort=asc) are used to sort/filter resources (appended to the path).",
      story: { title: "The Library", text: "Route Param: 'I want the book on Aisle 4, Shelf 2' (Specific location). Query Param: 'I want all books on Aisle 4, but sort them by Author name' (Modifier)." },
      code: `// Route Param\napp.get('/users/:id', (req, res) => console.log(req.params.id));\n// Query Param\napp.get('/users', (req, res) => console.log(req.query.sort));`,
      output: "Logs the ID from the URL path, or the sort value from the query string.",
      outputExplanation: "If a request hits '/users/123', req.params.id will be '123' and logged. If a request hits '/users?sort=asc', req.query.sort will be 'asc' and logged. Express automatically extracts these values from the URL."
    },
    {
      id: "exp-129",
      question: "Error Handling Middleware",
      answer: "A special middleware function defined with EXACTLY four arguments (err, req, res, next). Express catches any next(error) calls and jumps straight to this middleware.",
      story: { title: "The Emergency Room", text: "If someone gets hurt in the airport, they bypass all other lines and checkpoints and are rushed straight to the ER (Error Middleware) to be stabilized." },
      code: `app.use((err, req, res, next) => {\n  console.error(err.message);\n  res.status(500).json({ error: "Server Error" });\n});`,
      output: "Logs the error message and sends a 500 JSON response: { \"error\": \"Server Error\" }.",
      outputExplanation: "Because this middleware has 4 arguments, Express treats it as an error handler. It logs the exact error to the server console for debugging, then safely sends a generic 500 internal server error as JSON to the client."
    },
    {
      id: "exp-130",
      question: "CORS",
      answer: "Cross-Origin Resource Sharing. By default, browsers block frontend apps from calling APIs on different domains. The CORS middleware adds HTTP headers telling the browser 'It is safe, allow this request.'",
      story: { title: "The Passport Control", text: "Your React app (Country A) visits your API (Country B). Without a CORS visa, the browser detains the request. The CORS middleware stamps the passport." },
      code: `const cors = require('cors');\napp.use(cors({ origin: 'http://localhost:3000' }));`,
      output: "Sets Access-Control-Allow-Origin: http://localhost:3000 header on responses.",
      outputExplanation: "The cors middleware intercepts requests and adds specific HTTP headers to the response. This tells the client's browser that the server explicitly permits requests coming from the http://localhost:3000 origin, bypassing the browser's same-origin policy restrictions."
    },
    {
      id: "exp-131",
      question: "File Upload using Multer",
      answer: "Express cannot handle multipart/form-data (file uploads) natively. Multer is a third-party middleware that parses these files and saves them to disk or memory.",
      story: { title: "The Cargo Inspector", text: "Normal middleware handles letters (JSON). Multer is a specialized cargo inspector that handles heavy shipping containers (Images/Videos)." },
      code: `const multer = require('multer');\nconst upload = multer({ dest: 'uploads/' });\napp.post('/profile', upload.single('avatar'), (req, res) => {\n  console.log(req.file);\n});`,
      output: "Saves the uploaded file to the 'uploads/' folder and logs file metadata to the console.",
      outputExplanation: "Multer parses the multipart form data, writing the uploaded file to the specified destination directory on the server. It then attaches information about the uploaded file (like original name, size, and destination path) to req.file, which is subsequently logged."
    },
    {
      id: "exp-132",
      question: "Express Project Folder Structure",
      answer: "A clean MVC (Model-View-Controller) structure is best. Separate concerns into folders: /routes (routing logic), /controllers (business logic), /models (DB schemas), and /middleware.",
      story: { title: "The Restaurant Kitchen", text: "You don't chop meat where you bake cakes. Routes are the waiters taking orders. Controllers are the chefs cooking. Models are the pantry managers fetching ingredients." },
      code: `// server.js\nconst userRoutes = require('./routes/userRoutes');\napp.use('/api/users', userRoutes);`,
      output: "Mounts all user-related routes under the '/api/users' path prefix.",
      outputExplanation: "Instead of defining all routes in server.js, they are exported from another module (userRoutes) as a Router. The app.use statement then links that Router to the '/api/users' prefix, so a route defined as '/' inside userRoutes actually responds to '/api/users'."
    }
  ]
};
