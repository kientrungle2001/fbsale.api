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
			var page_token = page_tokens[i];
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
					facebook_post_parent_id: facebook_page_id,
					createdAt: post.created_time,
					updatedAt: post.updated_time
				});
				var comments = await sails.helpers.fbGetComments.with({ postId:post.id, token: page_token });
				for (var k = 0; k < comments.length; k++) {
					var comment = comments[k];
					var subComments = await sails.helpers.fbGetComments.with({ postId:comment.id, token: page_token });
					comment.comments = subComments;
				}
				post.comments = comments;
			}
		}
		res.json(posts_of_pages);
	}
};