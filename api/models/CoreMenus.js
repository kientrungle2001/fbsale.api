module.exports = {
  tableName: 'core_menus',
  attributes: {

    name: {
        type: 'string',
        columnType: 'varchar'
    },
    url: {
        type: 'string',
        columnType: 'varchar'
    },
    controller: {
        type: 'string',
        columnType: 'varchar'
    },
    action: {
        type: 'string',
        columnType: 'varchar'
    }
  }
};