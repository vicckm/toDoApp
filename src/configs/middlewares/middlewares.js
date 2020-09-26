const { express } = require('../server/custom-express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

module.exports = (app) => {
    app.use('/static', express.static(__dirname + '../../../public'));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(methodOverride((req, res) => {
        if (req.body && typeof req.body === 'object' && '_method' in req.body && req.body.idTask != "null") {
          // look in urlencoded POST bodies and delete it
          let method = req.body._method
          delete req.body._method
          return method
        }
    }));
}

