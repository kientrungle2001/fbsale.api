request = require('request');
module.exports = {
	cron: async function(req, res) {
		var page_ids = req.body.page_ids;
		var facebook_id = req.body.facebook_id;
		var facebook_page_ids = req.body.facebook_page_ids;
		var facebook_page_tokens = req.body.facebook_page_tokens;
		var posts_of_pages = [];
		for(var i = 0; i < facebook_page_ids.length; i++) {
			var page_id = page_ids[i];
			var facebook_page_id = facebook_page_ids[i];
			var page_token = facebook_page_tokens[i];
			var posts = await sails.helpers.fbGetPosts.with({ pageId:facebook_page_id, token: page_token });
			posts_of_pages.push(posts);
			for(var j = 0; j < posts.length; j++) {
				var post = posts[j];
				var postRecord = await SocialPosts.findOrCreate({
					facebook_post_id: post.id
				}, {
					page_id: page_id,
					facebook_post_id: post.id,
					facebook_id: facebook_id,
					type: 'post',
					content: post.message,
					facebook_user_id: post.from? post.from.id: '',
					facebook_user_name: post.from ? post.from.name: '',
					facebook_user_avatar: post.from ? post.from.picture.data.url: '',
					image: post.full_picture?post.full_picture: '',
					facebook_parent_post_id: facebook_page_id,
					createdAt: post.created_time,
					updatedAt: post.updated_time
				});
				var comments = await sails.helpers.fbGetComments.with({ postId:post.id, token: page_token });
				for (var k = 0; k < comments.length; k++) {
					var comment = comments[k];
					var commentRecord = await SocialPosts.findOrCreate({
						facebook_post_id: comment.id
					}, {
						page_id: page_id,
						facebook_post_id: comment.id,
						facebook_id: facebook_id,
						type: 'comment',
						content: comment.message,
						facebook_user_id: comment.from? comment.from.id: '',
						facebook_user_name: comment.from ? comment.from.name: '',
						facebook_user_avatar: comment.from ? (comment.from.picture ? comment.from.picture.data.url: '') : '',
						image: comment.full_picture?comment.full_picture: '',
						facebook_parent_post_id: post.id,
						createdAt: comment.created_time,
						updatedAt: comment.updated_time,
						parent_id: postRecord.id
					});
					var subComments = await sails.helpers.fbGetComments.with({ postId:comment.id, token: page_token });
					for(var l = 0; l < subComments.length; l++) {
						var subComment = subComments[l];
						var subCommentRecord = await SocialPosts.findOrCreate({
							facebook_post_id: subComment.id
						}, {
							page_id: page_id,
							facebook_post_id: subComment.id,
							facebook_id: facebook_id,
							type: 'subcomment',
							content: subComment.message,
							facebook_user_id: subComment.from? subComment.from.id: '',
							facebook_user_name: subComment.from ? subComment.from.name: '',
							facebook_user_avatar: subComment.from ? (subComment.from.picture ? subComment.from.picture.data.url: '') : '',
							image: subComment.full_picture?subComment.full_picture: '',
							facebook_parent_post_id: comment.id,
							createdAt: subComment.created_time,
							updatedAt: subComment.updated_time,
							parent_id: commentRecord.id
						});
					}
					comment.comments = subComments;
				}
				post.comments = comments;
			}
		}
		res.json(posts_of_pages);
	},
	cron2: async function(req, res) {
		var page_ids = req.body.page_ids;
		var facebook_id = req.body.facebook_id;
		var facebook_page_ids = req.body.facebook_page_ids;
		var facebook_page_tokens = req.body.facebook_page_tokens;
		var posts_of_pages = [];
		for(var i = 0; i < facebook_page_ids.length; i++) {
			var page_id = page_ids[i];
			var facebook_page_id = facebook_page_ids[i];
			var page_token = facebook_page_tokens[i];
			var posts = await sails.helpers.fbGetFeedPosts.with({ pageId:facebook_page_id, token: page_token });
			posts_of_pages.push(posts);
		}
		res.json(posts_of_pages);
	},
	// Hieen thi cac comments theo pageId
	getComments: async function(req, res){
		var page_ids = req.body.page_ids;
			var dataPosts = await SocialPosts.find({
				where: {'type': 'comment', 'page_id': {'in': page_ids} },
				sort: 'createdAt DESC',

			});
		res.json(dataPosts);
	},
	// Hieen thi cac Sub Comments theo comment_id
	getSubComments: async function(req, res){	
		var comment_id = req.body.comment_id;	
		var dataSubComments = await SocialPosts.find({
			where: {'type': 'comment', 'parent_id': comment_id},
			sort: 'createdAt DESC'
		});	
		res.json(dataSubComments);	
	}
};