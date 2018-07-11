var request = require('request');

module.exports = {

  friendlyName: 'fb Get Pages',


  description: 'Trả về danh sách các page đang quản lý của user',


  inputs: {

    
    token: {
      type: 'string',
      example: 'access_token',
      description: 'Mã access_token của  người dùng',
      required: true
    }

  },

  // Link test(method: GET): /me/accounts?type=page

  fn: async function (inputs, exits) {
    // Lấy danh sách các page
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