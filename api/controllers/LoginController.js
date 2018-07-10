var passport = require('passport'),
    request = require('request');
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

      passport.authenticate('facebook', { scope: ['email',
        'manage_pages',
        'pages_manage_instant_articles',
        'pages_show_list',
        'publish_pages',
        'read_insights',
        'read_page_mailboxes'
        ]})(req, res, next);
  },
  facebookCallback: function(req, res, next) {
    passport.authenticate('facebook', function(err, user) {
      if(user){
          console.log(user);
        req.session.token = user.token;
        res.json(req.session.token);
        //req.session.username = req.first_name + req.last_name ;
         // update database
        var row =  CoreUsers.checkUpdate(user);
       
        if(row) {
          // Lấy danh sách các page
           var page_url=  'https://graph.facebook.com/v3.0/me/accounts?type=page&access_token='+user.token;
           var page_options = {method: 'GET', url: page_url, json: true};
           request(page_options, function (err, response) {
            if (err) {
              //return 'null';
              res.json('error');
            }

            var page_data = {
              page_id: response.body.data

            };
            console.log(page_data);
          
             res.json(page_data);
          });
        
           
          
        }
      }
      
    })(req, res, next);
  },
  signup: async function (req, res) {  },

};