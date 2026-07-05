export const mongodb = {
  title: "MongoDB & Mongoose",
  subtitle: "The NoSQL database of choice for modern web apps.",
  questions: [
    {
      id: "mongo-133",
      question: "What is MongoDB?",
      answer: "MongoDB is a popular open-source NoSQL database that stores data in flexible, JSON-like documents (BSON) rather than in rigid tables and rows.",
      story: { title: "The Document Vault", text: "Instead of forcing every user to fill out a strict standardized form (SQL), MongoDB gives everyone a blank folder (Document) where they can write whatever fields they want." },
      code: `// Data is stored like this:\n{ "_id": "1", "name": "Alice", "skills": ["JS", "React"] }`,
      output: `{\n  "_id": "1",\n  "name": "Alice",\n  "skills": [\n    "JS",\n    "React"\n  ]\n}`,
      outputExplanation: "MongoDB stores data natively in BSON format, which behaves precisely like JSON for most purposes. The document explicitly defines a unique `_id` and can contain nested structures like arrays (`skills`) without needing a separate relational table."
    },
    {
      id: "mongo-134",
      question: "Collections vs Documents",
      answer: "A Collection is a grouping of MongoDB documents (equivalent to an SQL Table). A Document is a single record within a collection (equivalent to an SQL Row).",
      story: { title: "The Filing Cabinet", text: "A Collection is the physical metal drawer labeled 'Employee Records'. A Document is the manila folder inside it containing details about a specific employee." },
      code: `// 'users' is the collection\ndb.users.insertOne({ name: "Bob" }); // inserting a document`,
      output: `{ "acknowledged" : true, "insertedId" : ObjectId("...") }`,
      outputExplanation: "The MongoDB driver returns an acknowledgment object upon a successful insert operation. It confirms the operation was acknowledged by the server and provides the auto-generated `ObjectId` for the newly inserted document."
    },
    {
      id: "mongo-135",
      question: "SQL vs MongoDB",
      answer: "SQL is relational, using rigid table schemas and joins. It scales vertically. MongoDB is non-relational, flexible, uses embedded data, and scales horizontally (sharding) very easily.",
      story: { title: "The Spreadsheet vs The Word Doc", text: "SQL is Excel—every row MUST match the column headers. MongoDB is Microsoft Word—you can paste an image, a table, or just text anywhere you want." },
      code: `// MongoDB allows mixed schemas in the same collection\ndb.items.insert([{ type: "Book", pages: 300 }, { type: "Pen", color: "Blue" }]);`,
      output: `BulkWriteResult({\n  "writeErrors" : [ ],\n  "writeConcernErrors" : [ ],\n  "nInserted" : 2,\n  "nUpserted" : 0,\n  "nMatched" : 0,\n  "nModified" : 0,\n  "nRemoved" : 0,\n  "upserted" : [ ]\n})`,
      outputExplanation: "MongoDB allows inserting an array of heterogeneous documents (different schemas) into the same collection without issue. The database responds with a BulkWriteResult object indicating that 2 documents were successfully inserted."
    },
    {
      id: "mongo-136",
      question: "CRUD Operations",
      answer: "Create (insertOne, insertMany), Read (find, findOne), Update (updateOne, updateMany), Delete (deleteOne, deleteMany).",
      story: { title: "The Library Cycle", text: "Create: Buying a new book. Read: Reading the book. Update: Fixing a typo in the book. Delete: Throwing the book in the fire." },
      code: `await User.create({ name: 'Bob' }); // Create\nawait User.find({ age: { $gt: 18 } }); // Read\nawait User.updateOne({ name: 'Bob' }, { age: 30 }); // Update\nawait User.deleteOne({ name: 'Bob' }); // Delete`,
      output: `// Successive outputs for the operations:\n{ _id: ObjectId("..."), name: 'Bob', __v: 0 }\n[ { _id: ObjectId("..."), name: 'Alice', age: 25, __v: 0 } ]\n{ acknowledged: true, modifiedCount: 1, matchedCount: 1 }\n{ acknowledged: true, deletedCount: 1 }`,
      outputExplanation: "Mongoose wrappers around MongoDB operations return corresponding objects: document instances for Create/Read (which resolve to JSON), and acknowledgment/metadata objects indicating the outcome of updates and deletions."
    },
    {
      id: "mongo-137",
      question: "MongoDB Indexing",
      answer: "An index is a special data structure that stores a small portion of the data in an easy-to-traverse form. It massively speeds up Read queries but slightly slows down Write operations.",
      story: { title: "The Book Glossary", text: "Finding every mention of 'React' by reading a 1000-page book takes hours. An Index is the glossary at the back: it instantly tells you 'React: pages 45, 92'." },
      code: `// Create an index on the email field\nuserSchema.index({ email: 1 });`,
      output: `// Behind the scenes it creates an index named "email_1" in the database.`,
      outputExplanation: "Defining an index in Mongoose ensures that when the application starts, it builds a B-tree index on the `email` field in ascending order (`1`), drastically improving query speed for searches by email."
    },
    {
      id: "mongo-138",
      question: "Aggregation Pipeline",
      answer: "A framework for processing data through a multi-stage pipeline. Stages include $match (filter), $group, $sort, and $project (reshape). It runs entirely on the database server.",
      story: { title: "The Car Factory Assembly Line", text: "Station 1 ($match) picks parts for red cars. Station 2 ($lookup) attaches wheels. Station 3 ($group) groups by model. Station 4 ($project) paints them." },
      code: `Order.aggregate([\n  { $match: { status: "completed" } },\n  { $group: { _id: "$userId", total: { $sum: "$amount" } } }\n]);`,
      output: `[\n  { "_id": ObjectId("5f8a..."), "total": 250 },\n  { "_id": ObjectId("6a1c..."), "total": 120 }\n]`,
      outputExplanation: "The pipeline first filters documents to only include 'completed' orders. Then, it groups these matching documents by their `userId` and calculates the sum of their `amount` fields, resulting in an array of aggregated totals per user."
    },
    {
      id: "mongo-139",
      question: "$lookup",
      answer: "An aggregation stage that performs a left outer join to a collection in the same database to filter in documents from the 'joined' collection for processing.",
      story: { title: "The Detective's Crossover", text: "You have a list of Suspect IDs. $lookup is you walking to the Police Database department, matching those IDs to actual criminal records, and bringing the files back to your desk." },
      code: `{ $lookup: { from: "users", localField: "authorId", foreignField: "_id", as: "authorDetails" } }`,
      output: `{\n  "_id": ObjectId("..."),\n  "title": "My Post",\n  "authorId": ObjectId("..."),\n  "authorDetails": [\n    { "_id": ObjectId("..."), "name": "Alice" }\n  ]\n}`,
      outputExplanation: "The `$lookup` stage performs an equality match between `authorId` in the current document and `_id` in the `users` collection. It appends the matched user documents as an array in a new field called `authorDetails`."
    },
    {
      id: "mongo-140",
      question: "Mongoose Schema",
      answer: "A Mongoose Schema defines the structure of the document, default values, validators, etc. While MongoDB is schemaless, Mongoose enforces a schema at the application level.",
      story: { title: "The Bouncer's Checklist", text: "MongoDB lets anyone in the club. Mongoose is a bouncer with a checklist. If you don't have a 'String' name and a 'Number' age over 18, Mongoose rejects you before you reach MongoDB." },
      code: `const schema = new mongoose.Schema({ name: String, age: { type: Number, min: 18 } });`,
      output: `// Instantiates a Schema object\nSchema { obj: { name: [Function: String], age: { type: [Function: Number], min: 18 } }, ... }`,
      outputExplanation: "Mongoose creates a JavaScript Schema instance in application memory. This defines metadata, structure, and constraints (like `min: 18`) that will be applied to documents before allowing them to be saved to the database."
    },
    {
      id: "mongo-141",
      question: "Models",
      answer: "A Mongoose Model is a wrapper around the Mongoose Schema. It provides an interface to the database for creating, querying, updating, deleting records, etc.",
      story: { title: "The Robot Foreman", text: "The Schema is the blueprint. The Model is the actual robot foreman built from that blueprint. You tell the Model 'Hey, go build this' (Model.create())." },
      code: `const User = mongoose.model('User', schema);\nconst newUser = new User({ name: 'Alice' });\nawait newUser.save();`,
      output: `{\n  "_id": ObjectId("..."),\n  "name": "Alice",\n  "__v": 0\n}`,
      outputExplanation: "The `.save()` method pushes the Mongoose Document into the MongoDB 'users' collection. MongoDB adds a unique `_id` and Mongoose internally adds `__v` (version key) before the successful database operation returns the created document."
    },
    {
      id: "mongo-142",
      question: "Validation",
      answer: "Mongoose allows you to define validation rules in the Schema (required, min, max, enum, match regex). If data doesn't pass, it throws a ValidationError before saving.",
      story: { title: "The TSA Scanner", text: "Before your luggage (data) goes onto the plane (database), it goes through the scanner. If it finds a prohibited item (invalid data), the belt stops and alarms sound." },
      code: `email: { type: String, required: true, match: /.+\\@.+\\..+/ }`,
      output: `ValidationError: Path \`email\` is invalid (not a valid email structure).`,
      outputExplanation: "If an invalid email string like 'bademail' is provided, Mongoose's regex validation fails. It intercepts the `.save()` call and rejects the Promise with a `ValidationError` before the request is ever sent to MongoDB."
    },
    {
      id: "mongo-143",
      question: "populate()",
      answer: "Mongoose's way of replacing specified paths in a document with document(s) from other collections. It simulates a database join, but does it at the application level via multiple queries.",
      story: { title: "The Contact List", text: "Your phone stores Contact IDs. When you open it, 'populate' goes and fetches the actual Names and Photos for those IDs so you don't stare at raw numbers." },
      code: `const post = await Post.findById(id).populate('author', 'name email');`,
      output: `{\n  "_id": "...",\n  "title": "Hello World",\n  "author": {\n    "_id": "...",\n    "name": "Alice",\n    "email": "alice@example.com"\n  }\n}`,
      outputExplanation: "Instead of just getting an `ObjectId` for the author, `.populate()` performs a separate query behind the scenes to fetch the corresponding User document. It returns the post with the populated `author` field containing only the requested `name` and `email` properties."
    },
    {
      id: "mongo-144",
      question: "Aggregation vs populate()",
      answer: "Populate is easier to write but executes multiple queries (slower for large datasets). Aggregation ($lookup) is harder to write but executes entirely inside the database (much faster and highly optimized).",
      story: { title: "The Delivery Driver", text: "Populate is a driver making 10 separate trips to the store for 10 items. Aggregation is giving the store a list of 10 items, and they send it to you in one single big truck." },
      code: `// Simple but slow for millions of rows: populate()\n// Complex but fast: aggregate([{ $lookup: ... }])`,
      output: `// populate(): Issues multiple queries to MongoDB\n// aggregate(): Issues a single query with joins performed by the DB engine`,
      outputExplanation: "The distinction lies in execution location. `populate()` is handled by the Node.js application iterating and requesting data, incurring network overhead. `aggregate()` delegates the entire join operation to MongoDB's highly optimized C++ engine."
    },
    {
      id: "mongo-145",
      question: "Transactions in MongoDB",
      answer: "Transactions allow you to execute multiple operations in isolation and commit them all at once, or roll them back if any single operation fails. (Requires Replica Sets).",
      story: { title: "The Bank Transfer", text: "If you move $100 from Account A to Account B, you must deduct from A AND add to B. If deducting works but adding fails, the transaction 'rolls back' so the $100 isn't lost in the void." },
      code: `const session = await mongoose.startSession();\nsession.startTransaction();\n// do work...\nawait session.commitTransaction();`,
      output: `{ "ok": 1 }`,
      outputExplanation: "A successful `commitTransaction()` sends a command to MongoDB to finalize all write operations in the session across the replica set, guaranteeing ACID properties. A return value of `{ ok: 1 }` signifies success."
    }
  ]
};
