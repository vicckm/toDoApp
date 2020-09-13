const express = require("express");
const app = express();
const port = 3333;
const routes = require('./src/routes/routes');

routes(app);

app.listen(port, () => {
  console.log("Server started :)");
});

module.exports = app;