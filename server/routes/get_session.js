const router = require("express").Router();

module.exports = db => {
  router.get("/get_session/:id", (request, response) => {

    console.log("hihi");
    const queryString =
      `
    SELECT users.first_name, users.last_name, users.group_size, users.contact_number, sessions.id,
      CAST (extract(epoch from CURRENT_TIMESTAMP - sessions.date_start)/60 AS INTEGER) AS wait_duration, sessions.position
    FROM sessions
    JOIN users ON sessions.user_id = users.id
    WHERE sessions.id = $1
    `;

    const values = [request.params.id];



    db.query(queryString, values)
      .then(({ rows: session }) => {
        response.json(session);
      })
      .catch(err => {
        response
          .status(500)
          .json({ error: err.message });
      });
  });

  return router;
};


// request call:
// GET - localhost:3001/api/get_sessions