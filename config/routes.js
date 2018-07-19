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
  'GET /testApi': {
    action: 'EcommerceOrders/deleteorder'
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
  'POST /ecommerceorders/createorder':{
    action: 'EcommerceOrders/createorder'
  },
  'GET /ecommerceorders/deleteorder':{
    action: 'EcommerceOrders/deleteorder'
  },
  'GET /ecommerceorders/shippers':{
    action: 'EcommerceOrders/shippers'
  },
  'GET /ecommerceorders/products':{
    action: 'EcommerceOrders/products'
  },
  'POST /ecommerceorders/selectproduct':{
    action: 'EcommerceOrders/selectproduct'
  },
  'POST /ecommerceorders/selectproductoption':{
    action: 'EcommerceOrders/selectproductoption'
  },
  'GET /ecommerceorders/custommers':{
    action: 'EcommerceOrders/custommers'
  },
  'POST /ecommerceorderitems/datatable':{
    action: 'EcommerceOrderItems/datatable'
  },
  'GET /ecommerceorderitems/products':{
    action: 'EcommerceOrderItems/products'
  },
  'GET /ecommerceorderitems/orders':{
    action: 'EcommerceOrderItems/orders'
  },
  'POST /ecommerceproductoptions/datatable':{
    action: 'EcommerceProductOptions/datatable'
  },
  'GET /ecommerceproductoptions/products':{
    action: 'EcommerceProductOptions/products'
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
  'POST /socialposttemplates/datatable':{
    action: 'SocialPostTemplates/datatable'
  },
  'GET /coreusers/roles':{
    action: 'CoreUsers/roles'
  },
  'POST /socialposts/cron':{
    action: 'SocialPosts/cron'
  },
  'POST /socialposts/cron2':{
    action: 'SocialPosts/cron2'
  },
  'POST /socialposts/getComments':{
    action: 'SocialPosts/getComments'
  },
  'POST /socialposts/getSubComments':{
    action: 'SocialPosts/getSubComments'
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
