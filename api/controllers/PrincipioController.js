/**
 * PrincipioController
 *
 * @description :: Server-side logic for managing principios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	new: function(req, res){
		console.log('entre al formulario de crear Principio');
		res.view('platoFuerte/createPrincipio');
	}
};
