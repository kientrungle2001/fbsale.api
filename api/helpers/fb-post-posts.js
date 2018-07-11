var request = require('request');

module.exports = {

  friendlyName: 'fb Post Posts',


  description: 'Đăng bài viết theo lịch đặt sẵn ',


  inputs: {    
    pageId: {
      type: 'string',
      example: 'page_id',
      description: 'id của page',
      required: true
    },
    content:{
      type: 'string',
      example: 'Lịch khai giảng lớp văn miêu tả tháng 7',
      description: 'Nội dung của bài viết',
      required: true
    },
    published:{
      type: 'boolean',
      example: true,
      description: 'Hiển thị chế độ : true: đăng luôn; false: chờ đăng',

    },
    time: {
      type: 'string',
      example: 'Thời gian đăng bài',
      description: 'Thời gian đăng bài',
      
    }


  },


  fn: async function (inputs, exits) {
    
    // Tạo bài viết đặt lịch đăng cho bài viết:
    // cài đặt các tham số: published= false ; scheduled_publish_time = time;
    
    // Nếu đăng luôn không cần đặt lịch
    if(!inputs.time){
      var post_id=  'https://graph.facebook.com/v3.0/'+inputs.pageId+'/feed?message='+ inputs.content+'&access_token='+inputs.token;
      var post_options = {method: 'POST', url: page_url, json: true};
      request(post_options, function (err, response) {
            if (err) {
              //return 'null';
              return exits.success(err);
            }

            var post_id = response.body.data;
            return exits.success(post_id);
          });
    }else{
      // Đặt lịch đăng
      var post_id=  'https://graph.facebook.com/v3.0/'+inputs.pageId+'/feed?message='+ inputs.content+'&published='+ inputs.published+'&scheduled_publish_time='+inputs.time+'&access_token='+inputs.token;
      var post_options = {method: 'POST', url: page_url, json: true};
      request(post_options, function (err, response) {
            if (err) {
              //return 'null';
              return exits.success(err);
            }

            var post_id = response.body.data;
            return exits.success(post_id);
          });
    }
      
    
           
  }

};