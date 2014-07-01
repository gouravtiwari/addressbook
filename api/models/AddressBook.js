/**
 * AddressBook
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
  	
  	/* e.g.
  	nickname: 'string'
  	*/
    name:     'string',
    address:  'string',
    phone:    'string'
  },

  getSearchResults: function(criteria, callback){
    var results;
    var errors;
    AddressBook.find()
               .where({
                or: [
                    {'name':    {contains: criteria}},
                    {'address': {contains: criteria}},
                    {'phone':   {contains: criteria}}
                  ]
                })
               .exec(function(e,r) {
                  errors = e;
                  results = r;
                });
    callback(errors, results);
  }
};
