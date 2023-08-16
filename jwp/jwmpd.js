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
//jwmpd
var player = jwplayer('player'),
  h = {}
h.keyId = keyid
h.key = key
var b = {}
b.clearkey = h
var H = {}
H.default = false
H.type = 'application/dash+xml'
H.file = file
H.drm = b
H.label = '0'
var s = {}
s.image = 'https://cdn.statically.io/gh/soponta/SHAREDTV/main/bg_stv.jpg'
s.sources = [H]
var E = {}
E.file = '#'
E.link = '#'
E.position = 'bottom-right'
var S = {}
S.color = '#FFF'
S.fontSize = 15
S.backgroundOpacity = 0
S.edgeStyle = 'raised'
var Q = {}
Q.playlist = [s]
Q.width = '100%'
Q.height = '100%'
Q.aspectratio = '16:9'
Q.stretching = 'uniform'
Q.stretching = 'exactfit'
Q.autostart = false
Q.mute = false
Q.logo = E
Q.captions = S
Q.cast = {}
player.setup(Q)
function toggleStretchingMode() {
  player.setConfig({
    stretching:
      player.getConfig().stretching === 'uniform' ? 'exactfit' : 'uniform',
  })
}
const stretchingButton = document.getElementById('stretching-button')
stretchingButton.addEventListener('click', toggleStretchingMode)
jwplayer().on('ready', function () {
  player = jwplayer('player')
})
