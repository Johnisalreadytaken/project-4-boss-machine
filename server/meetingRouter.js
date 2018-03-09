const express = require('express');
const meetingRouter = express.Router({mergeParams: true});
const {
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
  deleteAllFromDatabase
} = require('./db.js');

meetingRouter.get('/', (req, res, next) => {
  const requestModel = getAllFromDatabase('meetings');
  res.status(200).send(requestModel);
});

meetingRouter.post('/', (req, res, next) => {
  const newModel = addToDatabase('meetings', req.body);
  if (newModel) {
    res.status(201).send(newModel);
  } else {
    res.status(400).send('invalid meeting');
  }
});

module.exports = meetingRouter;
