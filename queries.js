// Select all the information about Users
db.users.find();

// Select the user with id 4
db.users.find({ id: 4 }); // gives array like cursor object

db.users.findOne({ id: 4 }); // gives simple object of the user information

db.users.findOne({ website: "ambrose.net" });

// Select all the user who age is less than 50
// lt operator in query
db.users.find({ age: { $lt: 50 } });

// Select all the user who age is greater than 50
// gt operator in query
db.users.find({ age: { $gt: 50 } });

// Select all the users who age is less than or equal to 35
// lte operator in query
db.users.find({ age: { $lte: 35 } });

// Select all the users whose age is between 40 and 50 ( include 40 & 50 )
db.users.find({ age: { $lte: 50, $gte: 40 } });

// First two users whose age is between 40 and 50 ( include 40 & 50 )
db.users.find({ age: { $lte: 50, $gte: 40 } }).limit(2);

// 3, 4 users whose age is between 40 and 50 ( include 40 & 50 )
db.users
  .find({ age: { $lte: 50, $gte: 40 } })
  .skip(2)
  .limit(2);

// operators

// $in
// select all the users whose name is in the list
// ['Clementina DuBuque', 'Nicholas Runolfsdottir V', 'Mrs. Dennis Schulist']
db.users.find({
  name: {
    $in: [
      "Clementina DuBuque",
      "Nicholas Runolfsdottir V",
      "Mrs. Dennis Schulist",
    ],
  },
});

// $nin
// select all the users expect whose name is in the list
// ['Clementina DuBuque', 'Nicholas Runolfsdottir V', 'Mrs. Dennis Schulist']
db.users.find({
  name: {
    $nin: [
      "Clementina DuBuque",
      "Nicholas Runolfsdottir V",
      "Mrs. Dennis Schulist",
    ],
  },
});

// $regex
// select all the users expect whose name has charater D in
db.users.find({
  name: {
    $regex: "D",
  },
});

// Projection
// Select name, id, website from the users coollection
db.users.find({}, { name: 1, id: 1, website: 1 });

// Select all fields except website from the users coollection
db.users.find({}, { website: 0 });

// handling composite fields
// Objects
// Select all the users who stay in kulas light street
db.users.find({ "address.street": "Kulas Light" });

// Array
// Select all the users who has the hobby of "Coding" or "Sleep"
// in this or that
db.users.find({ hobbies: { $in: ["Coding", "Sleep"] } });

// Select all the users who has the hobby of both "Coding", "Sleep"
db.users.find({ hobbies: { $all: ["Coding", "Sleep"] } });
