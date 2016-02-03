/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var searchRouter = express.Router();

  searchRouter.get('/', function(req, res) {
    res.send({
      'search': []
    });
  });

  searchRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  searchRouter.get('/:id', function(req, res) {
    res.send({
      'search': {
        id: req.params.id
      }
    });
  });

  searchRouter.put('/:id', function(req, res) {
    res.send({
      'search': {
        id: req.params.id
      }
    });
  });

  searchRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/search', require('body-parser'));
  app.use('/api/search', searchRouter);
};
