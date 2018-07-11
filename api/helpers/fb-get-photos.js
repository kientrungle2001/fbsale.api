var request = require('request');
module.exports = {

  friendlyName: 'fb Get Photos',


  description: 'Trả về danh sách các ảnh đã post ',

 
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
  //link test (method: GET): /2125248527733637/photos
  fn: async function (inputs, exits) {
    // Lấy danh sách các ảnh của page
           var page_url=  'https://graph.facebook.com/v3.0/'+inputs.pageId+'/photos?access_token='+inputs.token;
           var page_options = {method: 'GET', url: page_url, json: true};
           request(page_options, function (err, response) {
           
            if (err) {
              //return 'null';
              return exits.success(err);
            }

            var page_photos = response.body.data;
            return exits.success(page_photos);
          });
  }

};