/**
 * ShowFanpage.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'core_users',
  attributes: {

    name: {
        type: 'string',
        columnType: 'varchar'
    },
    username: {
        type: 'string',
        columnType: 'varchar'
    },
    password: {
        type: 'string',
        columnType: 'varchar'
    },
    email: {
        type: 'string',
        columnType: 'varchar'
    },
    phone :{
        type: 'number',
        columnType: 'varchar'
    },
    facebook_id: {
        type: 'string',
        columnType: 'varchar'
    },
    parent_name: {
        type: 'string',
        columnType: 'varchar'
    },
    source: {
        type: 'string',
        columnType: 'varchar'
    },
    gender: {
        type: 'number',
        columnType: 'tinyint'
    },
    avatar: {
        type: 'string',
        columnType: 'varchar'
    },
    role_id: {
        type: 'number',
        columnType: 'int'
    },
    status: {
        type: 'number',
        columnType: 'tinyint'
    }

  }
};

