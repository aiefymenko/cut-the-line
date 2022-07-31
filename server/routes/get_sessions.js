const router = require("express").Router();

module.exports = db => {
  router.get("/get_sessions", (request, response) => {
    db.query(
      `
      SELECT users.first_name, users.last_name, users.group_size, 
        CAST (extract(epoch from CURRENT_TIMESTAMP - sessions.date_start)/60 AS INTEGER) AS wait_duration, sessions.position
      FROM sessions
      JOIN users ON sessions.user_id = users.id
      `
    ).then(({ rows: sessions }) => {
      response.json(sessions);
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