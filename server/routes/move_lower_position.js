const router = require("express").Router();

module.exports = db => {
  router.post("/move_lower_position/:session_id", (request, response) => {
    const queryString =
      `
    UPDATE sessions
    SET position = position - 1
    WHERE position > $1 AND position <= $2
    `;

    const values = [request.body.old_position, request.body.new_position];

    db.query(queryString, values)
      .then(() => {
        const queryString1 =
          `
        UPDATE sessions
        SET position = $1
        WHERE id = $2
      `;

        const values1 = [request.body.new_position, request.params.session_id];

        db.query(queryString1, values1)
          .then(() => {
            response.status(204).json({});

          })
          .catch(err => {
            response
              .status(500)
              .json({ error: err.message });
          });
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
// POST - localhost:3001/api/move_lower_position/2
// JSON Body:
// {
//   "old_position": 2,
//   "new_position": 4
// }