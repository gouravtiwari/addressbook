/**
 * AddressbookController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {
    
  
  /**
   * Action blueprints:
   *    `/addressbook/search`
   */
   search: function (req, res) {
      // Send a JSON response
      var criteria = req.param('criteria');
      AddressBook.find({name: {contains: criteria}},function(e,s) {
        if (e) console.error(e);
        return res.json(s);
      });
    },

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to AddressbookController)
   */
  _config: {}

  
};
