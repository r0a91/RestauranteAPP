/**
 * MesaController
 *
 * @description :: Server-side logic for managing mesas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	new: function(req, res){
		console.log('entre al formulario de crear mesa');
		res.view('mesa/createMesa');
	},
	create: function (req, res) {

		var obj = {
				ubicacion: req.param('ubicacion'),
				estado: req.param('estado')
		}

		Mesa.create(obj, function (err, mesa) {
			if (err) {
				console.log(err);
				res.redirect('mesa/new')
				return;
			}
			res.redirect('mesa')
		})

	}
};
