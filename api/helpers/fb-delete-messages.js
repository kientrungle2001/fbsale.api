var request = require('request');

module.exports = {

  friendlyName: 'fb Delete Messages',


  description: 'Xoa Messages',


  inputs: {    
    messageId: {
      type: 'string',
      example: 'message_id',
      description: 'id của message',
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
    // Delete Message, return "success": true
           var page_url=  'https://graph.facebook.com/v3.0/'+inputs.messageId+'?access_token='+inputs.token;
           var page_options = {method: 'DELETE', url: page_url, json: true};
           request(page_options, function (err, response) {
            if (err) {
              //return 'null';
              return exits.success(err);
            }
            var status = response.body.data;
            return exits.success(status);
          });
  }

};