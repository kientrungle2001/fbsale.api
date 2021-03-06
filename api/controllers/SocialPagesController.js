module.exports = {
	datatable: async function (req, res) {
		var columns = req.body.columns;
		var order = req.body.order[0];
		var where = {};
		var limit = req.body.length;
		var skip = req.body.start;
		var keywork = req.body.search.value;
		where.or = [{name : {like: '%'+keywork+'%'}}];
		var sort = columns[order.column].data + ' ' + order.dir;
		var data = await SocialPages.find({where: where, limit: limit, skip: skip, sort: sort});
		var recordsTotal = await SocialPages.count({where: where});
		var result = {data: data, recordsTotal: recordsTotal, recordsFiltered: recordsTotal};
		res.json(result);
	},
	
	
};