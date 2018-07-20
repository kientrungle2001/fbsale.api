var request = require('request');

module.exports = {

  friendlyName: 'fb Delete Comments',


  description: 'Xoa comments',


  inputs: {    
    commentId: {
      type: 'string',
      example: 'comment_id',
      description: 'id của comment',
      required: true
    },
    token: {
      type: 'string',
      example: 'access_token',
      description: 'access_token',
      required: true
    }
  },

  
  fn: async function (inputs, exits) {
    // Delete Post, return "success": true
           var page_url=  'https://graph.facebook.com/v3.0/'+inputs.commentId+'/comments?access_token='+inputs.token;
           var page_options = {method: 'DELETE', url: page_url, json: true};
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