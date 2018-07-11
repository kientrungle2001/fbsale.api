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
  facebookCallback: async function(req, res, next) {
    await passport.authenticate('facebook',async function(err, user) {
      if(user){
        var row = await CoreUsers.checkUpdate(user);
        
        //res.json(row);
        // set session
        /*req.session.token = user.token;
        req.session.userId = row['id'];
        req.session.username = row['username'];
        req.session.facebookId = row['facebook_id'];*/
        
        if(row) {
          // Lấy danh sách các page
           
        /*var dataPages = await sails.helpers.fbGetPages.with({ token:user.token });        
        //res.json(dataPages);
        // Hiển thị danh sách pages
          if(dataPages){

            dataPages.forEach(function(value){
              console.log(value['id']);

            });  
            
            pageId1=  dataPages[0]['id'];
            pageName1= dataPages[0]['name'];
            console.log(pageName1);
            // Get các bài viết từ Page
            var postInPages = await sails.helpers.fbGetPosts.with({ pageId:pageId1, token: user.token });
            res.json(postInPages);
            //Get Url của bài viết
            var postInPages = await sails.helpers.fbGetPosts.with({ pageId:pageId1, token: user.token });
            postInPage1= postInPages[0]['id'];
            //var getUrlPost = await sails.helpers.fbGetUrlPosts.with({ postId:postInPage1, pageName: pageName1 });
            res.json(postInPage1);
            // Get các ảnh từ Page
            var photosInPages = await sails.helpers.fbGetPhotos.with({ pageId:pageId1, token: user.token });
            res.json(photosInPages);
          } */
          
        }
      }
      
    })(req, res, next);
  },
  signup: async function (req, res) {  },

};