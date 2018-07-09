module.exports = {
  tableName: 'ecommerce_product_options',
  attributes: {

    product_id: {
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
    // Ket noi model EcommerceProductOptions voi EcommerceProducts
    product_id: {
        model: 'EcommerceProducts'
    }
  },
  
};