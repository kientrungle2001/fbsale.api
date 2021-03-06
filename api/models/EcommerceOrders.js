/**
 * ShowFanpage.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'ecommerce_orders',
  attributes: {

    custommer_id: {
        type: 'number',
        columnType: 'int'
    },
    custommer_name: {
        type: 'string',
        columnType: 'varchar'
    },
    custommer_email: {
        type: 'string',
        columnType: 'varchar'
    },
    custommer_phone: {
        type: 'string',
        columnType: 'varchar'
    },
    custommer_address :{
        type: 'string',
        columnType: 'varchar'
    },
    shipper_id:{
        type: 'number',
        columnType: 'int'
    },
    state: {
        type: 'string',
        columnType: 'varchar'
    },
    total: {
        type: 'number',
        columnType: 'float'
    },
    payment_date: {
        type: 'ref',
        columnType: 'datetime'
    },
    discount: {
        type: 'number',
        columnType: 'float'
    },
    user_id: {
        type: 'number',
        columnType: 'int'
    },
    total_before_discount:{
        type: 'number',
        columnType: 'float'
    },
    tax : {
        type: 'number',
        columnType: 'float'
    },
    total_before_tax: {
        type: 'number',
        columnType: 'float'
    },
    // ket noi model  EcommerceOrders voi model EcommerceCustommers
    custommer_id: {
        model: 'EcommerceCustommers'
    },
    //Ket noi model EcommerceOrders voi model EcommerceOrderItems
    ref_order_item:{
        collection: 'EcommerceOrderItems',
        via: 'order_id'
    },
    // ket noi model EcommerceOrders voi model EcommerceShippers
    shipper_id: {
        model: 'EcommerceShippers'
    }
  }
};

