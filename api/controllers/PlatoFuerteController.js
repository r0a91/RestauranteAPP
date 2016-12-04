/**
 * Plato_fuerteController
 *
 * @description :: Server-side logic for managing plato_fuertes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	new: function (req, res) {
		console.log('Entre al formulario de crearPlatoFuerte');
		res.view('platoFuerte/createPlatoFuerte');
	}
};
