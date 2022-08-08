const router = require("express").Router();

module.exports = (db) => {
  router.get("/get_estimated_wait_time", (request, response) => {
    db.query(
      `
      SELECT CAST (AVG (CAST (extract(epoch FROM sessions.date_end - sessions.date_start) / 60 AS INTEGER) / users.group_size) *
        (SELECT count(id)
          FROM sessions
          WHERE POSITION > 0) AS INTEGER) AS estimated_wait_time
      FROM sessions
      JOIN users ON sessions.user_id = users.id
      AND sessions.outcome_id = 1
      `
    )
      // eslint-disable-next-line camelcase
      .then(({ rows: wait_time }) => {
        response.json(wait_time);
      })
      .catch((err) => {
        response.status(500).json({ error: err.message });
      });
  });

  return router;
};

// request call:
// GET - localhost:3001/api/get_estimated_wait_time
// Note: Average wait time is calculated based on admitted sessions only. Estimated wait time is calculated by Average wait time * number of waiting sessions.
