// use the data from .env
require("dotenv").config();

const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const cors = require("cors");
const port = 3001;

//Connect our Database to server
const { Pool } = require("pg");
const dbParams = require("./db");
const db = new Pool(dbParams);
db.connect();

//Express configuration
app.use(bodyParser.json());
app.use(cors());

//twilio
// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const client = require("twilio")(accountSid, authToken);

// client.messages
//   .create({
//     body: "Your on the waitlist",
//     from: "+19206146871",
//     to: "+15145746006",
//   })
//   .then((message) => console.log(message.status));

const complete_session = require("./routes/complete_session");
const edit_user = require("./routes/edit_user");
const get_sessions = require("./routes/get_sessions");
const move_upper_position = require("./routes/move_upper_position");
const move_lower_position = require("./routes/move_lower_position");
const new_session = require("./routes/new_session");
const get_settings = require("./routes/get_settings");

app.use("/api", complete_session(db));
app.use("/api", edit_user(db));
app.use("/api", get_sessions(db));
app.use("/api", move_upper_position(db));
app.use("/api", move_lower_position(db));
app.use("/api", new_session(db));
app.use("/api", get_settings(db));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
