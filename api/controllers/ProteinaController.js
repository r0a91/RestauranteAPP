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
	},
	create: function (req, res) {

		var obj={
			nombre: req.param('nombre'),
			imagen: req.param('imagen')
		}

		Proteina.create(obj, function(err, acom){
			if (err) {
				console.log(err);
				res.redirect('proteina/new')
				return;
			}
			res.redirect('proteina')
		})
	},
	listar: function (req, res, next) {
		Proteina.find(function (err, objs) {
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
