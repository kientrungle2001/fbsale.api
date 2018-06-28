module.exports = {
	testApi: async function(req, res){
		//var test = await PostLabels.find(1).populate('Labels');
		var test = await PostLabels.findOne(123).populate('Labels');
		res.json(test);
	}
};