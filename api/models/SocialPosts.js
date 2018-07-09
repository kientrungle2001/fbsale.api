module.exports = {
  tableName: 'social_posts',
  attributes: {

    facebook_id: {
        type: 'string',
        columnType: 'varchar'
    },
    has_phone: {
        type: 'number',
        columnType: 'tinyint'
    },
    page_id: {
        type: 'string',
        columnType: 'varchar'
    },
    asign_id: {
        type: 'number',
        columnType: 'int'
    },
     // Khai báo liên kết với model SocialPages
    page_id: {
        model: 'SocialPages'
    },
    // ket noi 1- 1 giua model SocialPosts voi SocialPostLabels
    ref_post_labels:{
        collection: 'SocialPostLabels',
        via: 'post_id'
    }
  },
  
};