/**
 * PlatoController
 *
 * @description :: Server-side logic for managing platoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  new: function(req, res) {
    console.log('Entre al formulario de crear PLATO');

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
        obtenerEntradas,
        obtenerBebidas,
        obtenerPostres,
        obtenerPlatosFuertes
      ],
      finalizar
    )

    function obtenerEntradas(done) {
      Entrada.find().exec(function(err, entradas) {
        if (err) {
          mensaje.error = err
          done()
        } else {
          objs1 = entradas
          done()
        }
      })
    }

    function obtenerBebidas(done) {
      Bebida.find().exec(function(err, bebidas) {
        if (err) {
          mensaje.error = err
          done()
        } else {
          objs2 = bebidas
          done()
        }
      })
    }

    function obtenerPostres(done) {
      Postre.find().exec(function(err, postres) {
        if (err) {
          mensaje.error = err
          done()
        } else {
          objs3 = postres
          done()
        }
      })
    }

    function obtenerPlatosFuertes(done) {
      PlatoFuerte.find()
        .populate('principios')
        .populate('carbohidratos')
        .populate('proteinas')
        .populate('acompanamientos')
        .exec(function(err, pfuertes) {
          if (err) {
            mensaje.error = err
            done()
          } else {
            objs4 = pfuertes
            done()
          }
        })
    }

    function finalizar() {
      if (mensaje.error) {
        return res.json(mensaje)
      }
      res.view('plato/createPlato', {
        entradas: objs1,
        bebidas: objs2,
        postres: objs3,
        platosfuertes: objs4
      });
    }
  },
  create: function(req, res, next) {
    var obj = {
      entrada: req.param('idEntrada'),
      bebida: req.param('idBebida'),
      postre: req.param('idPostre'),
      platofuerte: req.param('idPlatoFuerte')
    }
    Plato.create(obj, function(err, acom) {
      if (err) {
        console.log(err);
        res.redirect('plato/new')
        return;
      }
      res.redirect('plato')
    })
    console.log(obj);
  }
};
