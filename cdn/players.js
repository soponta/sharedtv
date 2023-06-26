var style = "padding: 0px !important; background: rgb(220,137,232) !important;\nbackground: linear-gradient(141deg, rgba(220,137,232,1) 0%, rgba(144,64,204,1) 100%) !important; height: 55px; text-align: center";
var ad = '<a href="#">\n    <div style="' + style + '">\n      <img style="height: 0px !important; width: auto !important;" src="#" alt="tiiny.host">\n    </div>\n  </a>';
window.onload = function() {
 var a = document.createElement("div");
 a.innerHTML = ad;
 a.style.cssText = "position: fixed !important; bottom:0% !important; width:0% !important; height:0px !important; z-index:9999 !important";
 document.body.insertBefore(a, document.body.firstChild);
 document.body.style.cssText = "margin-bottom: 0px !important";
 var div = document.getElementById("viewerContainer");
 if (div) {
   div.style.cssText = "bottom: 0px !important";
 }
};
