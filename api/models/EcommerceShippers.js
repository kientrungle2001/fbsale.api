module.exports = {
  tableName: 'ecommerce_shippers',
  attributes: {

    name: {
        type: 'string',
        columnType: 'varchar'
    },
    address_id: {
        type: 'number',
        columnType: 'varchar'
    },
    email: {
        type: 'string',
        columnType: 'varchar'
    },
    phone: {
        type: 'string',
        columnType: 'varchar'
    },
    type: {
        type: 'string',
        columnType: 'varchar'
    },
    // ket noi model EcommerceShippers voi model EcommerceOrders
    ref_order:{
        collection: 'EcommerceOrders',
        via: 'shipper_id'
    }

  },
  
};