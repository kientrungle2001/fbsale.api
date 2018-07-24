/**
 * ShowFanpage.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName:  'ecommerce_custommers',
  attributes: {

    name: {
        type: 'string',
        columnType: 'varchar'
    },
    username: {
        type: 'string',
        columnType: 'varchar'
    },
    email: {
        type: 'string',
        columnType: 'varchar'
    },
    phone :{
        type: 'string',
        columnType: 'varchar'
    },
    facebook_id: {
        type: 'string',
        columnType: 'varchar'
    },
    parent_name: {
        type: 'string',
        columnType: 'varchar'
    },
    source: {
        type: 'string',
        columnType: 'varchar'
    },
    gender: {
        type: 'number',
        columnType: 'tinyint'
    },
    product_id: {
        type: 'number',
        columnType: 'int'
    },
    address_id: {
        type: 'number',
        columnType: 'int'
    },
    // ket noi model EcommerceCustommers voi model EcommerceOrders
    ref_order: {
      collection: 'EcommerceOrders',
      via: 'custommer_id'
    },
	ref_addresses: {
      collection: 'EcommerceAddress',
      via: 'custommer_id'
    }

  },
  //Tìm kiếm 1 bản ghi
  findOneRecord: async function(req){

  },
  // Tìm kiếm nhiều bản ghi
  findRecord: async function(req){

  },
  // Hiển thị toàn bộ ( select *)

  checkUpdate: async function(req){
    var userId = req.id;
    var name = req.first_name + req.last_name ;
    var email = req.email;
    var userRow = await User.findOne({username: userId});
      if(userRow){
        
      }else{
        var createUser = await User.create({username: 'quynhtram', name: 'name', email: 'email'});
      }
  }
};

