const express = require('express');
const apiRouter = express.Router();

// define minions route
const minionRouter = require('/server/minionRouter.js');
app.use('/minions', minionRouter);

// define ideas Route
const ideaRouter = require('/server/ideaRouter.js');
app.use('/ideas', ideaRouter);

// define meetings Router
const meetingRouter = require('/server/meetingRouter.js');
app.use('/meetings', meetingRouter);


module.exports = apiRouter;
