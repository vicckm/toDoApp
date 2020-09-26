let db = require("../configs/database/database");
const TasksDao = require("../dao/tasksDao");
const createPage = require("../views/toDoApp");
const exit = require("../configs/database/createTables");

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
            res.send(createPage([]));
          }
        })
        .catch((err) => {
          if (err) return exit(err);
        });
    };
  }

  static deleteTask() {
    return (req, res) => {
      const tasksDao = new TasksDao(db);

      tasksDao
        .delete(req.params.id)
        .then((resp) => {
          res.send(resp);
        })
        .catch((err) => {
          return exit(err);
        });
    };
  };

  static insertTask() {
    return (req, res) => {
      const tasksDao = new TasksDao(db);

      tasksDao.insert(req.body.titleTask, req.body.descriptionTask, req.body.statusTask)
      .then( resp => { res.redirect('/') })
      .catch( err => { return exit(err) })
      
    };
  };

  static updateTask() {
    return (req, res) => {
      const tasksDao = new TasksDao(db);

      tasksDao.update(req.body.titleTask, req.body.descriptionTask, req.body.statusTask, req.params.id)
      .then(resp => { res.redirect('/') })
      .catch(err => { return exit(err) });
    };
  };

};

module.exports = TasksController;
