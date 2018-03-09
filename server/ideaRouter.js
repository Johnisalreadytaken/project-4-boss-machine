const express = require('express');
const ideaRouter = express.Router({mergeParams: true});
const {
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
  deleteAllFromDatabase
} = require('./db.js');

ideaRouter.get('/', (req, res, next) => {
  const requestModel = getAllFromDatabase('ideas');
  res.status(200).send(requestModel);
});

ideaRouter.post('/', (req, res, next) => {
  const newModel = addToDatabase('ideas', req.body);
  if (newModel) {
    res.status(201).send(newModel);
  } else {
    res.status(400).send('invalid idea');
  }
});


module.exports = ideaRouter;
