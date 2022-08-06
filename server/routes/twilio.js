const router = require("express").Router();
require("dotenv").config();

//to send sms by twilio
module.exports = () => {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER;
  const client = require("twilio")(accountSid, authToken, TWILIO_PHONE_NUMBER);

  router.post("/messages", (req, res) => {
  
    client.messages
      .create({
        from: process.env.TWILIO_PHONE_NUMBER,
        to: req.body.to,
        body: req.body.body,
      })
      .then(() => {
        res.status(201).send(req.body.body);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};
//test
