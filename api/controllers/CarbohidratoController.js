/**
 * CarbohidratoController
 *
 * @description :: Server-side logic for managing carbohidratoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	new: function(req, res){
		console.log('entre al formulario de crear Carbohidrato');
		res.view('platoFuerte/createCarbohidrato');
	}
};
