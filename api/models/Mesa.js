/**
 * Mesa.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    ordenes:{
      collection:'orden',
      via:'mesa'
    },
    ubicacion:{
      type:'integer',
    },
    estado:{
      type:'string'
    }
  }
};
