var request = require('request');

module.exports = {

  friendlyName: 'fb Post Messages',


  description: 'Trả lời tin nhắn của khách hàng',


  inputs: {    
    messageId: {
      type: 'string',
      example: 'message_id',
      description: 'id tin nhắn',
      required: true
    },
    token: {
      type: 'string',
      example: 'access_token',
      description: 'access_token',
      required: true
    },
    content: {
      type: 'string',
      example: 'Xin chào! Tôi có thể giúp gì cho bạn?',
      description: 'Nội dung tin nhắn',
      required: true
    }

  },

// Link test (method: POST): /t_100001917775117/messages?message=Me too
  fn: async function (inputs, exits) {
    // Trả lời các tin nhắn. kết quả hàm trả về id của tin nhắn vừa post
           var page_url=  'https://graph.facebook.com/v3.0/'+inputs.messageId+'/messages?access_token='+inputs.token+'&message='+inputs.content;
           var page_options = {method: 'POST', url: page_url, json: true};
           request(page_options, function (err, response) {
            if (err) {
              //return 'null';
              return exits.success(err);
            }

            var message_data = response.body.data;
            return exits.success(message_data);
          });
  }

};