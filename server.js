const express = require("express");
const app = express();
const port = 3000;
const routes = require('./src/routes/routes');

routes(app);

app.listen(port, () => {
  console.log("Servidor iniciado :)");
});

module.exports = app;