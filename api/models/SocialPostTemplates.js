module.exports = {
  tableName:'social_post_templates',
  attributes: {

    name: {
        type: 'string',
        columnType: 'varchar'
    },
    content: {
        type: 'string',
        columnType: 'text'
    },
    type: {
        type: 'string'
    }
  }
};