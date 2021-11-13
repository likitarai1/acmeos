module.exports = function (app) {
  /*
   * Routes
   */
  app.use('/doubt', require('./routes/doubt'));
  app.use('/comment', require('./routes/comment'));
  app.use('/vote', require('./routes/vote'));
};
