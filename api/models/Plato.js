/**
 * Plato.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    deOrden:{
      model:'orden'
    },
    entrada:{
      model:'entrada'
    },
    platoFuerte:{
      model:'platoFuerte'
    },
    bebida:{
      model:'bebida'
    },
    postre:{
      model:'postre'
    }
  }
};
