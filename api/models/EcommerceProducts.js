module.exports = {
  tableName: 'ecommerce_products',
  attributes: {

    provider_id: {
        type: 'number',
        columnType: 'int'
    },
    name: {
        type: 'string',
        columnType: 'varchar'
    },
    price: {
        type: 'number',
        columnType: 'float'
    },
    
    quantity: {
        type: 'number',
        columnType: 'int'
    },
    type: {
        type: 'string',
        columnType: 'varchar'
    },
    // Ket noi model EcommerceProducts voi EcommerceProductOptions
    ref_product_options: {
      collection: 'EcommerceProductOptions',
      via: 'product_id'
    },
    // Ket noi model EcommerceProducts voi model  EcommerceProviders
    provider_id: {
        model: 'EcommerceProviders'
    }

  },
  
};