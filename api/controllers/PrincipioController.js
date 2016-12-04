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
	}, create: function (req, res) {

		var obj={
			nombre: req.param('nombre'),
			imagen: req.param('imagen')
		}

		Principio.create(obj, function(err, acom){
			if (err) {
				console.log(err);
				res.redirect('principio/new')
				return;
			}
			res.redirect('principio')
		})
	}
};
