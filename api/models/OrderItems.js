module.exports = {

  attributes: {

    product_id: {
        type: 'number',
        columnType: 'int'
    },
    order_id: {
        type: 'number',
        columnType: 'int'
    },
    quantity: {
        type: 'number',
        columnType: 'int'
    },
    product_option_id: {
        type: 'number',
        columnType: 'int'
    },
    price: {
        type: 'number',
        columnType: 'float'
    },
    product_name: {
        type:'string',
        columnType: 'varchar'
    },
    product_option_name: {
        type: 'string',
        columnType: 'varchar'
    }
  }
};