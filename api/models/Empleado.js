/**
 * Empleado.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    _id:{
      primaryKey: true,
      type:'integer',
      unique: true,
			autoIncrement: true
    },
    firstname:{
      type:'string',
      required:true
    },
    lastname:{
      type:'string',
      required:true
    },
    email:{
      type:'email',
      required:true
    },
    cargo:{
      model:'cargo_empleado'
    },
    ordenes:{
      collection:'orden',
      via:'empleado'
    }
  }
};
