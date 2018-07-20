var request = require('request');

module.exports = {

  friendlyName: 'fb Hidden Comments',


  description: 'Ẩn comments',


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

  // Link test( method: DELETE): /2125248527733637/feed/2125248527733637_2146062748985548
  fn: async function (inputs, exits) {
    // Delete Post, return "success": true
           var page_url=  'https://graph.facebook.com/v3.0/'+inputs.commentId+'?access_token='+inputs.token+'&is_hidden=true';
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