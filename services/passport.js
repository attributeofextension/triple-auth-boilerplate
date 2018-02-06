const passport = require("passport");
const mongoose = require("mongoose");
const TwitterStrategy = require("passport-twitter").Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const keys = require('../config/keys')

const User = mongoose.model('users');

passport.serializeUser( (user,done) => {
  done(null,user.id);
});
passport.deserializeUser( async (id,done) => {
  const user = await User.findById(id);
  done(null,user);
});

passport.use( new TwitterStrategy({
    consumerKey: keys.twitterConsumerKey,
    consumerSecret: keys.twitterConsumerSecret,
    callbackURL: '/auth/twitter/callback',
    proxy: true
  },
  async (accessToken,refreshToken,profile,done) => {
    const existingUser = await User.findOne({ twitterId : profile.id});
    if(existingUser) {
      return done(null,existingUser);
    } else {
      const user = await new User({twitterId: profile.id}).save();
      return done(null,user);
    }
  }
));
passport.use( new GoogleStrategy({
    clientID: keys.googleClientId,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
  },
  async (accessToken,refreshToken,profile,done) => {
    console.log(profile);
    const existingUser = await User.findOne({ googleId : profile.id});
    if(existingUser) {
      return done(null,existingUser);
    } else {
      const user = await new User({twitterId: profile.id}).save();
      return done(null,user);
    }
  }
));
passport.use( new FacebookStrategy({
    clientID: keys.facebookAppID,
    clientSecret: keys.facebookAppSecret,
    callbackURL: '/auth/facebook/callback',
    proxy: true
  },
  async (accessToken,refreshToken,profile,done) => {
    console.log(profile);
    const existingUser = await User.findOne({ facebookId : profile.id});
    if(existingUser) {
      return done(null,existingUser);
    } else {
      const user = await new User({facebookId: profile.id}).save();
      return done(null,user);
    }
  }
));