const { app } = require("../server/custom-express");
const middlewares = require('../middlewares/middlewares');
const routes = require("../../routes/routes");
const port = process.env.PORT || 8080;

middlewares(app);

routes(app);

app.listen(port, () => {
  console.log(`Server started in http://localhost:${port} :)`);
});

module.exports = app;
