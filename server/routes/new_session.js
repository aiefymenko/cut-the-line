const router = require("express").Router();

module.exports = db => {
  router.post("/new_session", (request, response) => {
    const firstName = request.body.first_name;
    const lastName = request.body.last_name;
    const contactNumber = request.body.contact_number;
    const groupSize = request.body.group_size;

    const queryString =
    `INSERT INTO users (first_name, last_name, contact_number, group_size)
     VALUES ($1, $2, $3, $4)
     RETURNING *`
    ;
    const values = [firstName, lastName, contactNumber, groupSize];

    const queryString1 =
    `INSERT INTO sessions (waitlist_id, user_id, outcome_id, date_start, date_end, position)
    VALUES ($1, $2, $3, CURRENT_TIMESTAMP, $4, (SELECT MAX(position) + 1 FROM sessions))
    RETURNING *
    `
    ;

    db.query(queryString, values)
      .then((data) => {
        db.query(queryString1, [1, data.rows[0].id, 5, null])
          .then(() => {
            response.status(204).json({});
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
// POST - localhost:3001/api/new_session
// JSON body
// {
//   "first_name": "Artem",
//   "last_name": "Iefymenko",
//   "contact_number": "+1416-696-5576",
//   "group_size": 8
// }