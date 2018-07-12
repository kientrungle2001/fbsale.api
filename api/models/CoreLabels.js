module.exports = {
  tableName: 'core_labels',
  attributes: {

    name: {
        type: 'string',
        columnType: 'varchar'
    },
    color: {
        type: 'string',
        columnType: 'varchar'
    },
    status: {
        type: 'number',
        columnType: 'tinyint'
    },
    // Khai bao tham chieu toi model SocialPostLabels
    ref_postlabels: {
      collection: 'SocialPostLabels',
      via: 'label_id'
    }

  },
  
};