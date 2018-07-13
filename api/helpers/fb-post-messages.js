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
    },
    type: {
      type: 'string',
      example: 'image',
      description: 'Kiểu file cần gửi: text, image, ...',
      required: true
    }

  },

// Link test (method: POST): /t_100001917775117/messages?message=Me too
  fn: async function (inputs, exits) {
    // Trả lời các tin nhắn. kết quả hàm trả về id của tin nhắn vừa post
    //https://developers.facebook.com/docs/messenger-platform/send-messages
    //https://developers.facebook.com/docs/messenger-platform/reference/send-api/
          /*if(inputs.type =='image'){
              var data_post = {
              "recipient":{
                "id":"2093115144032161"
              },
              "message":{
                "attachment":{
                  "type":"image", 
                  "payload":{
                    "url":"http://www.messenger-rocks.com/image.jpg", 
                    "is_reusable":true
                  }
                }
              }
            }
          }else if(inputs.type =='text'){
              var data_post = {
                "recipient":{
                  "id":"2093115144032161"
                },
                "message":{
                  "message":{
                    "text":"hello world!"
                   
                    }
                }
              }
            }*/

          
           //var page_url=  'https://graph.facebook.com/v3.0/'+inputs.messageId+'/messages?access_token='+inputs.token+'&message='+inputs.content;
           var data_post = {
                "messaging_type": "RESPONSE",
                "recipient": JSON.stringify({
                  "id":"2093115144032161"
                }),
                "message":JSON.stringify({
                  
                    "text":"hello world!"
      
                })
              };
           var page_url=  'https://graph.facebook.com/v3.0/me/messages?access_token='+inputs.token;
           var page_options = {method: 'POST', url: page_url,data: data_post, json: true};
           request(page_options, function (err, response) {
            if (err) {
              //return 'null';
              return exits.success(err);
            }

            var message_data = response.body;
            return exits.success(page_options);
          });
  }

};