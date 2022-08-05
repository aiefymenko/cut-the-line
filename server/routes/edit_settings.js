const { response } = require("express");

const router = require("express").Router();

module.exports = (db) => {
  router.put("/edit_settings/:id", (request, response) => {
    console.log(req.params.id);
    const queryString = `
      UPDATE settings
      SET name = $1,
      url = $2,
      capacity = $3,
      location = $4
      WHERE id = $5
    `;
    const values = [
      request.body.name,
      request.body.url,
      request.body.capacity,
      request.body.location,
      request.params.id,
    ];

    db.query(queryString, values)
      .then(() => {
        response.status(204).json({});
      })
      .catch((err) => {
        response.status(500).json({ error: err.message });
      });
  });

  return router;
};
