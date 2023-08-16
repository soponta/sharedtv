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
