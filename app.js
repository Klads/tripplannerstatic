const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const path = require('path');

const router = require('./routes');
const models = require('./models');

const app = express();

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '/node_modules/bootstrap/dist')));
app.use('/', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.use('/', express.static(path.join(__dirname, '/public')));

nunjucks.configure('views', {noCache: true}); 
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use(router);

models.db.sync({})
.then(function() {
  app.listen(3000, function() {
    console.log('listening impatiently on port', 3000);
    //console.log(__dirname + '/node_modules/bootstrap/dist');
  });
}).catch(console.error)
