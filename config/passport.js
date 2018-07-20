'use strict';

var passport = require('passport'),
    FacebookStrategy = require('passport-facebook').Strategy,
    request = require('request');


var verifyHandler = function(req, token, tokenSecret, profile, done) {

  process.nextTick(function() {
    // Lấy thông tin người dùng
    var url = 'https://graph.facebook.com/v2.4/me?access_token=%s&fields=id,name,email,first_name,last_name,gender';
    url = url.replace('%s', token);

    var options = {method: 'GET', url: url, json: true};
    request(options, function (err, response) {
      if (err) {
        return done(null, null);
      }

      var data = {
        id: response.body.id,
        first_name: response.body.first_name,  //jshint ignore:line
        last_name: response.body.last_name,    //jshint ignore:line
        email: response.body.email,
        gender: response.body.gender,
        token: token
      };
    
      return done(null, data);
    });
     

  });
};

/*passport.use(new FacebookStrategy({
  clientID: "197905414264089", // Use your Facebook App Id
  clientSecret: "9e9216d1fd301ae19404fd00ce1e9265", // Use your Facebook App Secret
  callbackURL: "https://localhost:1337/auth/facebook/callback",
  passReqToCallback: true
}, verifyHandler));*/
/*passport.use(new FacebookStrategy({
  clientID: "883878255137345", // Use your Facebook App Id
  clientSecret: "250fca92e3d1dd9254cf9baf48ddd430", // Use your Facebook App Secret
  callbackURL: "https://localhost:1337/auth/facebook/callback",
  passReqToCallback: true
}, verifyHandler));*/
passport.use(new FacebookStrategy({
  clientID: "299054264171222", // Use your Facebook App Id
  clientSecret: "7088e35e017968c68af735fe9d1918f9", // Use your Facebook App Secret
  callbackURL: "https://localhost:1337/auth/facebook/callback",
  passReqToCallback: true
}, verifyHandler));