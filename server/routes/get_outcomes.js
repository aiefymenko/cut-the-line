const router = require("express").Router();

module.exports = db => {
  router.get("/get_outcomes", (request, response) => {
    db.query(
      `
      SELECT outcome_id
      FROM sessions
      `
    ).then(({ rows: outcomes }) => {
      response.json(outcomes);
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
// GET - localhost:3001/api/get_outcomes