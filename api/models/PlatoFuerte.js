/**
 * Plato_fuerte.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    principio: {
      collection: 'principio',
      via: 'owner'
    },
    carbohidrato: {
      collection: 'carbohidrato',
      via: 'owner'
    },
    proteina: {
      collection: 'proteina',
      via: 'owner'
    },
    acompanamiento: {
      collection: 'acompanamiento',
      via: 'owner'
    }
  }
};
