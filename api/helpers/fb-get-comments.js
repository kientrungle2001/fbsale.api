var request = require('request');

module.exports = {

  friendlyName: 'fb Get Comments',
  description: 'Trả về danh sách các comments của 1 bài viết ',
  inputs: {    
    postId: {
      type: 'string',
      example: 'post_id',
      description: 'id của bài viết',
      required: true
    },
    token: {
      type: 'string',
      example: 'access_token',
      description: 'access_token',
      required: true
    }

  },
  // link test ( method: GET): /2125248527733637_2144299215828568/comments?field=from
  fn: async function (inputs, exits) {
    // Lấy danh sách các comments của bài viết 
           var page_url=  'https://graph.facebook.com/v3.0/'+inputs.postId+'/comments?fields=id,message,full_picture,from{id,name,picture{url}},attachment,created_time,updated_time&access_token='+inputs.token;
           var page_options = {method: 'GET', url: page_url, json: true};
           request(page_options, function (err, response) {
           
            if (err) {
              //return 'null';
              return exits.success(err);
            }

            var comments_data = response.body.data;
            return exits.success(comments_data);
          });
  }

};