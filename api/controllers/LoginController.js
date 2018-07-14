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
           
        var dataPages = await sails.helpers.fbGetPages.with({ token:user.token });        
        //res.json(dataPages);
        // Hiển thị danh sách pages
          if(dataPages){                       
            pageId1=  dataPages[0]['id'];
            pageName1= dataPages[0]['name'];
            page_access_token= dataPages[0]['access_token'];
            //console.log(page_access_token);
            // Get các bài viết từ Page
            /*var postInPages = await sails.helpers.fbGetPosts.with({ pageId:pageId1, token: user.token });
            res.json(postInPages);*/
            //Get Url của bài viết            
            
            /*var getUrlPost = await sails.helpers.fbGetUrlPosts.with({ postId:'2125248527733637_2144299215828568'});
            res.json(getUrlPost);*/

            // Get các ảnh từ Page
            /*var photosInPages = await sails.helpers.fbGetPhotos.with({ pageId:pageId1, token: user.token });
            res.json(photosInPages);*/

            // Get các comments của bài viết
           /* var commentsInPost = await sails.helpers.fbGetComments.with({ postId:'2125248527733637_2144299215828568', token: user.token });
            res.json(commentsInPost);*/

            // Get các Messages của page
            /*var messages = await sails.helpers.fbGetMessages.with({ pageId:'2125248527733637', token: page_access_token });
            res.json(messages);*/

            // Reply message :Trả lời tin nhắn
            /*var messages = await sails.helpers.fbReplyMessages.with({ messageId:'t_100001917775117', token: page_access_token,type:'text', content: "Bạn có yêu thơ?"  });
            res.json(messages);*/
            // Post message : Nhắn tin
            /*var messages = await sails.helpers.fbPostMessages.with({ recipient:'2093115144032161', token: page_access_token,type:'image', content: 'http://nextnobels.com/default/skin/nobel/themes/story/media/logo.png'  });
            res.json(messages);*/

            // Post bài viết: theo lịch đặt sẵn có kèm ảnh
            /*var messages = await sails.helpers.fbPostPosts.with({ pageId:'2125248527733637', token: page_access_token, content:'Ngày mới tốt lành!', type:'image', time: 0, url: 'http://nextnobels.com/default/skin/nobel/themes/story/media/logo.png'});
            res.json(messages);*/
            // Post bài có kèm video: https://www.youtube.com/watch?v=HkuKHwetV6Q
            /*var messages = await sails.helpers.fbPostPosts.with({ pageId:'2125248527733637', token: page_access_token, content:'Vide is good!', type:'video', time: 0, url: 'https://www.youtube.com/watch?v=HkuKHwetV6Q'});
            res.json(messages);*/
          } 
          
        }
      }
      
    })(req, res, next);
  },
  signup: async function (req, res) {  },

};