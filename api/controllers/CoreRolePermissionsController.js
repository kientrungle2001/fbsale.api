module.exports = {
	datatable: async function (req, res) {
		var columns = req.body.columns;
		var order = req.body.order[0];
		var where = {};
		var limit = req.body.length;
		var skip = req.body.start;
		var keywork = req.body.search.value;
		where.or = [{controller : {like: '%'+keywork+'%'}}];
		var sort = columns[order.column].data + ' ' + order.dir;
		var data = await CoreRolePermissions.find({where: where, limit: limit, skip: skip, sort: sort}).populate('role_id');
		var recordsTotal = await CoreRolePermissions.count({where: where});
		var result = {data: data, recordsTotal: recordsTotal, recordsFiltered: recordsTotal};
		res.json(result);
	},
	roles: async function(req, res) {
		var roles = await CoreRoles.find({});
		res.json(roles);
	}
	
};