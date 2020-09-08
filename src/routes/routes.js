const pageToDo = require("../views/toDoApp");
const createPageToDo = require("../views/toDoApp");

let db = [
  { name: "Lucio", tasks: [{ title: "Oi", description: "yoga segunda e quarta" }, { title: "Teste", description: "yoga segunda e quarta" }]},
  { name: "Jussara", tasks: [{ title: "Musculação", description: "Malhar todo dia" }]}
];


module.exports = (app) => {
  app.get("/", (req, res) => {
    // res.send(createPageToDo(db[0].tasks));
    res.send(createPageToDo([]));
  });

  app.get("/:name", (req, res) => {
    for(let i = 0; i < db.length; i++){
      if(req.params.name == db[i].name){
        res.send(createPageToDo(db[i].tasks))
      }
    }
  })

  app.get("/testenodemon", (req, res) => {
    res.send("<h1>Rota testada utilizando nodemon</h1>");
  });
};
