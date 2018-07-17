var request = require('request');

module.exports = {

  friendlyName: 'fb Get Posts',


  description: 'Trả về danh sách các bài viết của 1 page ',


  inputs: {    
    pageId: {
      type: 'string',
      example: 'page_id',
      description: 'id của page',
      required: true
    },
    token: {
      type: 'string',
      example: 'access_token',
      description: 'access_token',
      required: true
    }

  },
  // Link test ( method: GET): /2125248527733637/feed
  fn: async function (inputs, exits) {
    // Lấy danh sách các bài viết của page
           var page_url=  'https://graph.facebook.com/v3.0/'+inputs.pageId+'/feed?fields=id,message,full_picture,created_time,updated_time,from{id,name,picture{url}},comments{id,message,attachment,from{id,name,picture{url}},created_time,updated_time,comments{id,message,attachment,created_time,updated_time,from{	id,name,picture{url}},created_time,updated_time,likes{id,name,pic_large}},likes{id,name,pic_large}},likes{id,name,pic_large}&access_token='+inputs.token;
           var page_options = {method: 'GET', url: page_url, json: true};
           request(page_options, function (err, response) {
           
            if (err) {
              //return 'null';
              return exits.success(err);
            }

            var posts_data = response.body.data;
            return exits.success(posts_data);
          });
  }

};