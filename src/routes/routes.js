const db = require('../configs/database/database');
const TasksController = require('../controllers/TasksController');

module.exports = (app) => {
  app.get("/", TasksController.generateTask());

  app.delete("/tasks/:id", TasksController.deleteTask());

  app.post('/tasks', TasksController.insertTask());

  app.put('/tasks/:id', TasksController.updateTask());

};
