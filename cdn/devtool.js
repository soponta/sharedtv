<!-- start devtool.js -->
        alif = 'https://dce-ak-livewwdazn.akamaized.net/dashdrm/dazn-linear-037/stream.mpd';
        elif = '82f8e2a17dac44c0a18f660479349c59@1b144f73e6fefe91cd05f850e2b589d0';
        ilif = '';
        Y90 = Z90['replace'](/&fil/g, '?fil');
        aua = 0;
        ei = 0;
        if (Y90['indexOf']('fila=') > -1) {
            aua = 1;
            elif = '';
            alif = Y90['split']('fila=')[1];
            alif = alif['split']('`')[0]
        }
        if (Y90['indexOf']('file=') > -1) {
            ei = 1;
            elif = Y90['split']('file=')[1];
            elif = elif['split']('`')[0]
        }
        elif = elif['replace'](/@/g, '\x27:\x27')['replace'](/~/g, '\x27,\x27');
        if (Y90['indexOf']('fili=') > -1) {
            ei = 2;
            ilif = Y90['split']('fili=')[1];
            ilif = ilif['split']('`')[0]
        }
        ilif = ilif['replace'](/@/g, '\x27:\x27')['replace'](/~/g, '\x27,\x27');
        sss = "<style>*{margin:0;padding:0;outline:0}#containers{position:absolute;width:100%!important;height:100%!important}*:focus{outline:0}</style><div class='internet-connection-status' id='internetStatus'></div><div style='clear:both'></div><video autoplay poster='https://cdn.statically.io/gh/soponta/SHAREDTV/main/bg_stv.jpg' data-shaka-player id='video' style='width:100%;height:100%' class='shaka-video'></video><div class='shaka-range-container shaka-volume-bar-container' style='background:linear-gradient(to right,#ffffff 100%,rgba(255,255,255,0.54) 100%,rgba(255,255,255,0.54) 100%)'></div><div class='shaka-range-container shaka-seek-bar-container' style='background:rgba(255,255,255,0.3)'>\x3cscript>const manifestUri=\x27" + alif + "\x27;async function init(){const video=document.getElementById(\x27video\x27);const ui=video[\x27ui\x27];const controls=ui.getControls();const player=controls.getPlayer();const config={\x27controlPanelElements\x27:[\x27play_pause\x27,\x27mute\x27,\x27volume\x27,\x27spacer\x27,\x27quality\x27,\x27fullscreen\x27]};";
        ttt = "player.configure({drm:{clearKeys:{\x27" + elif + "\x27}}})";
        if (ei > 1) {
            ttt += ";player.configure({drm:{servers:{\x27" + ilif + "\x27}}})"
        }
        uuu = ";ui.configure(config);window.player=player;window.ui=ui;player.addEventListener(\x27error\x27,onPlayerErrorEvent);controls.addEventListener(\x27error\x27,onUIErrorEvent);try{await player.load(manifestUri);console.log(\x27The video has now been loaded!\x27)}catch(error){onPlayerError(error)}};function onPlayerErrorEvent(errorEvent){onPlayerError(event.detail)}function onPlayerError(error){console.error(\x27Error code\x27,error.code,\x27object\x27,error)}function onUIErrorEvent(errorEvent){onPlayerError(event.detail)}function initFailed(errorEvent){console.error(\x27Unable to load the UI library!\x27)}document.addEventListener(\x27shaka-ui-loaded\x27,init);document.addEventListener(\x27shaka-ui-load-failed\x27,initFailed)\x3c/script></div>";
        document['write'](sss + ttt + uuu) 
 <!-- end devtool.js -->

