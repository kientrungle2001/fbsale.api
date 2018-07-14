/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {


  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'pages/homepage'
  },
  '/testApi': {
    action: 'TestAPI/testApi'
  },

  '/login': {
    view: 'pages/login'
  },
  '/loginFacebook':{
    action: 'Login/loginFacebook'
  },
  '/userLogin':{
    action: 'Login/userLogin'
  },
  
  'GET /auth/facebook': {controller: 'LoginController', action: 'loginFacebook'},
  'GET /auth/facebook/callback':    {controller: 'LoginController', action: 'facebookCallback'},
  
  'POST /coreusers/datatable':{
    action: 'CoreUsers/datatable'
  },

  'POST /corelabels/datatable':{
    action: 'CoreLabels/datatable'
  },

  'POST /corecategories/datatable':{
    action: 'CoreCategories/datatable'
  },
  'POST /coremenus/datatable':{
    action: 'CoreMenus/datatable'
  },
   'POST /coresettings/datatable':{
    action: 'CoreSettings/datatable'
  },
  'POST /corerolepermissions/datatable':{
    action: 'CoreRolePermissions/datatable'
  },
  'GET /corerolepermissions/roles':{
    action: 'CoreRolePermissions/roles'
  },
  'POST /coreroles/datatable':{
    action: 'CoreRoles/datatable'
  },
  'POST /ecommerceaddress/datatable':{
    action: 'EcommerceAddress/datatable'
  },
  'POST /ecommercecustommercategories/datatable':{
    action: 'EcommerceCustommerCategories/datatable'
  },
  'POST /ecommercecustommers/datatable':{
    action: 'EcommerceCustommers/datatable'
  },
  'POST /ecommerceorders/datatable':{
    action: 'EcommerceOrders/datatable'
  },
  'POST /ecommerceproductoptions/datatable':{
    action: 'EcommerceProductOptions/datatable'
  },
  'POST /ecommerceproducts/datatable':{
    action: 'EcommerceProducts/datatable'
  },
  'POST /ecommerceproductcategories/datatable':{
    action: 'EcommerceProductCategories/datatable'
  },
  'POST /ecommerceproviders/datatable':{
    action: 'EcommerceProviders/datatable'
  },
  'POST /ecommerceshippers/datatable':{
    action: 'EcommerceShippers/datatable'
  },
  'POST /socialpages/datatable':{
    action: 'SocialPages/datatable'
  },
  'GET /coreusers/roles':{
    action: 'CoreUsers/roles'
  },
  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝



  //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
  //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
  //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝


  //  ╔╦╗╦╔═╗╔═╗
  //  ║║║║╚═╗║
  //  ╩ ╩╩╚═╝╚═╝


};
