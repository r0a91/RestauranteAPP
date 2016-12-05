/**
 * PostreController
 *
 * @description :: Server-side logic for managing postres
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	new: function(req, res){
		console.log('entre al formulario de crear POSTRE');
		res.view('plato/createPostre');
	},
	create: function(req, res) {

    var obj = {
      nombre: req.param('nombre'),
      imagen: req.param('imagen')
    }

    Postre.create(obj, function(err, acom) {
      if (err) {
        console.log(err);
        res.redirect('postre/new')
        return;
      }
      res.redirect('postre')
    })
  },
	listar: function(req, res, next) {
    Postre.find(function(err, objs) {
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
