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
    // bảng liên kết nhiều nhiều của model: EcommerceProuductCategories- EcommerceProducts
    /*owners:{
      collection: 'EcommerceProuductCategories',
      via: 'products',
      through: 'categories_products'
    }*/

  },
  
};