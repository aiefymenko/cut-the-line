const router = require("express").Router();

module.exports = db => {
  router.post("/complete_session/:id", (request, response) => {

    const queryString =
      `
    UPDATE sessions
    SET date_end = CURRENT_TIMESTAMP,
      outcome_id = $1,
      position = 0
    WHERE id = $2
    `;


    const values = [request.body.outcome_id, request.params.id];

    const queryString1 =
    `
    UPDATE sessions
    SET position = position - 1
    WHERE position > $1
  `;

    const values1 = [request.body.position];

    db.query(queryString, values)
      .then(() => {
        return db.query(queryString1, values1);
      })
      .then(() => {
        response.status(204).json({});
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
// POST - localhost:3001/api/complete_session/2
// JSON Body:
// {
//   "outcome": 3
// }