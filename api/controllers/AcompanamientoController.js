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
	},
	create: function (req, res) {

		var obj={
			nombre: req.param('nombre'),
			imagen: req.param('imagen')
		}

		Acompanamiento.create(obj, function(err, acom){
			if (err) {
				console.log(err);
				res.redirect('acompanamiento/new')
				return;
			}
			res.redirect('acompanamiento')
		})
	},
	listar: function (req, res, next) {
		Acompanamiento.find(function (err, objs) {
			if (err) {
				console.log(err);
				return next(err);
			}
			return res.view('partials/componentes', {
				componentes:objs
			})
		})
	}
};
