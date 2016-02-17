var express = require('express');
var exphbs  = require('express-handlebars');

var ReactDOMServer = require('react-dom/server');
var React = require("react");


require("node-jsx").install();

var app = express();

App = React.createFactory(require("./app"));


app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/as', function (req, res) {
    res.render('home');
});
app.get('/', function (req, res) {
	var markup = ReactDOMServer.renderToString(App());  
    res.render('main', { 
     title: 'Express',
    markup: markup 
  });
});


app.listen(3000);