export const coding_mongodb = {
  "title": "MongoDB Queries",
  "subtitle": "15 Essential Database Queries",
  "isCoding": true,
  "questions": [
    {
      "id": "mongo-code-1",
      "title": "Find all users",
      "difficulty": "Easy",
      "topics": [
        "MongoDB",
        "CRUD"
      ],
      "problemStatement": "Write a query to retrieve all documents from the `users` collection.",
      "examples": [
        {
          "input": "Collection of users",
          "output": "Cursor of all users",
          "explanation": "Returns a cursor to all documents in the collection."
        }
      ],
      "constraints": [
        "Assume normal collection size"
      ],
      "hints": [
        "Use the find() method without any filter."
      ],
      "approach": "Use the `db.collection.find()` method with an empty query document `{}`.",
      "timeComplexity": "O(N) where N is the number of documents in the collection.",
      "spaceComplexity": "O(1) as results are returned via cursor.",
      "solution": "db.users.find({});\n",
      "optimizedSolution": "db.users.find({});\n",
      "commonMistakes": [
        "Using findOne instead of find when multiple documents are expected."
      ],
      "followUp": [
        "How would you limit the number of results returned?"
      ]
    },
    {
      "id": "mongo-code-2",
      "title": "Find users older than 18",
      "difficulty": "Easy",
      "topics": [
        "MongoDB",
        "CRUD",
        "Filtering"
      ],
      "problemStatement": "Write a query to find all users in the `users` collection who have an `age` strictly greater than 18.",
      "examples": [
        {
          "input": "users: [{name: 'A', age: 15}, {name: 'B', age: 20}]",
          "output": "[{name: 'B', age: 20}]",
          "explanation": "Only user B is older than 18."
        }
      ],
      "constraints": [
        "Assume `age` is a numeric field."
      ],
      "hints": [
        "Use the $gt operator for comparison."
      ],
      "approach": "Use the `$gt` (greater than) query operator to filter documents where the `age` field is greater than 18.",
      "timeComplexity": "O(N) without index, O(log N + K) with an index on age.",
      "spaceComplexity": "O(1)",
      "solution": "db.users.find({ age: { $gt: 18 } });\n",
      "optimizedSolution": "db.users.find({ age: { $gt: 18 } }); // Make sure to create an index: db.users.createIndex({ age: 1 })\n",
      "commonMistakes": [
        "Using >= instead of > if strict greater than is required.",
        "Not using an index for large collections."
      ],
      "followUp": [
        "How to find users between 18 and 30?"
      ]
    },
    {
      "id": "mongo-code-3",
      "title": "Sort users by age",
      "difficulty": "Easy",
      "topics": [
        "MongoDB",
        "Sorting"
      ],
      "problemStatement": "Write a query to retrieve all users sorted by their `age` in descending order.",
      "examples": [
        {
          "input": "users: [{name: 'A', age: 15}, {name: 'B', age: 20}]",
          "output": "[{name: 'B', age: 20}, {name: 'A', age: 15}]",
          "explanation": "Sorted by age descending."
        }
      ],
      "constraints": [
        "Assume age is numeric"
      ],
      "hints": [
        "Use the sort() cursor method with -1 for descending."
      ],
      "approach": "Append `.sort({ age: -1 })` to the find query to sort results descending by age.",
      "timeComplexity": "O(N log N) without index, O(N) with index.",
      "spaceComplexity": "O(N) for sorting in memory if no index is used.",
      "solution": "db.users.find({}).sort({ age: -1 });\n",
      "optimizedSolution": "db.users.find({}).sort({ age: -1 }); // Requires index on age: db.users.createIndex({ age: -1 })\n",
      "commonMistakes": [
        "Sorting in memory exceeding the 32MB limit if no index is used."
      ],
      "followUp": [
        "How do you sort by multiple fields, e.g., age then name?"
      ]
    },
    {
      "id": "mongo-code-4",
      "title": "Pagination",
      "difficulty": "Medium",
      "topics": [
        "MongoDB",
        "Pagination"
      ],
      "problemStatement": "Write a query to implement pagination on the `users` collection. Retrieve the second page of results, assuming 10 items per page, sorted by `_id`.",
      "examples": [
        {
          "input": "Page 2, Limit 10",
          "output": "Documents 11 to 20",
          "explanation": "Skips the first 10 documents and limits the output to 10."
        }
      ],
      "constraints": [
        "Collection can be very large"
      ],
      "hints": [
        "Use skip() and limit()."
      ],
      "approach": "Use `.skip(10)` to bypass the first page and `.limit(10)` to restrict the output to 10 documents.",
      "timeComplexity": "O(N) where N is skip + limit for offset pagination.",
      "spaceComplexity": "O(1)",
      "solution": "db.users.find({}).sort({ _id: 1 }).skip(10).limit(10);\n",
      "optimizedSolution": "db.users.find({ _id: { $gt: last_id } }).limit(10); // Cursor-based pagination is better for performance on large collections\n",
      "commonMistakes": [
        "Using skip() for large offsets which is slow because the server still scans the skipped documents."
      ],
      "followUp": [
        "How would you implement cursor-based pagination?"
      ]
    },
    {
      "id": "mongo-code-5",
      "title": "Aggregation Pipeline",
      "difficulty": "Medium",
      "topics": [
        "MongoDB",
        "Aggregation"
      ],
      "problemStatement": "Write a simple aggregation pipeline that calculates the total number of users and the average age of all users in the collection.",
      "examples": [
        {
          "input": "Users collection",
          "output": "{ totalUsers: 100, averageAge: 25.5 }",
          "explanation": "Groups all documents to calculate total and average."
        }
      ],
      "constraints": [
        "Assume valid numeric ages"
      ],
      "hints": [
        "Use the $group stage with _id: null.",
        "Use $sum and $avg operators."
      ],
      "approach": "Use an aggregation pipeline with a `$group` stage. Group by `null` to process all documents, use `$sum: 1` for count and `$avg: '$age'` for average.",
      "timeComplexity": "O(N) to scan all documents.",
      "spaceComplexity": "O(1) for the grouped result.",
      "solution": "db.users.aggregate([\n  {\n    $group: {\n      _id: null,\n      totalUsers: { $sum: 1 },\n      averageAge: { $avg: '$age' },\n    },\n  },\n]);\n",
      "optimizedSolution": "db.users.aggregate([\n  {\n    $group: {\n      _id: null,\n      totalUsers: { $sum: 1 },\n      averageAge: { $avg: '$age' },\n    },\n  },\n]);\n",
      "commonMistakes": [
        "Forgetting to group by null when aggregating the entire collection."
      ],
      "followUp": [
        "How do you filter documents before grouping?"
      ]
    },
    {
      "id": "mongo-code-6",
      "title": "$lookup",
      "difficulty": "Medium",
      "topics": [
        "MongoDB",
        "Aggregation",
        "Joins"
      ],
      "problemStatement": "Write an aggregation pipeline to join the `users` collection with the `orders` collection. The `orders` collection has a `userId` field referencing `users._id`.",
      "examples": [
        {
          "input": "users and orders collections",
          "output": "Users with an array of their orders",
          "explanation": "Performs a left outer join."
        }
      ],
      "constraints": [
        "Assume 1-to-many relationship"
      ],
      "hints": [
        "Use the $lookup stage."
      ],
      "approach": "Use the `$lookup` stage specifying `from: 'orders'`, `localField: '_id'`, `foreignField: 'userId'`, and `as: 'userOrders'`.",
      "timeComplexity": "O(N * M) where N is users and M is orders, heavily optimized if foreignField is indexed.",
      "spaceComplexity": "O(K) where K is the size of joined documents.",
      "solution": "db.users.aggregate([\n  {\n    $lookup: {\n      from: 'orders',\n      localField: '_id',\n      foreignField: 'userId',\n      as: 'userOrders',\n    },\n  },\n]);\n",
      "optimizedSolution": "db.users.aggregate([\n  {\n    $lookup: {\n      from: 'orders',\n      localField: '_id',\n      foreignField: 'userId',\n      as: 'userOrders',\n    },\n  },\n]); // Ensure index on orders.userId for performance\n",
      "commonMistakes": [
        "Not creating an index on the foreignField, leading to slow joins.",
        "Document size exceeding 16MB if a user has too many orders."
      ],
      "followUp": [
        "How do you handle cases where a user has thousands of orders?"
      ]
    },
    {
      "id": "mongo-code-7",
      "title": "$group",
      "difficulty": "Medium",
      "topics": [
        "MongoDB",
        "Aggregation"
      ],
      "problemStatement": "Group users by their `status` ('active', 'inactive') and count the number of users in each status.",
      "examples": [
        {
          "input": "Users with statuses",
          "output": "[{_id: 'active', count: 50}, {_id: 'inactive', count: 20}]",
          "explanation": "Counts users grouped by status."
        }
      ],
      "constraints": [
        "Status is a string field"
      ],
      "hints": [
        "Use $group with _id: '$status'"
      ],
      "approach": "Use the `$group` stage setting `_id` to `$status` and use `$sum: 1` to count occurrences.",
      "timeComplexity": "O(N) to process all documents.",
      "spaceComplexity": "O(U) where U is the number of unique statuses.",
      "solution": "db.users.aggregate([\n  {\n    $group: {\n      _id: '$status',\n      count: { $sum: 1 },\n    },\n  },\n]);\n",
      "optimizedSolution": "db.users.aggregate([\n  {\n    $group: {\n      _id: '$status',\n      count: { $sum: 1 },\n    },\n  },\n]);\n",
      "commonMistakes": [
        "Using incorrect field path (missing '$' prefix for the _id field)."
      ],
      "followUp": [
        "How would you get the list of user names in each status group?"
      ]
    },
    {
      "id": "mongo-code-8",
      "title": "$match",
      "difficulty": "Easy",
      "topics": [
        "MongoDB",
        "Aggregation"
      ],
      "problemStatement": "In an aggregation pipeline, filter the users to only include those whose `age` is greater than 25 before performing any other operations.",
      "examples": [
        {
          "input": "Users of various ages",
          "output": "Pipeline continues with users > 25",
          "explanation": "Filters documents early in the pipeline."
        }
      ],
      "constraints": [
        "Place match early for performance"
      ],
      "hints": [
        "Use the $match stage."
      ],
      "approach": "Use `$match` at the beginning of the pipeline with a standard query document like `{ age: { $gt: 25 } }`.",
      "timeComplexity": "O(log N + K) if age is indexed, O(N) otherwise.",
      "spaceComplexity": "O(1)",
      "solution": "db.users.aggregate([\n  {\n    $match: { age: { $gt: 25 } },\n  },\n]);\n",
      "optimizedSolution": "db.users.aggregate([\n  {\n    $match: { age: { $gt: 25 } },\n  },\n]); // Index on age is utilized if $match is the first stage\n",
      "commonMistakes": [
        "Placing $match after a $group or $project stage when the filter could be applied earlier, missing index usage."
      ],
      "followUp": [
        "Why is it important to put $match as early as possible in the pipeline?"
      ]
    },
    {
      "id": "mongo-code-9",
      "title": "$project",
      "difficulty": "Easy",
      "topics": [
        "MongoDB",
        "Aggregation"
      ],
      "problemStatement": "Use an aggregation pipeline to return only the `name` and `email` fields of users, excluding the `_id` field.",
      "examples": [
        {
          "input": "User document with many fields",
          "output": "{name: 'John', email: 'john@example.com'}",
          "explanation": "Reshapes the output document."
        }
      ],
      "constraints": [
        "Exclude _id explicitly"
      ],
      "hints": [
        "Use the $project stage."
      ],
      "approach": "Use the `$project` stage specifying `{ name: 1, email: 1, _id: 0 }`.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1) per document",
      "solution": "db.users.aggregate([\n  {\n    $project: {\n      name: 1,\n      email: 1,\n      _id: 0,\n    },\n  },\n]);\n",
      "optimizedSolution": "db.users.aggregate([\n  {\n    $project: {\n      name: 1,\n      email: 1,\n      _id: 0,\n    },\n  },\n]);\n",
      "commonMistakes": [
        "Forgetting to explicitly exclude _id with _id: 0 if it's not wanted."
      ],
      "followUp": [
        "How can you create a new computed field using $project?"
      ]
    },
    {
      "id": "mongo-code-10",
      "title": "Count documents",
      "difficulty": "Easy",
      "topics": [
        "MongoDB",
        "CRUD"
      ],
      "problemStatement": "Write a query to efficiently count the total number of documents in the `users` collection.",
      "examples": [
        {
          "input": "Collection of users",
          "output": "1500",
          "explanation": "Returns the integer count."
        }
      ],
      "constraints": [
        "Must be fast for large collections"
      ],
      "hints": [
        "Use countDocuments() or estimatedDocumentCount()"
      ],
      "approach": "Use `db.collection.countDocuments({})` for an accurate count or `estimatedDocumentCount()` for a fast estimate.",
      "timeComplexity": "O(N) for countDocuments, O(1) for estimatedDocumentCount.",
      "spaceComplexity": "O(1)",
      "solution": "db.users.countDocuments({});\n",
      "optimizedSolution": "db.users.estimatedDocumentCount(); // Much faster for large collections as it relies on collection metadata\n",
      "commonMistakes": [
        "Using .find().count() which is deprecated or slow."
      ],
      "followUp": [
        "When would you use estimatedDocumentCount vs countDocuments?"
      ]
    },
    {
      "id": "mongo-code-11",
      "title": "Indexing example",
      "difficulty": "Medium",
      "topics": [
        "MongoDB",
        "Indexing"
      ],
      "problemStatement": "Create a compound index on the `users` collection to optimize a query that filters by `lastName` and sorts by `firstName`.",
      "examples": [
        {
          "input": "Query: find({lastName: 'Smith'}).sort({firstName: 1})",
          "output": "Index created",
          "explanation": "Index on lastName and firstName."
        }
      ],
      "constraints": [
        "Order of fields in index matters"
      ],
      "hints": [
        "Equality, Sort, Range rule (ESR)."
      ],
      "approach": "Create an index using `db.collection.createIndex({ lastName: 1, firstName: 1 })`. Following ESR, equality field (`lastName`) comes first, then sort field (`firstName`).",
      "timeComplexity": "Index creation time depends on collection size.",
      "spaceComplexity": "O(Index Size)",
      "solution": "db.users.createIndex({ lastName: 1, firstName: 1 });\n",
      "optimizedSolution": "db.users.createIndex(\n  { lastName: 1, firstName: 1 },\n  { background: true },\n); // Create in background for production\n",
      "commonMistakes": [
        "Putting the sort field before the equality field in the index definition."
      ],
      "followUp": [
        "What is the ESR rule for indexing?"
      ]
    },
    {
      "id": "mongo-code-12",
      "title": "Text Search",
      "difficulty": "Hard",
      "topics": [
        "MongoDB",
        "Search",
        "Indexing"
      ],
      "problemStatement": "Write a query to perform a full-text search for the word 'mongodb' in the `articles` collection. Assume a text index exists.",
      "examples": [
        {
          "input": "Search 'mongodb'",
          "output": "Articles containing 'mongodb'",
          "explanation": "Uses text index for search."
        }
      ],
      "constraints": [
        "Requires text index"
      ],
      "hints": [
        "Use the $text operator and $search."
      ],
      "approach": "First, ensure a text index exists. Then use the `$text` operator with `$search` to query the collection.",
      "timeComplexity": "Depends on text index size and result count.",
      "spaceComplexity": "O(1)",
      "solution": "db.articles.find({ $text: { $search: 'mongodb' } });\n",
      "optimizedSolution": "db.articles\n  .find(\n    { $text: { $search: 'mongodb' } },\n    { score: { $meta: 'textScore' } },\n  )\n  .sort({ score: { $meta: 'textScore' } }); // Sort by relevance score\n",
      "commonMistakes": [
        "Forgetting to create a text index before using $text.",
        "Not sorting by textScore."
      ],
      "followUp": [
        "How do you search for an exact phrase instead of individual words?"
      ]
    },
    {
      "id": "mongo-code-13",
      "title": "Update many",
      "difficulty": "Medium",
      "topics": [
        "MongoDB",
        "CRUD"
      ],
      "problemStatement": "Write a query to update all users whose `status` is 'pending' and set their `status` to 'active'.",
      "examples": [
        {
          "input": "Users with status 'pending'",
          "output": "Users updated to 'active'",
          "explanation": "Updates multiple documents."
        }
      ],
      "constraints": [
        "Use appropriate update operator"
      ],
      "hints": [
        "Use updateMany() and $set."
      ],
      "approach": "Use `db.collection.updateMany()` with a filter `{ status: 'pending' }` and an update document `{ $set: { status: 'active' } }`.",
      "timeComplexity": "O(N) where N is the number of matched documents.",
      "spaceComplexity": "O(1)",
      "solution": "db.users.updateMany(\n  { status: 'pending' },\n  { $set: { status: 'active' } },\n);\n",
      "optimizedSolution": "db.users.updateMany(\n  { status: 'pending' },\n  { $set: { status: 'active' } },\n);\n",
      "commonMistakes": [
        "Using updateOne instead of updateMany.",
        "Forgetting the $set operator."
      ],
      "followUp": [
        "How do you increment a numeric field during an update?"
      ]
    },
    {
      "id": "mongo-code-14",
      "title": "Delete many",
      "difficulty": "Easy",
      "topics": [
        "MongoDB",
        "CRUD"
      ],
      "problemStatement": "Write a query to delete all users who have not logged in for over a year (assume a `lastLogin` date field exists).",
      "examples": [
        {
          "input": "Users with lastLogin < 1 year ago",
          "output": "Documents removed",
          "explanation": "Deletes documents matching the criteria."
        }
      ],
      "constraints": [
        "Permanent deletion"
      ],
      "hints": [
        "Use deleteMany() and $lt."
      ],
      "approach": "Calculate the date one year ago. Use `db.collection.deleteMany()` with a filter `{ lastLogin: { $lt: oneYearAgoDate } }`.",
      "timeComplexity": "O(N) to find and remove documents.",
      "spaceComplexity": "O(1)",
      "solution": "const oneYearAgo = new Date();\noneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);\ndb.users.deleteMany({ lastLogin: { $lt: oneYearAgo } });\n",
      "optimizedSolution": "const oneYearAgo = new Date();\noneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);\ndb.users.deleteMany({ lastLogin: { $lt: oneYearAgo } }); // Ensure index on lastLogin\n",
      "commonMistakes": [
        "Accidentally running deleteMany({}) without a filter, wiping the collection."
      ],
      "followUp": [
        "What is a soft delete and how would you implement it instead?"
      ]
    },
    {
      "id": "mongo-code-15",
      "title": "Transactions",
      "difficulty": "Hard",
      "topics": [
        "MongoDB",
        "Transactions"
      ],
      "problemStatement": "Write a basic example of starting a session, initiating a transaction, updating two collections (`accounts`), and committing the transaction in Node.js/MongoDB driver.",
      "examples": [
        {
          "input": "Transfer funds from account A to B",
          "output": "Both accounts updated or neither",
          "explanation": "Ensures atomicity across multiple operations."
        }
      ],
      "constraints": [
        "Requires replica set"
      ],
      "hints": [
        "Use client.startSession() and session.withTransaction()."
      ],
      "approach": "Start a session from the MongoClient. Use the `withTransaction` helper which automatically starts, commits, or aborts the transaction on error.",
      "timeComplexity": "Depends on operations within the transaction.",
      "spaceComplexity": "O(1)",
      "solution": "const session = client.startSession();\ntry {\n  await session.withTransaction(async () => {\n    await db\n      .collection('accounts')\n      .updateOne(\n        { _id: 'A' },\n        { $inc: { balance: -100 } },\n        { session },\n      );\n    await db\n      .collection('accounts')\n      .updateOne(\n        { _id: 'B' },\n        { $inc: { balance: 100 } },\n        { session },\n      );\n  });\n} finally {\n  await session.endSession();\n}\n",
      "optimizedSolution": "const session = client.startSession();\ntry {\n  await session.withTransaction(async () => {\n    await db\n      .collection('accounts')\n      .updateOne(\n        { _id: 'A' },\n        { $inc: { balance: -100 } },\n        { session },\n      );\n    await db\n      .collection('accounts')\n      .updateOne(\n        { _id: 'B' },\n        { $inc: { balance: 100 } },\n        { session },\n      );\n  });\n} finally {\n  await session.endSession();\n}\n",
      "commonMistakes": [
        "Forgetting to pass the `{ session }` object to the operations inside the transaction.",
        "Running transactions on a standalone instance (requires replica set or sharded cluster)."
      ],
      "followUp": [
        "What happens if a transaction takes too long?"
      ]
    }
  ]
};
