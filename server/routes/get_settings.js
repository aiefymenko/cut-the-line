const { response } = require("express");

const router = require("express").Router();

module.exports = (db) => {
  router.get("/get_settings", (request, response) => {
    db.query(
      `
      SELECT name,
        url,
        capacity,
        LOCATION
      FROM settings
      `
    )
      .then(({ rows: settings }) => {
        response.json(settings);
      })
      .catch((err) => {
        response.status(500).json({ error: err.message });
      });
  });

  router.put("/get_settings/:id", (request, response) => {
    const queryString = `
      UPDATE settings
      SET name = $1,
      url = $2,
      capacity = $3,
      location = $4
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

// request call:
// GET - localhost:3001/api/get_settings
