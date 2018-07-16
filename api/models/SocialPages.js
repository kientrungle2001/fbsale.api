module.exports = {
  tableName: 'social_pages',
  attributes: {

    name: {
        type: 'string',
        columnType: 'varchar'
    },
    facebook_id: {
        type: 'string',
        columnType: 'varchar'
    },
    user_id: {
        type: 'number',
        columnType: 'int'
    },
    page_id: {
        type: 'string',
        columnType: 'varchar'
    },    
    status: {
        type: 'number',
        columnType: 'tinyint'
    },
    // Khai báo liên kết với model SocialPosts
    ref_posts:{
        collection: 'SocialPosts',
        via: 'page_id'
    }
  },
  
};