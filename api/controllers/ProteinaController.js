/**
 * ProteinaController
 *
 * @description :: Server-side logic for managing proteinas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	new: function(req, res){
		console.log('entre al formulario de crear Proteina');
		res.view('platoFuerte/createProteina');
	}
};
