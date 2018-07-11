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
	{
		name: 'Administrator'
	},
	{
		name: 'Sale'
	},
	{
		name: 'Manager'
	}
	]
}
