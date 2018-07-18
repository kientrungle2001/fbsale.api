module.exports = {
	datatable: async function (req, res) {
		var columns = req.body.columns;
		var order = req.body.order[0];
		var where = {};
		var limit = req.body.length;
		var skip = req.body.start;
		var keywork = req.body.search.value;
		where.or = [{custommer_name : {like: '%'+keywork+'%'}}];
		var sort = columns[order.column].data + ' ' + order.dir;
		var data = await EcommerceOrders.find({where: where, limit: limit, skip: skip, sort: sort});
		var recordsTotal = await EcommerceOrders.count({where: where});
		var result = {data: data, recordsTotal: recordsTotal, recordsFiltered: recordsTotal};
		res.json(result);
	},
	shippers: async function(req, res){
		var shippers = await EcommerceShippers.find({});
		res.json(shippers);
	},
	products: async function(req, res){
		var products = await EcommerceProducts.find({});
		res.json(products);
	},
	optionbyproduct: async function(req, res){
		var product_id = req.body.product_id;
		var optionbyproduct = await EcommerceProductOptions.find({'product_id': product_id});
		res.json(optionbyproduct);
	},
	custommers: async function(req, res){
		var custommers = await EcommerceCustommers.find({});
		res.json(custommers);
	},
	createorder: async function(req, res){
		// insert bang order
		var custommer_name = req.body.custommer_name;
		var custommer_phone = req.body.custommer_phone;
		var custommer_address = req.body.custommer_address;
		var total = req.body.total;
		var discount = req.body.discount;
		var user_id = req.body.user_id;
		var custommer_id = req.body.custommer_id;
		var shipper_id = req.body.shipper_id;
		var total_before_discount = req.body.total_before_discount;
		var tax = req.body.tax;
		var state = req.body.state;
		var status = req.body.status;
		var payment_date = req.body.payment_date;
		var createOrder = await EcommerceOrders.createOne({
			'custommer_name':custommer_name,
			'custommer_phone':custommer_phone,
			'custommer_address':custommer_address,
			'total':total,
			'discount':discount,
			'user_id':user_id,
			'shipper_id':shipper_id,
			'total_before_discount':total_before_discount,
			'tax':tax,
			'state':state,
			'status':status,
			'payment_date':payment_date,
			'custommer_id':custommer_id,

		}).fetch();
		// insert bang order_items
		order_items.forEach(async function(order_item){
				await EcommerceOrderItems.create({
				'order_id': createOrder['id'],
				'product_option_name': order_item['product_option_name'],
				'product_name': order_item['product_name'],
				'price': order_item['price'],
				'product_option_id': order_item['product_option_id'],
				'quantity': order_item['quantity'],
				'product_id': order_item['product_id'],
				'status': order_item['status'],

			});
		});


	},
	

};