/**
 * Plato_fuerteController
 *
 * @description :: Server-side logic for managing plato_fuertes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  new: function(req, res) {
    console.log('Entre al formulario de crearPlatoFuerte');

    var mensaje = {
      error: null,
      datos: null,
      mensaje: null
    }
    var objs1 = null
    var objs2 = null
    var objs3 = null
    var objs4 = null

    async.series(
      [
        obtenerAcompanamientos,
        obtenerProteinas,
        obtenerCarbohidratos,
        obtenerPrincipios
      ],
      finalizar
    )

    function obtenerAcompanamientos(done) {
      Acompanamiento.find().exec(function(err, acompanamientos) {
        if (err) {
          mensaje.error = err
          done()
        } else {
          objs1 = acompanamientos
          done()
        }
      })
    }

    function obtenerProteinas(done) {
      Proteina.find().exec(function(err, proteinas) {
        if (err) {
          mensaje.error = err
          done()
        } else {
          objs2 = proteinas
          done()
        }
      })
    }

    function obtenerCarbohidratos(done) {
      Carbohidrato.find().exec(function(err, carbohidratos) {
        if (err) {
          mensaje.error = err
          done()
        } else {
          objs3 = carbohidratos
          done()
        }
      })
    }

    function obtenerPrincipios(done) {
      Principio.find().exec(function(err, principios) {
        if (err) {
          mensaje.error = err
          done()
        } else {
          objs4 = principios
          done()
        }
      })
    }

    function finalizar() {
      if (mensaje.error) {
        return res.json(mensaje)
      }
      res.view('platoFuerte/createPlatoFuerte', {
        acompanamientos: objs1,
        proteinas: objs2,
        carbohidratos: objs3,
        principios: objs4
      });
    }
  },
  create: function(req, res, next) {
    var obj ={
      principio: req.param('idPrincipio'),
      carbohidrato:req.param('idCarbohidrato'),
      proteina:req.param('idProteina'),
      acompanamiento:req.param('idAcompanamiento')
    }
    PlatoFuerte.create(obj, function (err, acom) {
      if (err) {
        console.log(err);
        res.redirect('platoFuerte/new')
        return;
      }
      res.redirect('platoFuerte')
    })
    console.log(obj);
  }
};
