const router = require("express").Router();

module.exports = db => {
  router.get("/new_session", (request, response) => {
    db.query(
      `
      select date_end, * from sessions
      `
    ).then(({ rows: sessions }) => {
      response.json(sessions);
    });
  });

  return router;
};