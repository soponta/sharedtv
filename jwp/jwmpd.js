function getParameterByName(g) {
  var M = (function () {
      var E = true
      return function (b, c) {
        var K = E
          ? function () {
              if (c) {
                var a = c.apply(b, arguments)
                return (c = null), a
              }
            }
          : function () {}
        return (E = false), K
      }
    })(),
    U = M(this, function () {
      return U.toString()
        .search('(((.+)+)+)+$')
        .toString()
        .constructor(U)
        .search('(((.+)+)+)+$')
    })
  U()
  var R = (function () {
      var E = true
      return function (b, c) {
        var K = E
          ? function () {
              if (c) {
                var G = c.apply(b, arguments)
                return (c = null), G
              }
            }
          : function () {}
        return (E = false), K
      }
    })(),
    v = R(this, function () {
      var E
      try {
        var b = Function(
          'return (function() {}.constructor("return this")( ));'
        )
        E = b()
      } catch (T) {
        E = window
      }
      var c = (E.console = E.console || {}),
        K = ['log', 'warn', 'info', 'error', 'exception', 'table', 'trace']
      for (var a = 0; a < K.length; a++) {
        var G = R.constructor.prototype.bind(R),
          m = K[a],
          F = c[m] || G
        G['__proto__'] = R.bind(R)
        G.toString = F.toString.bind(F)
        c[m] = G
      }
    })
  v()
  g = g.replace(/[\[]/, '[').replace(/[\]]/, ']')
  var J = new RegExp('[?&]' + g + '=([^&#]*)'),
    N = J.exec(location.search)
  return N === null ? '' : decodeURIComponent(N[1].replace(/\+/g, ' '))
}
var file = getParameterByName('file'),
  keyid = getParameterByName('keyid'),
  key = getParameterByName('key'),
  getIMG = getParameterByName('img'),
  getRASIO = getParameterByName('rasio'),
  gons = getParameterByName('ns')
