const express = require('express');
const apiRouter = express.Router();

// define minions route
const minionRouter = require('./minionRouter.js');
apiRouter.use('/minions', minionRouter);

// define ideas Route
const ideaRouter = require('./ideaRouter.js');
apiRouter.use('/ideas', ideaRouter);

// define meetings Router
const meetingRouter = require('./meetingRouter.js');
apiRouter.use('/meetings', meetingRouter);


module.exports = apiRouter;
