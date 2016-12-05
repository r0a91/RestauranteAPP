/**
 * EntradaController
 *
 * @description :: Server-side logic for managing entradas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	new: function(req, res){
		console.log('entre al formulario de crear ENTRADA');
		res.view('plato/createEntrada');
	},
	create: function(req, res) {

    var obj = {
      nombre: req.param('nombre'),
      imagen: req.param('imagen')
    }

    Entrada.create(obj, function(err, acom) {
      if (err) {
        console.log(err);
        res.redirect('entrada/new')
        return;
      }
      res.redirect('entrada')
    })
  },
	listar: function(req, res, next) {
    Entrada.find(function(err, objs) {
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
