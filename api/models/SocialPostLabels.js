module.exports = {
  tableName: 'social_post_labels',
  attributes: {

    // Khai bao lien ket toi models CoreLabels
    label_id: {
    	model: 'CoreLabels'        
    	
    },
    // Ket noi giua model SocilaPostLabels voi model SocialPosts
    post_id: {
        model: 'SocialPosts',
    }
  },
  
};