/**
 * BebidaController
 *
 * @description :: Server-side logic for managing bebidas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	new: function(req, res){
		console.log('entre al formulario de crear BEBIDA');
		res.view('plato/createBebida');
	},
	create: function(req, res) {

    var obj = {
      nombre: req.param('nombre'),
      imagen: req.param('imagen')
    }

    Bebida.create(obj, function(err, acom) {
      if (err) {
        console.log(err);
        res.redirect('bebida/new')
        return;
      }
      res.redirect('bebida')
    })
  },
	listar: function(req, res, next) {
    Bebida.find(function(err, objs) {
      if (err) {
        console.log(err);
        return next(err);
      }
      return res.view('partials/componentes', {
        componentes: objs
      })
    })
  }
};
