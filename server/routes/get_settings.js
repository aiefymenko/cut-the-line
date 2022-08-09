const router = require("express").Router();

module.exports = (db) => {
  router.get("/get_settings", (request, response) => {
    db.query(
      `
      SELECT 
        id,
        name,
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

  router.get("/get_settings/:id", (request, response) => {
    const { id } = request.params;
    db.query(
      `
      SELECT *
      FROM settings
      WHERE id = $1
      `,
      [id]
    )
      .then(({ rows: settings }) => {
        response.json(settings);
      })
      .catch((err) => {
        response.status(500).json({ error: err.message });
      });
  });

  return router;
};

// request call:
// GET - localhost:3001/api/get_settings
