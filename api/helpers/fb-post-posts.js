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
    token: {
      type: 'string',
      example: 'page_access_token',
      description: 'access_token của page',
      required: true
    },
    type: {
      type: 'string',
      example: 'image',
      description: 'Loại file post lên',
      required: true
    },
    content:{
      type: 'string',
      example: 'Lịch khai giảng lớp văn miêu tả tháng 7',
      description: 'Nội dung của bài viết'
      
    },
    url:{
      type: 'string',
      example: 'https://www.facebook.com/images/fb_icon_325x325.png',
      description: 'Url của file hoặc ảnh'
     
    },
    /*published:{
      type: 'boolean',
      example: true,
      description: 'Hiển thị chế độ : true: đăng luôn; false: chờ đăng',

    },*/
    time: {
      type: 'ref',
      defaultsTo: '0',
      example: 'tomorrow',
      description: 'Thời gian đăng bài',
      
    }


  },


  fn: async function (inputs, exits) {
    
    // Tạo bài viết đặt lịch đăng cho bài viết:
    // cài đặt các tham số: published= false ; scheduled_publish_time = time;
    
    // Nếu đăng luôn không cần đặt lịch
    if(inputs.type=='text'){
        if(inputs.time <= 0){
            var page_url=  'https://graph.facebook.com/v3.0/'+inputs.pageId+'/feed?message='+ inputs.content+'&access_token='+inputs.token;
            var post_options = {method: 'POST', url: page_url, json: true};
            
        }else{
            // Đặt lịch đăng
            var page_url=  'https://graph.facebook.com/v3.0/'+inputs.pageId+'/feed?message='+ inputs.content+'&published=false&scheduled_publish_time='+inputs.time+'&access_token='+inputs.token;
            var post_options = {method: 'POST', url: page_url, json: true};
            
        
        }
        request(post_options, function (err, response) {
            if (err) {
              //return 'null';
              return exits.success(err);
            }

            var post_id = response.body;
            return exits.success(post_id);
        });
   }else if(inputs.type == 'image'){
      if(inputs.time <= 0){
            var page_url=  'https://graph.facebook.com/v3.0/'+inputs.pageId+'/photos?message='+ inputs.content+'&access_token='+inputs.token+'&url='+ inputs.url;
            var post_options = {method: 'POST', url: page_url, json: true};
            
      }else{
        var page_url=  'https://graph.facebook.com/v3.0/'+inputs.pageId+'/photos?message='+ inputs.content+'&published=false&scheduled_publish_time='+inputs.time+'&access_token='+inputs.token+'&url='+inputs.url;
        var post_options = {method: 'POST', url: page_url, json: true};
      }
      request(post_options, function (err, response) {
            if (err) {
              //return 'null';
              return exits.success(err);
            }

            var post_id = response.body;
            return exits.success(post_id);
        });
   }else if( inputs.type == 'video'){
      if(inputs.time <= 0){
            var page_url=  'https://graph-video.facebook.com/v3.0/'+inputs.pageId+'/videos?message='+ inputs.content+'&access_token='+inputs.token+'&url='+ inputs.url;
            var post_options = {method: 'POST', url: page_url, json: true};
            
      }else{
        var page_url=  'https://graph-video.facebook.com/v3.0/'+inputs.pageId+'/video?message='+ inputs.content+'&published=false&scheduled_publish_time='+inputs.time+'&access_token='+inputs.token+'&url='+inputs.url;
        var post_options = {method: 'POST', url: page_url, json: true};
      }
      request(post_options, function (err, response) {
            if (err) {
              //return 'null';
              return exits.success(err);
            }

            var post_id = response.body;
            return exits.success(post_id);
        });
   }else if (inputs.type == 'file'){
      if(inputs.time <= 0){
            var page_url=  'https://graph.facebook.com/v3.0/'+inputs.pageId+'/photos?message='+ inputs.content+'&access_token='+inputs.token+'&url='+ inputs.url;
            var post_options = {method: 'POST', url: page_url, json: true};
            
      }else{
        var page_url=  'https://graph.facebook.com/v3.0/'+inputs.pageId+'/photos?message='+ inputs.content+'&published=false&scheduled_publish_time='+inputs.time+'&access_token='+inputs.token+'&url='+inputs.url;
        var post_options = {method: 'POST', url: page_url, json: true};
      }
      request(post_options, function (err, response) {
            if (err) {
              //return 'null';
              return exits.success(err);
            }

            var post_id = response.body;
            return exits.success(post_id);
        });
   }
  }
};