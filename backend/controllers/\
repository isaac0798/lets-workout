require('dotenv').config();
const express = require('express')
const app = express()
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const cookieParser = require('cookie-parser');
const port = 3000
const path = require('path')
const {dbConnected} = require('./backend/sql/connect.js');
const saveUser = require('./backend/sql/repository/saveUser.js');

app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());
app.use('/webapi/weight', require('./backend/controllers/UserWeightController.js'));

passport.serializeUser(function(user, done) {
    done(null, user);
});
passport.deserializeUser(function(user, done) {
    done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/api/account/google"
  },
  (accessToken, refreshToken, profile, done) => {
    if (dbConnected) {
      saveUser(profile, con);
    }
    return done(null, profile)
  }
));

app.get('/auth', passport.authenticate('google', 
  { 
    scope:  ["profile", "email"], 
    prompt: 'select_account'
  }));
app.get('/auth/error', (req, res) => res.send('Unknown Error'))
app.get('/api/account/google', passport.authenticate('google', { failureRedirect: '/auth/error' }),
  function(req, res) {
    res.cookie("lets_workout_user", req.user);
    res.redirect('/');
  }
);

app.use(express.static(__dirname+'/public'))

app.get('/', (req, res) => {
  if (!req.cookies.lets_workout_user) {
    res.redirect('/welcome')
  }
  
  res.sendFile(path.join(__dirname+'/public/html/index.html'));
})

app.get('/welcome', (req, res) => {
  res.sendFile(path.join(__dirname+'/public/html/welcome.html'));
})

app.get('/logout', (req, res) => {
  res.clearCookie("lets_workout_user");
  req.logout();
  res.redirect('/welcome')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
