module.exports = {
  tableName: 'social_post_labels',
  attributes: {

    post_id: {
        type: 'string',
        columnType: 'varchar'
    },
    label_id: {
        type: 'number',
        columnType: 'int'
    },
    // Khai bao lien ket toi models CoreLabels
    label_id: {
    	model: 'CoreLabels'        
    	
    },
    // Ket noi giua model SocilaPostLabels voi model SocialPosts
    post_id: {
        model: 'SocialPosts',
        unique: true
    }
  },
  
};