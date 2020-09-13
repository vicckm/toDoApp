
// const db = require("../configs/database/db");
// const TasksDao = require("../configs/dao/tasks-dao");
const TasksController = require('../controllers/TasksController');

module.exports = (app) => {
  app.get("/", TasksController.generateTask());
};
