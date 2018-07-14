var request = require('request');

module.exports = {

  friendlyName: 'fb Post Messages',


  description: 'Nhắn tin cho khách hàng',


  inputs: {    
    recipient: {
      type: 'string',
      example: 'recipient Id',
      description: 'id người nhận',
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
    // Trả lời các tin nhắn. kết quả hàm trả về id của tin nhắn vừa post 2093115144032161
    //https://developers.facebook.com/docs/messenger-platform/send-messages
    //https://developers.facebook.com/docs/messenger-platform/reference/send-api/
          if(inputs.type =='image'){
              var data_post = {
              "recipient":JSON.stringify({
                "id":inputs.recipient
              }),
              "message":JSON.stringify({
                "attachment":{
                  "type":"image", 
                  "payload":{
                    "url": inputs.content, 
                    "is_reusable":true
                  }
                }
              })
            }
          }else if(inputs.type =='text'){
              var data_post = {
                "recipient":JSON.stringify({
                  "id":inputs.recipient
                }),
                "message":JSON.stringify({                  
                    "text":inputs.content            
                })
              }
          }else if(inputs.type =='audio'){
              var data_post = {
              "recipient":JSON.stringify({
                "id":inputs.recipient
              }),
              "message":JSON.stringify({
                "attachment":{
                  "type":"audio", 
                  "payload":{
                    "url": inputs.content, 
                    "is_reusable":true
                  }
                }
              })
            }
          }else if(inputs.type =='video'){
              var data_post = {
              "recipient":JSON.stringify({
                "id":inputs.recipient
              }),
              "message":JSON.stringify({
                "attachment":{
                  "type":"video", 
                  "payload":{
                    "url": inputs.content, 
                    "is_reusable":true
                  }
                }
              })
            }
          }else if(inputs.type =='file'){
              var data_post = {
              "recipient":JSON.stringify({
                "id":inputs.recipient
              }),
              "message":JSON.stringify({
                "attachment":{
                  "type":"file", 
                  "payload":{
                    "url": inputs.content, 
                    "is_reusable":true
                  }
                }
              })
            }
          }else if(inputs.type =='template'){
              var data_post = {
              "recipient":JSON.stringify({
                "id":inputs.recipient
              }),
              "message":JSON.stringify({
                "attachment":{
                  "type":"template", 
                  "payload":{
                    "url": inputs.content, 
                    "is_reusable":true
                  }
                }
              })
            }
          }

          
           //var page_url=  'https://graph.facebook.com/v3.0/'+inputs.messageId+'/messages?access_token='+inputs.token+'&message='+inputs.content;
           /*var data_post = {
                "messaging_type": "UPDATE",
                "recipient": JSON.stringify({
                  "id":"2093115144032161"
                }),
                "message":JSON.stringify({
                  
                    "text":inputs.content
      
                })
              };*/
           var page_url=  'https://graph.facebook.com/v3.0/me/messages?access_token='+inputs.token;
           var page_options = {method: 'POST', url: page_url, json: data_post};
           request(page_options, function (err, response) {
            if (err) {
              //return 'null';
              return exits.success(err);
            }

            var message_data = response.body;
            return exits.success(message_data);
          });
  }

};