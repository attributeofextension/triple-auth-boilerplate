const passport = require("passport");

module.exports = (app) => {
  app.get('/auth/twitter', passport.authenticate("twitter"));
  app.get('/auth/twitter/callback', passport.authenticate("twitter"));
  app.get('/auth/google',passport.authenticate("google", {scope: ['profile']} ));
  app.get('/auth/google/callback', passport.authenticate("google"));
  app.get('/auth/facebook', passport.authenticate("facebook"));
  app.get('/auth/facebook/callback', passport.authenticate("facebook"));
}