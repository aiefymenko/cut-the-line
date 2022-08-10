const router = require("express").Router();

module.exports = db => {
  router.get("/get_position/:id", (request, response) => {
    db.query(
      `
      SELECT sessions.position
      FROM sessions
      JOIN users ON sessions.user_id = users.id
      WHERE sessions.id = $1
      `,
      [request.params.id]
    ).then((result) => {
      const position = result.rows[0];
      response.json(position);
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
// GET - localhost:3001/api/get_position/1