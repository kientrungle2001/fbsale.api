module.exports = {
  tableName: 'ecommerce_prouduct_categories',
  attributes: {

    product_id: {
        type: 'number',
        columnType: 'int'
    },
    category_id: {
        type: 'number',
        columnType: 'int'
    },
    // bảng liên kết nhiều nhiều của model: EcommerceProuductCategories- EcommerceProducts
    /*products:{
      collection: 'EcommerceProducts',
      via: 'owner',
      through: 'categories_products'
    }*/
  }
  
};