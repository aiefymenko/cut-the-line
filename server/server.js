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


const complete_session = require("./routes/complete_session");
const edit_user = require("./routes/edit_user");
const get_sessions = require("./routes/get_sessions");
const move_upper_position = require("./routes/move_upper_position");
const move_lower_position = require("./routes/move_lower_position");
const new_session = require("./routes/new_session");



app.use("/api", complete_session(db));
app.use("/api", edit_user(db));
app.use("/api", get_sessions(db));
app.use("/api", move_upper_position(db));
app.use("/api", move_lower_position(db));
app.use("/api", new_session(db));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
