module.exports = {
  tableName: 'social_pages',
  attributes: {

    name: {
        type: 'string',
        columnType: 'varchar'
    },
    facebook_id: {
        type: 'string',
        columnType: 'varchar'
    },
    page_id: {
        type: 'string',
        columnType: 'varchar'
    },
    
    status: {
        type: 'number',
        columnType: 'tinyint'
    }

  },
  
};