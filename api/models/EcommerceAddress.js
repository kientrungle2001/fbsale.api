module.exports = {
  tableName: 'ecommerce_address',
  attributes: {

    name: {
        type: 'string',
        columnType: 'varchar'
    },
    type: {
        type: 'string',
        columnType: 'varchar'
    },
    province_id: {
        type: 'number',
        columnType: 'int'
    },
    district_id: {
        type: 'number',
        columnType: 'int'
    },
    ward_id: {
        type: 'number',
        columnType: 'int'
    },
    address: {
        type: 'string',
        columnType: 'varchar'
    },    
    phone: {
        type: 'string',
        columnType: 'varchar'
    },
    email: {
        type: 'string',
        columnType: 'varchar'
    },
    custommer_id: {
        type: 'number',
        columnType: 'int'
    },
    newAttr: {
        type: 'number',
        columnType: 'int'
    },
    //ket noi model ecommerceaddressAddress voi ecommerceaddressCustommmers
    address_id:{
        model: 'EcommerceCustommers'
    }
  },
  
};