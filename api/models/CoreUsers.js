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
        type: 'string',
        columnType: 'varchar'
    },
    facebook_id: {
        type: 'string',
        columnType: 'varchar'
    },
    facebook_token: {
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
	/*
    role_id: {
        type: 'number',
        columnType: 'int'
    },*/
    status: {
        type: 'number',
        columnType: 'tinyint'
    },
    // Khai bao ket noi toi model CoreRoles
    role_id: {
        model: 'CoreRoles'
    },
    

  },
  checkUpdate: async function(req){
        var facebook_id = req.id;
        var name = req.first_name + req.last_name ;
        var email = req.email;
        var gender= req.gender;
        var facebook_token = req.token;
        var userRow = await CoreUsers.findOne({facebook_id: facebook_id});
        //console.log(userRow);
          if(!userRow){
            var createUser = await CoreUsers.create({'name': name , 'username': facebook_id, 'email': email, 'facebook_id': facebook_id, 'facebook_token': facebook_token, 'gender': gender, 'status': 1}).fetch();
            return createUser;
          }
        return userRow;
    }
};

