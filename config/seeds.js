/**
 * Sails Seed Settings
 * (sails.config.seeds)
 *
 * Configuration for the data seeding in Sails.
 *
 * For more information on configuration, check out:
 * http://github.com/frostme/sails-seed
 */
module.exports.seeds = {
	coreusers: [
	{
		name: 'Lê Trung Kiên',
		email: 'kientrungle2001@gmail.com',
		phone: '01647867486',
		username: 'kientrungle2001',
		status: 1
	}
	],
	coreroles: [
	{	name: 'Administrator',	status: 1	},
	{	name: 'Sale',			status: 1	},
	{	name: 'Manager',		status: 1	}
	],
	corelabels: [
	{	name: 'Quan trọng',			color: 'FF0000',		status: 1	},
	{	name: 'Bình thường',		color: '000000',		status: 1	},
	{	name: 'Không quan trọng',	color: 'FFEE00',	status: 1	}
	],
	corecategories: [
	{	name: 'Trực tuyến',			status: 1	},
	{	name: 'Lớp học',			status: 1	},
	],
	ecommerceshippers: [
	{	name: 'NextNobels',			status: 1},
	{	name: 'Vietel Post',		status: 1},
	],
	ecommerceproducts: [
	{	name: 'Full Look Trần Đại Nghĩa',			status: 1},
	{	name: 'Full Look Song Ngữ',					status: 1},
	{	name: 'Thi tài',							status: 1},
	{	name: 'Tiếng Việt 3',						status: 1},
	{	name: 'Tiếng Việt 4',						status: 1},
	{	name: 'Tiếng Việt 5',						status: 1},
	{	name: 'Sách',						status: 1},
	],
	ecommerceproviders: [
	{	name: 'NextNobels',			status: 1},
	{	name: 'Nhà xuất bản ĐHQG',	status: 1},
	{	name: 'Nhà xuất bản Giáo dục',	status: 1},
	]
}
