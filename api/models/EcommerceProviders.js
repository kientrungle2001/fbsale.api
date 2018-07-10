module.exports = {
  tableName: 'ecommerce_providers',
  attributes: {

    name: {
        type: 'string',
        columnType: 'varchar'
    },
    address_id: {
        type: 'number',
        columnType: 'varchar'
    },
    status: {
        type: 'number',
        columnType: 'tinyint'
    },
    // Ket noi model EcommerceProviders voi model EcommerceProducts
    ref_product: {
        collection: 'EcommerceProducts',
        via: 'provider_id'
    }

  },
  
};