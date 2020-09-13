const TasksController = require('../controllers/TasksController');

module.exports = (app) => {
  app.get("/", TasksController.generateTask());
};
