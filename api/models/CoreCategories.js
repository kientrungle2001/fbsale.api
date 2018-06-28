/**
 * ShowFanpage.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'core_categories',
  attributes: {

    name: {
        type: 'string',
        columnType: 'varchar'
    },
    parent_id: {
        type: 'number',
        columnType: 'int'
    },
    

  }
};

