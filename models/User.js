const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  twitterId: String,
  facebookId: String,
  googleId: String
});

mongoose.model('users',userSchema);
