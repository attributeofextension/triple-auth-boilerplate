const express = require("express");
const passport = require("passport");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');


mongoose.connect(keys.mongoURI);

const app = express();

app.use(cookieSession({
  name: "quote machine",
  keys: [keys.cookieKey],
  maxAge: 24 * 60 * 60 * 1000
}));

app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());



require("./routes/authRoutes")(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT);