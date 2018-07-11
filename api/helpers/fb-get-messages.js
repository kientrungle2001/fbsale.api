var request = require('request');

module.exports = {

  friendlyName: 'fb Get Messages',


  description: 'Trả về danh sách các tin nhắn của  page ',

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

  //link test( method: GET): /2125248527733637/conversations?fields=id,messages
  fn: async function (inputs, exits) {
    // Lấy danh sách các bài tin nhắn của page  
  
           var page_url=  'https://graph.facebook.com/v3.0/'+inputs.pageId+'/conversations?access_token='+inputs.token+'&fields=id,messages{message}';
           var page_options = {method: 'GET', url: page_url, json: true};
           request(page_options, function (err, response) {
            if (err) {
              //return 'null';
              return exits.success(err);
            }

            var messages_data = response.body.data;
            return exits.success(messages_data);
          });
  }

};