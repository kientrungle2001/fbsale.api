module.exports = {
    
 
  tableName: 'core_role_permissions',
  attributes: {

    roles_id: {
        type: 'number',
        columnType: 'int'
    },
    controller: {
        type: 'string',
        columnType: 'varchar'
    },
    action: {
        type: 'string',
        columnType: 'varchar'
    },
    status: {
        type: 'number',
        columnType: 'tinyint'
    }
  }
};