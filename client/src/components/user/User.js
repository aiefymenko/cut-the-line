import axios from "axios";
import React, { useState } from "react";

function User() {
  const [sms, setSms] = useState("Verified");
  const [number, setNumber] = useState("");

  const sendSms = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3001/api/messages", {
        to: `1${number}`,
        body: sms,
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  const handleChange = (event) => {
    if (event.target.name === "number") {
      setNumber(event.target.value);
    } else if (event.target.name === "sms") {
      setSms(event.target.value);
    }
  };

  return (
    <>
      <header>Send SMS Message!</header>
      <form onSubmit={sendSms}>
        <label>Mobile Number:</label>
        <input name="number" onChange={handleChange}></input>
        <label>Message:</label>
        <textarea name="sms" onChange={handleChange} value={sms}></textarea>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default User;
