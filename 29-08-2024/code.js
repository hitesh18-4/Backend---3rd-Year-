// Microsoft Windows [Version 10.0.19045.4780]
// (c) Microsoft Corporation. All rights reserved.

// C:\Users\User>mongosh mongodb://localhost:27017
// Current Mongosh Log ID: 66d005fe8c87dd0f942710bb
// Connecting to:          mongodb://localhost:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.0
// Using MongoDB:          7.0.14
// Using Mongosh:          2.3.0

// For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/

// ------
//    The server generated these startup warnings when booting
//    2024-08-29T10:33:55.969+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
// ------

// test> show dbs
// admin    40.00 KiB
// config  108.00 KiB
// local    72.00 KiB
// test> use hitesh
// switched to db hitesh
// hitesh> db.myCollection.insertOne({x:1})
// {
//   acknowledged: true,
//   insertedId: ObjectId('66d006518c87dd0f942710bc')
// }
// hitesh>