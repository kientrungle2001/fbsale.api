var passport = require('passport');
module.exports = {
  userLogin: async function (req, res) {
    var txtEmail= req.body.txtEmail;
    var txtPassword= req.body.txtPassword;
    //res.json(txtPassword);
  	var checkLogin = await CoreUsers.find(
      {
        email: txtEmail, password: txtPassword
      }
    );
    if(checkLogin) {
      res.json("True");
    }else res.json("False");   
  },
  loginFacebook:  function(req, res, next) {

      passport.authenticate('facebook', { scope: ['email', 'user_about_me',
'manage_pages',
'pages_manage_instant_articles',
'pages_show_list',
'publish_pages',
'read_insights',
'read_page_mailboxes'
        ]})(req, res, next);
  },
  facebookCallback:  function(req, res, next) {
    passport.authenticate('facebook', function(err, user) {
      res.json(user);
    /*var pagrow =  CoreUsers.checkUpdate(user);
      // update database
      res.json("Login true");*/
    })(req, res, next);
  },
  signup: async function (req, res) {  },

};