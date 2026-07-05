export const auth = {
  title: "Authentication & Security",
  subtitle: "Security is non-negotiable. Learn how to protect your apps and users.",
  questions: [
    {
      id: "auth-146",
      question: "JWT Authentication Flow",
      answer: "1. User sends credentials. 2. Server verifies and generates a JWT. 3. Server sends JWT to client. 4. Client stores JWT (cookie/local storage). 5. Client sends JWT in headers for future requests. 6. Server verifies JWT signature and grants access.",
      story: { title: "The VIP Wristband", text: "You show your ID once at the door (Login). The bouncer gives you a tamper-proof neon wristband (JWT). For the rest of the night, you just flash the wristband to get drinks; you don't show your ID again." },
      code: `// Generate Token\nconst token = jwt.sign({ userId: user._id }, 'secret', { expiresIn: '1h' });\n\n// Verify Token\nconst decoded = jwt.verify(token, 'secret');`
    },
    {
      id: "auth-147",
      question: "Access Token vs Refresh Token",
      answer: "An Access Token is short-lived (15m) and authenticates API requests. A Refresh Token is long-lived (7d), stored securely (HttpOnly cookie), and used ONLY to request a new Access Token when it expires.",
      story: { title: "The Theme Park Pass", text: "Refresh Token is your Season Pass (kept securely in wallet). Access Token is a paper daily wristband. If a thief steals the wristband, it's useless tomorrow. You just use your Season Pass to get a new wristband!" },
      code: `// When Access Token expires (401), frontend calls /refresh-token endpoint\n// Server reads Refresh Token from HttpOnly cookie, issues new Access Token.`
    },
    {
      id: "auth-148",
      question: "Password Hashing with bcrypt",
      answer: "Bcrypt is a hashing algorithm. It uses a 'salt' (random string) to protect against rainbow table attacks, and a 'cost factor' (rounds) to intentionally slow down the hashing process to defeat brute-force attacks.",
      story: { title: "The Safe Code", text: "Hashing is a one-way safe. Salting is adding random digits to everyone's code. Cost factor makes the safe door take 1 full second to close, preventing hackers from trying 100,000 codes per second." },
      code: `const hash = await bcrypt.hash(password, 10); // 10 is cost factor\nconst isValid = await bcrypt.compare(inputPass, hash);`
    },
    {
      id: "auth-149",
      question: "Authentication vs Authorization",
      answer: "Authentication (AuthN) verifies WHO you are (e.g., logging in with email/password). Authorization (AuthZ) verifies WHAT you are allowed to do (e.g., checking if you have an 'admin' role to delete a post).",
      story: { title: "The Airport", text: "Authentication is the ID check at the front door to prove you are John Doe. Authorization is the ticket scanner at the gate proving John Doe is actually allowed to board Flight 404." },
      code: `// Authentication (Are you logged in?)\nif (!req.user) return res.status(401).send('Unauthorized');\n\n// Authorization (Are you an admin?)\nif (req.user.role !== 'admin') return res.status(403).send('Forbidden');`
    },
    {
      id: "auth-150",
      question: "How would you build a secure Login/Register API?",
      answer: "1. Register: Hash password with bcrypt, save user. 2. Login: Compare hash, generate short-lived Access JWT (sent in JSON) and long-lived Refresh JWT (sent in HttpOnly, Secure, SameSite cookie). 3. Protected Routes: Middleware verifies Access JWT. 4. Refresh: Endpoint reads HttpOnly cookie to issue new Access JWT. 5. Logout: Clear the HttpOnly cookie.",
      story: { title: "The Fortress", text: "You combine everything. Bcrypt guards the database. Access Tokens act as fast checkpoints. HttpOnly cookies act as secure vaults for Refresh Tokens. Role middleware acts as armed guards for sensitive rooms." },
      code: `// Best Practice Cookie Settings for Refresh Tokens\nres.cookie('jwt', refreshToken, {\n  httpOnly: true, // No XSS\n  secure: true,   // HTTPS only\n  sameSite: 'strict'\n});`
    }
  ]
};
