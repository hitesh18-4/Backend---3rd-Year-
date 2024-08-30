<!-- Microsoft Windows [Version 10.0.19045.4842]
(c) Microsoft Corporation. All rights reserved.

C:\Users\User>mongosh
Current Mongosh Log ID: 66d142635994b6b7e02710bb
Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.0
Using MongoDB:          7.0.14
Using Mongosh:          2.3.0

For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/

------
   The server generated these startup warnings when booting
   2024-08-30T00:33:03.984+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
------

test> use hitesh
switched to db hitesh
hitesh> db.col.countDocuments()
0
hitesh> db.col.estimatedDocumentCount()
0
hitesh> db.createCollection
[Function: createCollection] AsyncFunction {
  apiVersions: [ 1, Infinity ],
  returnsPromise: true,
  serverVersions: [ '0.0.0', '999.999.999' ],
  topologies: [ 'ReplSet', 'Sharded', 'LoadBalanced', 'Standalone' ],
  returnType: { type: 'unknown', attributes: {} },
  deprecated: false,
  platforms: [ 'Compass', 'Browser', 'CLI' ],
  isDirectShellCommand: false,
  acceptsRawInput: false,
  shellCommandCompleter: undefined,
  help: [Function (anonymous)] Help
}
hitesh>

hitesh>

hitesh>


hitesh>

hitesh>

hitesh> db.user.insertMany([name:"Jack",age:20,marks:85,subject :"Mathematcis"},{name:"Bohitesh> db.user.insertMany([name:"Jack",age:20,marks:85,subject :"Mathematcis"},{name:"Bob",age:22,marks:78,subject:"Physics"},{name:"Nav",age:21,marks:92,subject:"Chemistry"},{name:"Hitesh",age:19,marks:90,subject:"Chemistry"}
Uncaught:
SyntaxError: Unexpected token, expected "," (1:24)

> 1 | db.user.insertMany([name:"Jack",age:20,marks:85,subject :"Mathematcis"},{name:"Bob",age:22,marks:78,subject:"Physics"},{name:"Nav",age:21,marks:92,subject:"Chemistry"},{name:"Hitesh",age:19,marks:90,subject:"Chemistry"}
    |                         ^
  2 |

hitesh> db.user.insertMany([{name:"Jack",age:20,marks:85,subject :"Mathematcis"},{name:"Bob",age:22,marks:78,subject:"Physics"},{name:"Nav",age:21,marks:92,subject:"Chemistry"},{name:"Hitesh",age:19,marks:90,subject:"Chemistry"])}
Uncaught:
SyntaxError: Unexpected token, expected "," (1:219)

> 1 | db.user.insertMany([{name:"Jack",age:20,marks:85,subject :"Mathematcis"},{name:"Bob",age:22,marks:78,subject:"Physics"},{name:"Nav",age:21,marks:92,subject:"Chemistry"},{name:"Hitesh",age:19,marks:90,subject:"Chemistry"])}
    |                                                                                                                                                                                                                            ^
  2 |

hitesh> db.user.insertMany([{name:"Jack",age:20,marks:85,subject :"Mathematcis"},{name:"Bob",age:22,marks:78,subject:"Physics"},{name:"Nav",age:21,marks:92,subject:"Chemistry"},{name:"Hitesh",age:19,marks:90,subject:"Chemistry"}])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('66d14a575994b6b7e02710bc'),
    '1': ObjectId('66d14a575994b6b7e02710bd'),
    '2': ObjectId('66d14a575994b6b7e02710be'),
    '3': ObjectId('66d14a575994b6b7e02710bf')
  }
}
hitesh> db.createCollection("Student")
{ ok: 1 }
hitesh> db.user.insertMany([{name:"Jack",age:20,marks:85,subject :"Mathematcis"},{name:"Bob",age:22,marks:78,subject:"Physics"},{name:"Nav",age:21,marks:92,subject:"Chemistry"},{name:"Hitesh",age:19,marks:90,subject:"Chemistry"])}
Uncaught:
SyntaxError: Unexpected token, expected "," (1:219)

> 1 | db.user.insertMany([{name:"Jack",age:20,marks:85,subject :"Mathematcis"},{name:"Bob",age:22,marks:78,subject:"Physics"},{name:"Nav",age:21,marks:92,subject:"Chemistry"},{name:"Hitesh",age:19,marks:90,subject:"Chemistry"])}
    |                                                                                                                                                                                                                            ^
  2 |

hitesh> db.Student.insertMany([{name:"Jack",age:20,marks:85,subject :"Mathematcis"},{name:"Bob",age:22,marks:78,subject:"Physics"},{name:"Nav",age:21,marks:92,subject:"Chemistry"},{name:"Hitesh",age:19,marks:90,subject:"Chemistry"}])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('66d14b625994b6b7e02710c0'),
    '1': ObjectId('66d14b625994b6b7e02710c1'),
    '2': ObjectId('66d14b625994b6b7e02710c2'),
    '3': ObjectId('66d14b625994b6b7e02710c3')
  }
}
hitesh> db.createCollection("Faculty")
{ ok: 1 }
hitesh> db.Student.insertMany([{name:"Jaiko",age:60,rating:85,subject :"Mathematcis"},{name:"Boby",age:82,rating:78,subject:"Physics"},{name:"Naiv",age:56,rating:92,subject:"Chemistry"},{name:"CHinky",age:45,rating:90,subject:"Chemistry"}])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('66d14c255994b6b7e02710c4'),
    '1': ObjectId('66d14c255994b6b7e02710c5'),
    '2': ObjectId('66d14c255994b6b7e02710c6'),
    '3': ObjectId('66d14c255994b6b7e02710c7')
  }
}
hitesh> db.user.insertOne({date:ISOdate()});
ReferenceError: ISOdate is not defined
hitesh> db.user.insertOne({date:ISODate()});
{
  acknowledged: true,
  insertedId: ObjectId('66d14cef5994b6b7e02710c8')
}
hitesh> db.user.find().pretty();
[
  {
    _id: ObjectId('66d14a575994b6b7e02710bc'),
    name: 'Jack',
    age: 20,
    marks: 85,
    subject: 'Mathematcis'
  },
  {
    _id: ObjectId('66d14a575994b6b7e02710bd'),
    name: 'Bob',
    age: 22,
    marks: 78,
    subject: 'Physics'
  },
  {
    _id: ObjectId('66d14a575994b6b7e02710be'),
    name: 'Nav',
    age: 21,
    marks: 92,
    subject: 'Chemistry'
  },
  {
    _id: ObjectId('66d14a575994b6b7e02710bf'),
    name: 'Hitesh',
    age: 19,
    marks: 90,
    subject: 'Chemistry'
  },
  {
    _id: ObjectId('66d14cef5994b6b7e02710c8'),
    date: ISODate('2024-08-30T04:39:11.415Z')
  }
]
hitesh>
(To exit, press Ctrl+C again or Ctrl+D or type .exit)
C:\Users\User>d('66d14a575994b6b7e02710bc'),
  name: 'Jack',
C:\Users\User>
  marks: 85,
C:\Users\User>thematcis'
}
C:\Users\User>db -->