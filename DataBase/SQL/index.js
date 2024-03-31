const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use("/views", express.static(path.join(__dirname, "/views")));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'sahil@sanghar',
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

//Home Route

app.get("/", (req, res) => {
  let q = `SELECT COUNT(*) FROM user;`
  try {
    connection.query(q, (err, result) => {
        if(err) throw err;
        let count = result[0]["COUNT(*)"];
        res.render("home.ejs", { count });
    })
} catch(err) {
    console.log(err);
    res.send("some error in DB!")
};
});

//Show Route

app.get("/user", (req, res) => {
  let q = `SELECT * FROM user;`
  try {
    connection.query(q, (err, users) => {
        if(err) throw err;
        res.render("show.ejs", { users })
    });
} catch(err) {
    console.log(err);
    res.send("some error in DB!")
};
});

//Edit route

app.get("/user/:id/edit", (req, res) => {
  let {id} = req.params;
  let q = `SELECT * FROM user WHERE id='${id}'`;
  try {
    connection.query(q, (err, result) => {
        if(err) throw err;
        let user = result[0];
        res.render("edit.ejs", { user });
    });
} catch(err) {
    console.log(err);
    res.send("some error in DB!")
};
});

// Assuming 'connection' is your database connection object

app.patch("/user/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { password: formPass, username: newUsername } = req.body;

    const q = `SELECT * FROM user WHERE id='${id}'`;
    const result = await queryAsync(q);

    const user = result[0];

    if (formPass !== user.password) {
      res.send("Wrong password");
    } else {
      const q2 = `UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
      const result2 = await queryAsync(q2);

      res.send(result2);
      console.log(result2);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Some error in DB!");
  }
});

// Helper function to promisify the MySQL query
function queryAsync(query) {
  return new Promise((resolve, reject) => {
    connection.query(query, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}
//Update route

// app.patch("/user/:id", (req, res) => {
//   let {id} = parseInt(req.params.id);
//   let { password: formPass, username: newUsername } = req.body;
//   let q = `SELECT * FROM user WHERE id='${id}'`;

//   try {
//     connection.query(q, (err, result) => {
//         if(err) throw err;
//         let user = result[0];
//         if(formPass != user.password) {
//           res.send("Wrong password")
//         } else {
//           let q2 = `UPDATE user SET username= '${ newUsername }' WHERE id='${ id }'`;
//           connection.query(q2, (err, result) => {
//             if(err) throw err;
//             res.send(result);
//             // res.redirect("/user");
//             console.log(result);
//           });
//         };
//     });
// } catch(err) {
//     console.log(err);
//     res.send("some error in DB!");
// };
// });


app.listen("8080", () => {
  console.log("server is listening to port 8080");
});

