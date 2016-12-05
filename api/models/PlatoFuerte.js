/**
 * Plato_fuerte.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    principios: {
      collection: 'principio',
      via: 'owner'
    },
    carbohidratos: {
      collection: 'carbohidrato',
      via: 'owner'
    },
    proteinas: {
      collection: 'proteina',
      via: 'owner'
    },
    acompanamientos: {
      collection: 'acompanamiento',
      via: 'owner'
    }
  }
};
