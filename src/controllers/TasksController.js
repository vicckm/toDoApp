let db = require("../configs/database/db");
const TasksDao = require("../dao/tasks-dao");
const createPage = require("../views/toDoApp");

class TasksController {
  static generateTask() {
    return (req, res) => {
      const tasksDao = new TasksDao(db);

      tasksDao
        .list()
        .then((rows) => {
          if (rows.length > 0) {
            res.send(createPage(rows));
          } else {
            res.send(createPage());
          }
        })
        .catch((err) => console.log(err));
    };
  }
}

module.exports = TasksController;
