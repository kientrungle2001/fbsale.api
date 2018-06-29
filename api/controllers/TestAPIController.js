module.exports = {
	testApi: async function(req, res){
		// Test connect API of SocialPostLabels model with CoreLabels model
		/*await SocialPostLabels.create({
		  post_id: '1',
		  label_id: 1
		});
		
		var post = await SocialPostLabels.find().populate('label_id');*/
		// Test connect API of SocialPosts model with SocialPages model
		/*await SocialPages.create({
		  page_id: '1',
		  facebook_id: '1',
		  name: 'Luyện thi vào lớp 6 Trần Đại Nghĩa',
		  status: 1
		});*/
		/*await SocialPosts.create({
		  page_id: '1',
		  asign_id: 1,
		  has_phone: 1,
		  facebook_id: '22222'
		});*/
		
		var post = await SocialPosts.find().populate('page_id');
		res.json(post);
		
	}
};