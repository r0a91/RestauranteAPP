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
	},
	create: function (req, res) {

		var obj={
			nombre: req.param('nombre'),
			imagen: req.param('imagen')
		}

		Carbohidrato.create(obj, function(err, acom){
			if (err) {
				console.log(err);
				res.redirect('carbohidrato/new')
				return;
			}
			res.redirect('carbohidrato')
		})
	},
	listar: function (req, res, next) {
		Carbohidrato.find(function (err, objs) {
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
