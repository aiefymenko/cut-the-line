/* eslint-disable camelcase */
//testing
// use the data from .env
require("dotenv").config();

const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const cors = require("cors");
const pino = require("express-pino-logger")();
const port = 3001;

//Connect our Database to server
const { Pool } = require("pg");
const dbParams = require("./db");
const db = new Pool(dbParams);
db.connect();

//Express configuration
app.use(bodyParser.json());
app.use(cors());
app.use(pino);

const complete_session = require("./routes/complete_session");
const edit_user = require("./routes/edit_user");
const get_sessions = require("./routes/get_sessions");
const move_upper_position = require("./routes/move_upper_position");
const move_lower_position = require("./routes/move_lower_position");
const new_session = require("./routes/new_session");
const get_settings = require("./routes/get_settings");
const edit_settings = require("./routes/edit_settings");
const twilio = require("./routes/twilio");
const estimated_wait_time = require("./routes/get_estimated_wait_time");
const get_position = require("./routes/get_position");
const get_outcomes = require("./routes/get_outcomes");

app.use("/api", complete_session(db));
app.use("/api", edit_user(db));
app.use("/api", get_sessions(db));
app.use("/api", move_upper_position(db));
app.use("/api", move_lower_position(db));
app.use("/api", new_session(db));
app.use("/api", get_settings(db));
app.use("/api", edit_settings(db));
app.use("/api", twilio());
app.use("/api", estimated_wait_time(db));
app.use("/api", get_position(db));
app.use("/api", get_outcomes(db));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
