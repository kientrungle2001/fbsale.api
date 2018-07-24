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
    assign_id: {
        type: 'number',
        columnType: 'int'
    },
	parent_id: {
        type: 'number',
        columnType: 'int'
    },
	type: {
        type: 'string',
        columnType: 'varchar'
    },
	content: {
        type: 'string',
        columnType: 'text'
    },
	image: {
        type: 'string',
        columnType: 'varchar'
    },
	facebook_user_id: {
        type: 'string',
        columnType: 'varchar'
    },
	facebook_user_name: {
        type: 'string',
        columnType: 'varchar'
    },
	facebook_user_avatar: {
        type: 'string',
        columnType: 'varchar'
    },
	facebook_post_id: {
		type: 'string',
        columnType: 'varchar'
	},
	
	facebook_parent_post_id: {
		type: 'string',
        columnType: 'varchar'
	},
	read: {
        type: 'number',
        columnType: 'tinyint'
    },
    replied: {
        type: 'number',
        columnType: 'tinyint'
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