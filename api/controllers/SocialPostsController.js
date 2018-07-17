request = require('request');
module.exports = {
	cron: async function(req, res) {
		var page_ids = req.body.facebook_page_ids;
		var page_tokens = req.body.facebook_page_tokens;
		var posts_of_pages = [];
		for(var i = 0; i < page_ids.length; i++) {
			var page_id = page_ids[i];
			var page_token = page_tokens[i];
			var posts = await sails.helpers.fbGetPosts.with({ pageId:page_id, token: page_token });
			posts_of_pages.push(posts);
			for(var j = 0; j < posts.length; j++) {
				var post = posts[j];
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