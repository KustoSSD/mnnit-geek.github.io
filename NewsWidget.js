function showNews(i, t, e, o, n, r, d, a, l) {
  n = void 0 === n ? "f93" : n, r = void 0 === r ? "f93" : r, a = void 0 === a ? 495 : a, d = void 0 === d ? "777" : d, l = void 0 !== l && l;
  var h = document.getElementById("cr-copyright");
  h && h.parentNode.removeChild(h);
  var p = 0,
    m = "",
    c = "",
    s = "";
  1 == t ? (m = "100%", c = "100%") : (p = Number(i), m = p.toString() + "px; ", c = i.toString() + "px; "), document.body.clientWidth < 415 && (m = "100%", c = "100%"), e > 0 && (s = " padding:10px; ");
  var x = "";
  x = 1 == l ? "//" + location.hostname : "https://cryptorival.com";
  var g = '<div style="display:inline-block; width:' + m + ';"><h1 style="text-align:center; font:23px verdana !important; text-decoration:none !important; font-weight:normal !important; color:#' + d + '; margin-bottom:5px;">Cryptocurrency News</h1><div style="min-width:320px; width:' + m + "; min-height:" + a + "px; height:" + a + "px; max-height:" + a + "px;" + s + "border:" + e + "px solid #" + o + ';display:inline-block; box-sizing:unset;"><iframe src="' + x + "/widget/news/?linkColor=" + n + "&hoverColor=" + r + '" allowtransparency="false" scrolling="yes" frameborder="0" border="0" cellspacing="0" style="height:' + a + "px; width:" + c + "; min-width:320px; min-height:" + a + "px; max-height:" + a + 'px;"></iframe></div></div>';
  document.write(g)
}