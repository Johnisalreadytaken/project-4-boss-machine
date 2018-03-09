const express = require('express');
const minionRouter = express.Router({mergeParams: true});
const {
  createMeeting,
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
  deleteAllFromDatabase
} = require('./db.js');

minionRouter.param('minionId', (req, res, next, id) => {
  const requestId = getFromDatabasebyId('')
})

minionRouter.get('/', (req, res, next) => {
  const requestModel = getAllFromDatabase('minions');
  res.status(200).send(requestModel);
});

minionRouter.post('/', (req, res, next) => {
  const newModel = addToDatabase('minions', req.body);
  if (newModel) {
    res.status(201).send(newModel);
  } else {
    res.status(400).send('invalid minion');
  }
});

minionRouter.get('/:minionId', (req, res, next) => {
  const
})



module.exports = minionRouter;
