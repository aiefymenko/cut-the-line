const router = require("express").Router();

module.exports = db => {
  router.post("/edit_user/:session_id", (request, response) => {
    const queryString =
      `
      UPDATE users
      SET first_name = $1,
        last_name = $2,
        contact_number = $3,
        group_size = $4
      WHERE id =
          (SELECT user_id
            FROM sessions
            WHERE id = $5)
    `;

    const values = [request.body.first_name, request.body.last_name, request.body.contact_number, request.body.group_size, request.params.id];

    db.query(queryString, values)
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
// POST - localhost:3001/api/edit_user/2
// JSON Body:
// {
//   "first_name": "a",
//   "last_name": "b",
//   "contact_number": "911",
//   "group_size": 2
// }