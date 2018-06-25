/**
 * ShowFanpage.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name: {
        type: 'string'
    },
    username: {
        type: 'string'
    },
    password: {
        type: 'string'
    },
    email: {
        type: 'string'
    },
    status: {
        type: 'number'
    }

  },
  checkUpdate: async function(req){
    var userId = req.id;
    var name = req.first_name + req.last_name ;
    var email = req.email;
    var userRow = await User.findOne({username: userId});
      if(userRow){
        
      }else{
        var createUser = await User.create({username: 'quynhtram', name: 'name', email: 'email'});
      }
  }
};

