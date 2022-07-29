// use the data from .env
require("dotenv").config();

const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const cors = require('cors');
const port = 3001;


//Connect our Database to server
const { Pool } = require("pg");
const dbParams = require("./db");
const db = new Pool(dbParams);
db.connect();

//Express configuration
app.use(bodyParser.json());
app.use(cors());


//Get all the users
app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result.rows);
    }
  });
});

//Get user
app.get("/users/:id", (req, res) => {
  db.query("SELECT * FROM users WHERE id = $1", [req.params.id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result.rows[0]);
    }
  });
});

//Create user
app.post("/users", (req, res) => {
  const firstName = req.body.first_name;
  const lastName = req.body.last_name;
  const contactNumber = req.body.contact_number;
  const groupSize = req.body.group_size;


  db.query("INSERT INTO users (first_name, last_name, contact_number, group_size) VALUES ($1, $2, $3, $4) returning *", [firstName, lastName, contactNumber, groupSize], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result.rows[0]);
    }
  });
});

//Update user
// app.put("/users/:id", (req, res) => {
//   console.log(req.params.id);
//   console.log(req.body);
//   res.status(200).json({
//     status: "success",
//     data: {
//       user: "Artem"
//     },
     
//   });
// });

//Delete user
app.delete("/users/:id", (req, res) => {
  db.query("DELETE FROM users WHERE id = $1", [req.params.id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result.rows);
    }
  });
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
