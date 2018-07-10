module.exports = {
    
 
  tableName: 'core_role_permissions',
  attributes: {

    role_id: {
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
    },
    // Khai bao ket noi toi model CoreRoles
    role_id: {
        model: 'CoreRoles'
    }
  }
};