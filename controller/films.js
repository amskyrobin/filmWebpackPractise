var express = require('express');
var filmRouter = express.Router();
var Films = require('../client/src/models/films.js');

var filmArray = Films();

filmRouter.get('/', function(req, res){
  res.json(filmArray);

});


// filmRouter.get('/:id', function(req, res){
//   res.json({data: filmArray[req.params.id]});
// });

filmRouter.get('/:id', function(req, res){
  res.json({data: filmArray[req.params.id]});
});

filmRouter.post('/', function(req, res){

});

module.exports = filmRouter;