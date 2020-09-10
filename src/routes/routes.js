const createPageToDo = require("../views/toDoApp");
const db = require("../configs/database/db");

module.exports = (app) => {
  app.get("/", (req, res) => {
    db.all("SELECT * FROM tasks", (err, rows) => {
      if (rows.length > 0) {
        res.send(createPageToDo(rows));
      } else {
        res.send(createPageToDo());
      }
    });
  });
};
