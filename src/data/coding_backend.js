export const coding_backend = {
  "title": "Backend Coding",
  "subtitle": "20 Real Backend Interview Assignments",
  "isCoding": true,
  "questions": [
    {
      "id": "backend-code-1",
      "title": "Register API",
      "difficulty": "Medium",
      "topics": [
        "Node",
        "Express",
        "MongoDB"
      ],
      "problemStatement": "Create a user registration API endpoint that accepts email, username, and password. Hash the password before saving to the database and return a success message.",
      "examples": [
        {
          "input": "POST /api/register { email: 'test@example.com', password: 'password123' }",
          "output": "201 Created { message: 'User registered' }",
          "explanation": "The user is created with a hashed password in the DB."
        }
      ],
      "constraints": [
        "Use bcrypt for hashing",
        "Email must be unique"
      ],
      "hints": [
        "Create a mongoose User schema first",
        "Check if user already exists before creating"
      ],
      "approach": "1. Validate input data.\n2. Check if the user already exists.\n3. Hash the password using bcrypt.\n4. Save the new user.\n5. Return success.",
      "timeComplexity": "O(1) routing",
      "spaceComplexity": "O(1)",
      "solution": "app.post('/api/register', async (req, res) => {\n  const { email, password } = req.body;\n  if (!email || !password) return res.status(400).send('Bad Request');\n  const hashedPassword = await bcrypt.hash(password, 10);\n  const user = new User({ email, password: hashedPassword });\n  await user.save();\n  res.status(201).send('Created');\n});\n",
      "optimizedSolution": "app.post(\n  '/api/register',\n  [body('email').isEmail()],\n  async (req, res) => {\n    // Handle validation errors\n    // Check for existing user, hash with salt round 12\n    // save and respond\n  },\n);\n",
      "commonMistakes": [
        "Storing plaintext passwords",
        "Missing input validation"
      ],
      "followUp": [
        "How to handle rate limiting for this route?",
        "How would you implement email verification?"
      ]
    },
    {
      "id": "backend-code-2",
      "title": "Login API",
      "difficulty": "Medium",
      "topics": [
        "Node",
        "Express",
        "JWT"
      ],
      "problemStatement": "Create a login API that accepts an email and password, verifies the credentials against the database, and returns a JWT token if successful.",
      "examples": [
        {
          "input": "POST /api/login { email: 'test@example.com', password: 'password123' }",
          "output": "200 OK { token: 'eyJhbGci...' }",
          "explanation": "Credentials match and a valid JWT is returned."
        }
      ],
      "constraints": [
        "Use bcrypt.compare for passwords",
        "Token should expire in 1h"
      ],
      "hints": [
        "Find the user by email first",
        "Sign the payload with a secret key"
      ],
      "approach": "1. Find user by email.\n2. If not found, return 401.\n3. Compare password with hashed password.\n4. If match, generate JWT.\n5. Return token.",
      "timeComplexity": "O(1)",
      "spaceComplexity": "O(1)",
      "solution": "app.post('/api/login', async (req, res) => {\n  const { email, password } = req.body;\n  const user = await User.findOne({ email });\n  if (!user || !(await bcrypt.compare(password, user.password))) {\n    return res.status(401).send('Invalid credentials');\n  }\n  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {\n    expiresIn: '1h',\n  });\n  res.json({ token });\n});\n",
      "optimizedSolution": "app.post('/api/login', validateLoginLimiter, async (req, res) => {\n  // Include rate limiting to prevent brute force attacks\n  // Use secure cookies for token storage instead of JSON response\n});\n",
      "commonMistakes": [
        "Returning different errors for wrong email vs wrong password (reveals existing users)"
      ],
      "followUp": [
        "How to implement refresh tokens?"
      ]
    },
    {
      "id": "backend-code-3",
      "title": "Logout API",
      "difficulty": "Easy",
      "topics": [
        "Node",
        "Express",
        "Auth"
      ],
      "problemStatement": "Create a logout API endpoint. If using cookies, clear the authentication cookie. If using token blacklisting, add the token to the blacklist.",
      "examples": [
        {
          "input": "POST /api/logout (with Auth Header or Cookie)",
          "output": "200 OK { message: 'Logged out' }",
          "explanation": "The user session is terminated."
        }
      ],
      "constraints": [
        "Handle both cookie clearing and optional token invalidation"
      ],
      "hints": [
        "Use res.clearCookie for cookie-based auth"
      ],
      "approach": "Clear the auth cookie from the response and/or add the current JWT to a Redis blacklist.",
      "timeComplexity": "O(1)",
      "spaceComplexity": "O(1)",
      "solution": "app.post('/api/logout', (req, res) => {\n  res.clearCookie('token');\n  res.status(200).json({ message: 'Logged out successfully' });\n});\n",
      "optimizedSolution": "app.post('/api/logout', async (req, res) => {\n  const token = req.headers.authorization.split(' ')[1];\n  await redisClient.set(token, 'blacklisted', 'EX', 3600);\n  res.clearCookie('token').status(200).send('Logged out');\n});\n",
      "commonMistakes": [
        "Forgetting to handle client-side token removal if not using cookies"
      ],
      "followUp": [
        "How do you handle JWT revocation efficiently?"
      ]
    },
    {
      "id": "backend-code-4",
      "title": "JWT Authentication",
      "difficulty": "Medium",
      "topics": [
        "Express",
        "Middleware",
        "JWT"
      ],
      "problemStatement": "Write an Express middleware function that verifies a JWT provided in the Authorization header. If valid, attach the decoded user to `req.user` and call `next()`. If invalid, return a 401 Unauthorized error.",
      "examples": [
        {
          "input": "GET /protected-route (Header: Authorization: Bearer <valid_token>)",
          "output": "200 OK (route logic executes)",
          "explanation": "Middleware passes successfully."
        }
      ],
      "constraints": [
        "Handle missing tokens",
        "Handle expired tokens"
      ],
      "hints": [
        "Extract token from 'Bearer <token>' format"
      ],
      "approach": "Check auth header, split to get token, verify with jwt.verify, attach payload to req, call next().",
      "timeComplexity": "O(1)",
      "spaceComplexity": "O(1)",
      "solution": "const authMiddleware = (req, res, next) => {\n  const token = req.header('Authorization')?.split(' ')[1];\n  if (!token) return res.status(401).send('Access denied');\n  try {\n    const decoded = jwt.verify(token, process.env.JWT_SECRET);\n    req.user = decoded;\n    next();\n  } catch (err) {\n    res.status(401).send('Invalid token');\n  }\n};\n",
      "optimizedSolution": "const authMiddleware = async (req, res, next) => {\n  // Handle token format perfectly, check Redis blacklist before accepting\n  // standard try-catch block for jwt verify\n};\n",
      "commonMistakes": [
        "Crashing the server on jwt.verify failure by not using try-catch"
      ],
      "followUp": [
        "How to deal with role based access control in this middleware?"
      ]
    },
    {
      "id": "backend-code-5",
      "title": "Refresh Token",
      "difficulty": "Hard",
      "topics": [
        "Node",
        "Express",
        "JWT"
      ],
      "problemStatement": "Implement a refresh token endpoint. When the short-lived access token expires, the client can send a valid refresh token to get a new access token.",
      "examples": [
        {
          "input": "POST /api/refresh { refreshToken: '<token>' }",
          "output": "200 OK { accessToken: '<new_token>' }",
          "explanation": "Generates a new access token without requiring login."
        }
      ],
      "constraints": [
        "Refresh tokens should be stored securely (DB or Redis)"
      ],
      "hints": [
        "Verify the refresh token against the DB first"
      ],
      "approach": "Verify refresh token, check if it exists in DB, generate new access token, return it.",
      "timeComplexity": "O(1)",
      "spaceComplexity": "O(1)",
      "solution": "app.post('/api/refresh', async (req, res) => {\n  const { refreshToken } = req.body;\n  if (!refreshToken) return res.status(401).send('No token');\n  const storedToken = await TokenDB.findOne({ token: refreshToken });\n  if (!storedToken) return res.status(403).send('Invalid token');\n  jwt.verify(\n    refreshToken,\n    process.env.REFRESH_SECRET,\n    (err, user) => {\n      if (err) return res.status(403).send('Expired');\n      const newAccess = jwt.sign(\n        { id: user.id },\n        process.env.JWT_SECRET,\n        { expiresIn: '15m' },\n      );\n      res.json({ accessToken: newAccess });\n    },\n  );\n});\n",
      "optimizedSolution": "app.post('/api/refresh', async (req, res) => {\n  // Rotate refresh tokens securely to prevent replay attacks\n  // Return new access AND new refresh token\n});\n",
      "commonMistakes": [
        "Using the same secret for both access and refresh tokens"
      ],
      "followUp": [
        "What is Refresh Token Rotation?"
      ]
    },
    {
      "id": "backend-code-6",
      "title": "Forgot Password",
      "difficulty": "Medium",
      "topics": [
        "Node",
        "Express",
        "Email"
      ],
      "problemStatement": "Create an endpoint that accepts an email address, generates a unique, time-sensitive reset token, saves it to the database, and sends a password reset link to the user's email.",
      "examples": [
        {
          "input": "POST /api/forgot-password { email: 'user@example.com' }",
          "output": "200 OK { message: 'Reset email sent' }",
          "explanation": "A reset token is generated and emailed."
        }
      ],
      "constraints": [
        "Token must expire (e.g., in 15 minutes)"
      ],
      "hints": [
        "Use crypto.randomBytes for generating the token"
      ],
      "approach": "Find user, generate random token, hash token for DB storage, set expiry, send email with unhashed token in URL.",
      "timeComplexity": "O(1)",
      "spaceComplexity": "O(1)",
      "solution": "app.post('/forgot-password', async (req, res) => {\n  const user = await User.findOne({ email: req.body.email });\n  if (!user) return res.status(404).send('Not found');\n  const resetToken = crypto.randomBytes(32).toString('hex');\n  user.resetPasswordToken = crypto\n    .createHash('sha256')\n    .update(resetToken)\n    .digest('hex');\n  user.resetPasswordExpire = Date.now() + 15 * 60 * 1000;\n  await user.save();\n  // Send email logic here\n  res.send('Email sent');\n});\n",
      "optimizedSolution": "app.post('/forgot-password', async (req, res) => {\n  // Return 200 OK even if email not found to prevent user enumeration\n  // Use a job queue (like Bull/Redis) to handle email sending asynchronously\n});\n",
      "commonMistakes": [
        "Storing the token in plain text in the database",
        "Confirming if an email exists or not (security risk)"
      ],
      "followUp": [
        "Why should we hash the reset token in the database?"
      ]
    },
    {
      "id": "backend-code-7",
      "title": "Reset Password",
      "difficulty": "Medium",
      "topics": [
        "Node",
        "Express",
        "Auth"
      ],
      "problemStatement": "Create an endpoint that takes a reset token and a new password, validates the token, and updates the user's password.",
      "examples": [
        {
          "input": "PUT /api/reset-password/:token { password: 'newPassword123' }",
          "output": "200 OK { message: 'Password updated' }",
          "explanation": "Password is changed and reset token fields are cleared."
        }
      ],
      "constraints": [
        "Token must not be expired",
        "Clear token fields after successful reset"
      ],
      "hints": [
        "Hash the token from params to match the DB stored hash"
      ],
      "approach": "Hash received token, search for user with this hashed token and valid expiry, update password, clear token fields, save.",
      "timeComplexity": "O(1)",
      "spaceComplexity": "O(1)",
      "solution": "app.put('/reset-password/:token', async (req, res) => {\n  const hashedToken = crypto\n    .createHash('sha256')\n    .update(req.params.token)\n    .digest('hex');\n  const user = await User.findOne({\n    resetPasswordToken: hashedToken,\n    resetPasswordExpire: { $gt: Date.now() },\n  });\n  if (!user) return res.status(400).send('Invalid or expired token');\n  user.password = await bcrypt.hash(req.body.password, 10);\n  user.resetPasswordToken = undefined;\n  user.resetPasswordExpire = undefined;\n  await user.save();\n  res.send('Password updated');\n});\n",
      "optimizedSolution": "app.put('/reset-password/:token', async (req, res) => {\n  // Add strong password validation policies before hashing and saving\n});\n",
      "commonMistakes": [
        "Not clearing the reset token after successful usage"
      ],
      "followUp": [
        "What happens if two users request a password reset at the exact same time?"
      ]
    },
    {
      "id": "backend-code-8",
      "title": "Change Password",
      "difficulty": "Easy",
      "topics": [
        "Node",
        "Express",
        "Auth"
      ],
      "problemStatement": "Create a protected route that allows a logged-in user to change their password by providing their old password and a new password.",
      "examples": [
        {
          "input": "PUT /api/change-password { oldPassword: '...', newPassword: '...' }",
          "output": "200 OK { message: 'Password changed successfully' }",
          "explanation": "Old password verified, new password hashed and saved."
        }
      ],
      "constraints": [
        "User must be authenticated"
      ],
      "hints": [
        "Verify the old password using bcrypt.compare before changing"
      ],
      "approach": "Get user ID from token, fetch user, compare old password, hash new password, save to DB.",
      "timeComplexity": "O(1)",
      "spaceComplexity": "O(1)",
      "solution": "app.put('/change-password', authMiddleware, async (req, res) => {\n  const { oldPassword, newPassword } = req.body;\n  const user = await User.findById(req.user.id);\n  const isMatch = await bcrypt.compare(oldPassword, user.password);\n  if (!isMatch) return res.status(400).send('Incorrect old password');\n  user.password = await bcrypt.hash(newPassword, 10);\n  await user.save();\n  res.send('Password updated');\n});\n",
      "optimizedSolution": "app.put('/change-password', authMiddleware, async (req, res) => {\n  // Ensure new password isn't the same as old password\n  // Logout user from all other devices by incrementing a token version\n});\n",
      "commonMistakes": [
        "Allowing changes without validating the old password"
      ],
      "followUp": [
        "How to invalidate other active sessions when a password is changed?"
      ]
    },
    {
      "id": "backend-code-9",
      "title": "Upload Avatar",
      "difficulty": "Medium",
      "topics": [
        "Node",
        "Express",
        "Multer"
      ],
      "problemStatement": "Create an endpoint to upload a user avatar image. Use Multer to handle the multipart/form-data request and save the image path to the database.",
      "examples": [
        {
          "input": "POST /api/users/avatar (multipart config)",
          "output": "200 OK { avatarUrl: '/uploads/abc.jpg' }",
          "explanation": "File is saved to disk and URL stored in DB."
        }
      ],
      "constraints": [
        "Only accept JPEG and PNG",
        "Max size 2MB"
      ],
      "hints": [
        "Configure Multer storage and fileFilter"
      ],
      "approach": "Set up multer with size limits and file filter, run it as middleware, update user model with file path.",
      "timeComplexity": "O(1) excluding I/O",
      "spaceComplexity": "O(1) memory, O(file_size) disk",
      "solution": "const upload = multer({\n  dest: 'uploads/',\n  limits: { fileSize: 2000000 },\n});\napp.post(\n  '/avatar',\n  authMiddleware,\n  upload.single('avatar'),\n  async (req, res) => {\n    if (!req.file) return res.status(400).send('No file uploaded');\n    const user = await User.findByIdAndUpdate(\n      req.user.id,\n      { avatar: req.file.path },\n      { new: true },\n    );\n    res.json({ avatar: user.avatar });\n  },\n);\n",
      "optimizedSolution": "const upload = multer({ storage: multer.memoryStorage() });\napp.post(\n  '/avatar',\n  authMiddleware,\n  upload.single('avatar'),\n  async (req, res) => {\n    // Upload directly to AWS S3 or Cloudinary from memory buffer\n    // Return CDN URL\n  },\n);\n",
      "commonMistakes": [
        "Not validating the file type, allowing malicious script uploads"
      ],
      "followUp": [
        "How would you store these files in AWS S3 instead of local disk?"
      ]
    },
    {
      "id": "backend-code-10",
      "title": "Update Profile",
      "difficulty": "Easy",
      "topics": [
        "Node",
        "Express",
        "MongoDB"
      ],
      "problemStatement": "Create an endpoint for users to update their profile details (e.g., name, bio). Ensure that users cannot update sensitive fields like password or role through this endpoint.",
      "examples": [
        {
          "input": "PUT /api/profile { name: 'New Name', role: 'admin' }",
          "output": "200 OK { name: 'New Name', role: 'user' }",
          "explanation": "Name updated, but role modification ignored."
        }
      ],
      "constraints": [
        "Prevent mass assignment vulnerabilities"
      ],
      "hints": [
        "Extract only the allowed fields from req.body"
      ],
      "approach": "Filter req.body for allowed keys, find user by ID, update fields, return updated user.",
      "timeComplexity": "O(1)",
      "spaceComplexity": "O(1)",
      "solution": "app.put('/profile', authMiddleware, async (req, res) => {\n  const { name, bio } = req.body;\n  const user = await User.findByIdAndUpdate(\n    req.user.id,\n    { name, bio },\n    { new: true, runValidators: true },\n  );\n  res.json(user);\n});\n",
      "optimizedSolution": "app.put('/profile', authMiddleware, async (req, res) => {\n  // Use a library like lodash/pick to safely extract allowed fields\n  // Return only safe fields in the response\n});\n",
      "commonMistakes": [
        "Directly spreading req.body into the update query (Object injection)"
      ],
      "followUp": [
        "What is a Mass Assignment Vulnerability?"
      ]
    },
    {
      "id": "backend-code-11",
      "title": "CRUD API",
      "difficulty": "Medium",
      "topics": [
        "Express",
        "MongoDB",
        "Mongoose"
      ],
      "problemStatement": "Implement full CRUD operations (Create, Read, Update, Delete) for a 'Product' resource. Use RESTful routing conventions.",
      "examples": [
        {
          "input": "GET /api/products",
          "output": "200 OK [{ id: 1, name: 'Laptop' }]",
          "explanation": "Returns list of products."
        }
      ],
      "constraints": [
        "Use appropriate HTTP verbs (GET, POST, PUT/PATCH, DELETE)"
      ],
      "hints": [
        "Create separate route handlers for each operation"
      ],
      "approach": "Define GET /, POST /, GET /:id, PUT /:id, DELETE /:id routes mapping to Mongoose find, create, findById, findByIdAndUpdate, findByIdAndDelete.",
      "timeComplexity": "O(1) routing",
      "spaceComplexity": "O(1)",
      "solution": "const router = express.Router();\nrouter\n  .route('/')\n  .get(async (req, res) => res.json(await Product.find()))\n  .post(async (req, res) =>\n    res.status(201).json(await Product.create(req.body)),\n  );\nrouter\n  .route('/:id')\n  .get(async (req, res) =>\n    res.json(await Product.findById(req.params.id)),\n  )\n  .put(async (req, res) =>\n    res.json(\n      await Product.findByIdAndUpdate(req.params.id, req.body, {\n        new: true,\n      }),\n    ),\n  )\n  .delete(async (req, res) => {\n    await Product.findByIdAndDelete(req.params.id);\n    res.sendStatus(204);\n  });\napp.use('/products', router);\n",
      "optimizedSolution": "// Abstract controllers into separate files, add error boundary wrappers, and use proper status codes for edge cases (404 not found, etc.)\n",
      "commonMistakes": [
        "Not checking if the item exists before updating or deleting (returns 200 instead of 404)"
      ],
      "followUp": [
        "How do you handle soft deletes?"
      ]
    },
    {
      "id": "backend-code-12",
      "title": "Pagination API",
      "difficulty": "Medium",
      "topics": [
        "MongoDB",
        "Mongoose"
      ],
      "problemStatement": "Modify a GET endpoint to return paginated results using `page` and `limit` query parameters. Return total count and total pages alongside the data.",
      "examples": [
        {
          "input": "GET /api/posts?page=2&limit=10",
          "output": "200 OK { data: [...], total: 50, page: 2, pages: 5 }",
          "explanation": "Returns items 11-20."
        }
      ],
      "constraints": [
        "Default to page 1, limit 10 if not provided"
      ],
      "hints": [
        "Use Mongoose .skip() and .limit()"
      ],
      "approach": "Parse query params, calculate skip value, run find().skip().limit() and countDocuments() in parallel.",
      "timeComplexity": "O(N) for skip in MongoDB",
      "spaceComplexity": "O(Limit)",
      "solution": "app.get('/posts', async (req, res) => {\n  const page = parseInt(req.query.page, 10) || 1;\n  const limit = parseInt(req.query.limit, 10) || 10;\n  const skip = (page - 1) * limit;\n\n  const [data, total] = await Promise.all([\n    Post.find().skip(skip).limit(limit),\n    Post.countDocuments(),\n  ]);\n\n  res.json({ data, total, page, pages: Math.ceil(total / limit) });\n});\n",
      "optimizedSolution": "app.get('/posts', async (req, res) => {\n  // Use cursor-based pagination (_id > last_id) instead of skip/limit for better performance on large datasets.\n});\n",
      "commonMistakes": [
        "Executing countDocuments and find sequentially instead of Promise.all"
      ],
      "followUp": [
        "Why does .skip() become slow with large offsets?"
      ]
    },
    {
      "id": "backend-code-13",
      "title": "Search API",
      "difficulty": "Medium",
      "topics": [
        "MongoDB",
        "Search"
      ],
      "problemStatement": "Create an endpoint that searches for users by their name or email using a `q` query parameter. Perform a case-insensitive partial match search.",
      "examples": [
        {
          "input": "GET /api/users/search?q=john",
          "output": "200 OK [{ name: 'John Doe', email: 'john@x.com' }]",
          "explanation": "Finds users containing 'john' in name or email."
        }
      ],
      "constraints": [
        "Use regex or text indexes"
      ],
      "hints": [
        "Use $or operator with $regex in MongoDB"
      ],
      "approach": "Extract 'q', construct a query with $or and $regex, execute find.",
      "timeComplexity": "O(N) for regex scan without index",
      "spaceComplexity": "O(1)",
      "solution": "app.get('/search', async (req, res) => {\n  const keyword = req.query.q;\n  if (!keyword) return res.json([]);\n  const regex = new RegExp(keyword, 'i');\n  const users = await User.find({\n    $or: [{ name: regex }, { email: regex }],\n  });\n  res.json(users);\n});\n",
      "optimizedSolution": "app.get('/search', async (req, res) => {\n  // Create a $text index in MongoDB and use $text: { $search: keyword } for highly optimized, scalable searches instead of $regex.\n});\n",
      "commonMistakes": [
        "Using regex without considering performance impacts on large collections"
      ],
      "followUp": [
        "How do you optimize search in MongoDB?"
      ]
    },
    {
      "id": "backend-code-14",
      "title": "Sorting API",
      "difficulty": "Easy",
      "topics": [
        "MongoDB",
        "Mongoose"
      ],
      "problemStatement": "Enhance a GET endpoint to support dynamic sorting based on a `sort` query parameter (e.g., `?sort=price,-createdAt`).",
      "examples": [
        {
          "input": "GET /api/products?sort=-price",
          "output": "200 OK [{ price: 100 }, { price: 50 }]",
          "explanation": "Sorts products by price descending."
        }
      ],
      "constraints": [
        "Handle multiple sort fields"
      ],
      "hints": [
        "Mongoose .sort() accepts a string formatted exactly like the query param"
      ],
      "approach": "Extract sort string, replace commas with spaces, pass to .sort().",
      "timeComplexity": "O(N log N) for sorting",
      "spaceComplexity": "O(1)",
      "solution": "app.get('/products', async (req, res) => {\n  let query = Product.find();\n  if (req.query.sort) {\n    const sortBy = req.query.sort.split(',').join(' ');\n    query = query.sort(sortBy);\n  } else {\n    query = query.sort('-createdAt');\n  }\n  const products = await query;\n  res.json(products);\n});\n",
      "optimizedSolution": "app.get('/products', async (req, res) => {\n  // Ensure fields specified in the sort parameter actually exist and are indexed to prevent memory sorting limits (100MB).\n});\n",
      "commonMistakes": [
        "Allowing users to sort by unindexed fields, leading to slow queries or crashes"
      ],
      "followUp": [
        "What happens when MongoDB tries to sort a large collection without an index?"
      ]
    },
    {
      "id": "backend-code-15",
      "title": "Filtering API",
      "difficulty": "Hard",
      "topics": [
        "MongoDB",
        "Express"
      ],
      "problemStatement": "Build an endpoint that dynamically filters data based on query parameters, supporting operators like `gt`, `gte`, `lt`, `lte`, and `in` (e.g., `?price[gte]=100&category=electronics`).",
      "examples": [
        {
          "input": "GET /api/products?price[lte]=500&rating[gte]=4",
          "output": "200 OK [...]",
          "explanation": "Finds products under $500 with 4+ rating."
        }
      ],
      "constraints": [
        "Handle exact matches and inequality operators dynamically"
      ],
      "hints": [
        "Stringify req.query and replace operators with $ equivalents"
      ],
      "approach": "Take req.query, convert to string, use regex to prepend '$' to match MongoDB operators, parse back to JSON, use in find().",
      "timeComplexity": "O(1) logic",
      "spaceComplexity": "O(1)",
      "solution": "app.get('/products', async (req, res) => {\n  const queryObj = { ...req.query };\n  const excludedFields = ['page', 'sort', 'limit', 'fields'];\n  excludedFields.forEach((el) => delete queryObj[el]);\n\n  let queryStr = JSON.stringify(queryObj);\n  queryStr = queryStr.replace(\n    /\\b(gte|gt|lte|lt|in)\\b/g,\n    (match) => `$${match}`,\n  );\n\n  const products = await Product.find(JSON.parse(queryStr));\n  res.json(products);\n});\n",
      "optimizedSolution": "app.get('/products', async (req, res) => {\n  // Sanitize the query thoroughly to prevent NoSQL injection\n  // Enforce types (e.g., ensure price is a number)\n});\n",
      "commonMistakes": [
        "Failing to strip out control parameters (page, sort) from the filter object"
      ],
      "followUp": [
        "What is NoSQL Injection and how does this approach mitigate or invite it?"
      ]
    },
    {
      "id": "backend-code-16",
      "title": "Role-Based Authorization",
      "difficulty": "Medium",
      "topics": [
        "Express",
        "Middleware",
        "Auth"
      ],
      "problemStatement": "Write a middleware function that takes a list of allowed roles and checks if the authenticated user's role is included. Use this to protect an admin-only route.",
      "examples": [
        {
          "input": "DELETE /api/users/1 (as 'user' role)",
          "output": "403 Forbidden",
          "explanation": "Only admins can delete."
        }
      ],
      "constraints": [
        "Assume req.user is already populated by auth middleware"
      ],
      "hints": [
        "Use a closure to pass roles to the middleware"
      ],
      "approach": "Create a function returning a middleware that checks if req.user.role is in the allowed roles array.",
      "timeComplexity": "O(1)",
      "spaceComplexity": "O(1)",
      "solution": "const authorize = (...roles) => {\n  return (req, res, next) => {\n    if (!roles.includes(req.user.role)) {\n      return res\n        .status(403)\n        .json({ error: 'User role not authorized' });\n    }\n    next();\n  };\n};\n\n// Usage:\napp.delete(\n  '/users/:id',\n  authMiddleware,\n  authorize('admin', 'superadmin'),\n  async (req, res) => {\n    // Delete logic\n  },\n);\n",
      "optimizedSolution": "const authorize =\n  (...roles) =>\n  (req, res, next) => {\n    // Also verify user is active and their permissions haven't been revoked\n    // Check role hierarchy if applicable\n  };\n",
      "commonMistakes": [
        "Hardcoding 'admin' instead of passing an array of allowed roles"
      ],
      "followUp": [
        "How would you implement Attribute-Based Access Control (ABAC)?"
      ]
    },
    {
      "id": "backend-code-17",
      "title": "Rate Limiter",
      "difficulty": "Medium",
      "topics": [
        "Express",
        "Security",
        "Redis"
      ],
      "problemStatement": "Implement a rate-limiting middleware that restricts users to 100 requests per 15 minutes based on their IP address.",
      "examples": [
        {
          "input": "101st GET /api/data from same IP",
          "output": "429 Too Many Requests",
          "explanation": "Rate limit exceeded."
        }
      ],
      "constraints": [
        "Use a sliding or fixed window algorithm"
      ],
      "hints": [
        "Use the express-rate-limit library for a quick solution, or implement manually with Redis"
      ],
      "approach": "Using express-rate-limit, configure windowMs and max, then apply globally or to specific routes.",
      "timeComplexity": "O(1)",
      "spaceComplexity": "O(1) per user",
      "solution": "const rateLimit = require('express-rate-limit');\n\nconst limiter = rateLimit({\n  windowMs: 15 * 60 * 1000, // 15 minutes\n  max: 100,\n  message: 'Too many requests from this IP, please try again later.',\n});\n\napp.use('/api/', limiter);\n",
      "optimizedSolution": "// Use Redis Store for rate limiting to work across distributed server environments (load balancers).\nconst RedisStore = require('rate-limit-redis');\n// ... configure rateLimit with store: new RedisStore({ ... })\n",
      "commonMistakes": [
        "Applying in-memory rate limiters in a multi-server clustered environment"
      ],
      "followUp": [
        "Why does in-memory rate limiting fail on scaled applications?"
      ]
    },
    {
      "id": "backend-code-18",
      "title": "Email Verification",
      "difficulty": "Medium",
      "topics": [
        "Express",
        "Email",
        "Auth"
      ],
      "problemStatement": "After registration, a user's `isVerified` flag is false. Create an endpoint that takes a verification token from an email link and sets `isVerified` to true.",
      "examples": [
        {
          "input": "GET /api/verify-email/:token",
          "output": "200 OK { message: 'Email verified' }",
          "explanation": "The user account is now active."
        }
      ],
      "constraints": [
        "Tokens must be unique and expire"
      ],
      "hints": [
        "Similar logic to reset password, but updating a boolean flag instead"
      ],
      "approach": "Hash the URL token, find user by hashed token, set isVerified to true, clear token fields, save.",
      "timeComplexity": "O(1)",
      "spaceComplexity": "O(1)",
      "solution": "app.get('/verify-email/:token', async (req, res) => {\n  const hashedToken = crypto\n    .createHash('sha256')\n    .update(req.params.token)\n    .digest('hex');\n  const user = await User.findOne({\n    verificationToken: hashedToken,\n    verificationExpire: { $gt: Date.now() },\n  });\n\n  if (!user) return res.status(400).send('Invalid or expired token');\n\n  user.isVerified = true;\n  user.verificationToken = undefined;\n  user.verificationExpire = undefined;\n  await user.save();\n\n  res.send('Email verified successfully');\n});\n",
      "optimizedSolution": "app.get('/verify-email/:token', async (req, res) => {\n  // Redirect the user to the frontend login page with a success query param upon successful verification\n});\n",
      "commonMistakes": [
        "Failing to expire the verification token"
      ],
      "followUp": [
        "Should users be allowed to log in before verifying their email?"
      ]
    },
    {
      "id": "backend-code-19",
      "title": "Middleware for Authentication",
      "difficulty": "Easy",
      "topics": [
        "Express",
        "Middleware"
      ],
      "problemStatement": "Write a custom middleware that logs the HTTP method, URL, and timestamp for every incoming request before passing control to the next handler.",
      "examples": [
        {
          "input": "GET /api/users",
          "output": "Console logs: [2023-10-27T10:00:00Z] GET /api/users",
          "explanation": "Request continues normally while being logged."
        }
      ],
      "constraints": [
        "Must not block the request lifecycle"
      ],
      "hints": [
        "Access req.method and req.originalUrl"
      ],
      "approach": "Create a function taking (req, res, next), console.log the data, call next().",
      "timeComplexity": "O(1)",
      "spaceComplexity": "O(1)",
      "solution": "const loggerMiddleware = (req, res, next) => {\n  const timestamp = new Date().toISOString();\n  console.log(`[${timestamp}] ${req.method} ${req.originalUrl}`);\n  next();\n};\n\napp.use(loggerMiddleware);\n",
      "optimizedSolution": "const loggerMiddleware = (req, res, next) => {\n  // Use a library like Morgan or Winston for structured JSON logging in production environments\n  next();\n};\n",
      "commonMistakes": [
        "Forgetting to call next(), which leaves the request hanging indefinitely"
      ],
      "followUp": [
        "Why is structured logging (like Winston) preferred over console.log in production?"
      ]
    },
    {
      "id": "backend-code-20",
      "title": "Error Handling Middleware",
      "difficulty": "Medium",
      "topics": [
        "Express",
        "Error Handling"
      ],
      "problemStatement": "Create a global error handling middleware for an Express app. It should catch all thrown errors, log them, and return a standardized JSON error response.",
      "examples": [
        {
          "input": "Route throws: new Error('DB Connection Failed')",
          "output": "500 Internal Server Error { success: false, error: 'Server Error' }",
          "explanation": "Prevents HTML stack trace from leaking to client."
        }
      ],
      "constraints": [
        "Hide stack traces in production"
      ],
      "hints": [
        "Express error middleware takes 4 arguments: (err, req, res, next)"
      ],
      "approach": "Define 4-arity function, set default status to 500, return JSON with message and optional stack based on env.",
      "timeComplexity": "O(1)",
      "spaceComplexity": "O(1)",
      "solution": "const errorHandler = (err, req, res, next) => {\n  console.error(err.stack);\n  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;\n  res.status(statusCode).json({\n    success: false,\n    message: err.message || 'Server Error',\n    stack: process.env.NODE_ENV === 'production' ? null : err.stack,\n  });\n};\n\n// Must be the last app.use()\napp.use(errorHandler);\n",
      "optimizedSolution": "const errorHandler = (err, req, res, next) => {\n  // Handle specific database errors (like Mongoose CastError, DuplicateKey error) and map them to appropriate 400 status codes with friendly messages.\n};\n",
      "commonMistakes": [
        "Placing error middleware before other routes",
        "Leaking stack traces in production mode"
      ],
      "followUp": [
        "How do you handle unhandled promise rejections outside of Express routes?"
      ]
    }
  ]
};
