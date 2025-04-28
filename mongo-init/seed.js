db = db.getSiblingDB('mydb');
db.users.insertMany([
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 }
]);