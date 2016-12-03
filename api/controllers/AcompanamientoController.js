/**
 * AcompanamientoController
 *
 * @description :: Server-side logic for managing acompanamientoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	new: function(req, res){
		console.log('entre al formulario de crear Acompanamiento');
		res.view('platoFuerte/createAcompanamiento');
	}
};
