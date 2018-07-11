var request = require('request');

module.exports = {

  friendlyName: 'fb G Posts',


  description: 'Trả về danh sách các bài viết của 1 page ',


  inputs: {    
    pageId: {
      type: 'string',
      example: 'page_id',
      description: 'id của page',
      required: true
    }

  },


  fn: async function (inputs, exits) {
    // Lấy danh sách các bài viết của page
           var page_url=  'https://graph.facebook.com/v3.0/me/accounts?type=page&access_token='+inputs.token;
           var page_options = {method: 'GET', url: page_url, json: true};
           request(page_options, function (err, response) {
            if (err) {
              //return 'null';
              return exits.success(err);
            }

            var page_data = response.body.data;
            return exits.success(page_data);
          });
  }

};