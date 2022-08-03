const router = require("express").Router();

module.exports = db => {
  router.get("/get_settings", (request, response) => {
    db.query(
      `
      SELECT name,
        url,
        capacity,
        LOCATION
      FROM settings
      `
    ).then(({ rows: settings }) => {
      response.json(settings);
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
// GET - localhost:3001/api/get_settings