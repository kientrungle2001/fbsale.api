module.exports = {
  tableName: 'core_roles',
  attributes: {
    
    name: {
        type: 'string',
        columnType: 'varchar'
    },
    status: {
        type: 'number',
        columnType: 'tinyint'        
    },
    // Khai bao kết nối tới model CoreUsers
    ref_user: {
    	collection: 'CoreUsers',
    	via: 'role_id'
    },
    // Khai bao kết nối tới model CoreRolePermissions
    ref_role_permissions: {
       collection: 'CoreRolePermissions',
       via: 'role_id'
    }
  }
};