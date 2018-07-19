module.exports = {
	testApi: async function(req, res){
		// Test connect API of SocialPostLabels model with CoreLabels model
		res.json(req.query.id);
		console.log(req.query.id);
		/*var test= req.body.id;
		res.json(test);*/
		/*await SocialPostLabels.create({
		  post_id: '3',
		  label_id: 1
		});*/
		
		//var post = await SocialPostLabels.find().populate('label_id');
		
		/*Test connect API of SocialPosts model with SocialPages model
		await SocialPages.create({
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
		
		/*var post = await SocialPosts.find().populate('page_id');
		res.json(post);*/
		
		// Test connect API of CoreUsers model with CoreRoles model 
		/*await CoreRoles.create({
		  //name: 'Admin'
		  name: 'Editor',
		  status: 1		  
		});*/
		/*await CoreUsers.create({
		  
		  name: 'Nghia'	,
		  username: 'kieunghia',
		  password: '1111111',
		  email: 'kieunghia.cntt@gmail.com'	,
		  facebook_id: '11111' ,
		  status: 1,
		  role_id: 1 
		});*/
		/*var post = await CoreUsers.find().populate('role_id');
		res.json(post);*/

		// Test connect API of CoreUsers model with CoreRoles model 
		/*await CoreRolePermissions.create({
		  
		  controller: 'PermissionController'	,
		  action: 'InsertAction',
		  status: 1,
		  role_id: 1		  
		});
		var post = await CoreRolePermissions.find().populate('role_id');
		res.json(post);*/
		// Test connect API of EcommercerProducts model with EcommercerProductOptions model 
		
		
	}
};