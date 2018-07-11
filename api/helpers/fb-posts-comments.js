var request = require('request');

module.exports = {

  friendlyName: 'fb Post Comments',


  description: 'Post comments của 1 bài viết, kết quả hàm trả về id của comment ',


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
    },
    comment:{
      type: 'string',
      example: 'Baì viết hữu ích, cám ơn fb!',
      description: 'Nội dung của comment',
      required: true
    }

  },


  fn: async function (inputs, exits) {
    // Post comments, return comment_id
           var page_url=  'https://graph.facebook.com/v3.0/'+inputs.postId+'/comments?message='+inputs.comment+'&access_token='+inputs.token;
           var page_options = {method: 'POST', url: page_url, json: true};
           request(page_options, function (err, response) {
            if (err) {
              //return 'null';
              return exits.success(err);
            }

            var comment_id = response.body.data;
            return exits.success(comment_id);
          });
  }

};