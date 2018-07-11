var request = require('request');

module.exports = {

  friendlyName: 'fb Get Url Post',


  description: 'Trả về link chi tiết của 1 bài viết khi biết: postId của bài viết ',


  inputs: {    
    postId: {
      type: 'string',
      example: 'post_id',
      description: 'id của post',
      required: true
    }
  },
  fn: async function (inputs, exits) {
    // Lấy chi tiết của 1 bài viết
    
    var post_url=  'https://www.facebook.com/'+inputs.postId;
    return exits.success(post_url);
  }
}

