const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server");
  const db = client.db("TodoApp");

  //   db.collection("Todos").insertOne(
  //     {
  //       text: "Something to do",
  //       completed: true,
  //     },
  //     (err, result) => {
  //       if (err) {
  //         return console.log("Unable to insert todo", err);
  //       }

  //       console.log(JSON.stringify(result.ops, undefined, 2));
  //     }
  //   );

  db.collection("Users").insertOne(
    {
      name: "Salisu",
      age: 20,
      location: "Kaduna",
    },
    (err, result) => {
      if (err) {
        return console.log("Unable to insert todo", err);
      }

      console.log(JSON.stringify(result.ops, undefined, 2));
    }
  );

  client.close();
});