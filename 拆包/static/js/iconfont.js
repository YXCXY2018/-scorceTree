! function (l) {
  var e, n = '<svg><symbol id="icon-wenjian" viewBox="0 0 1024 1024"><path d="M813.5 94.7h-592c-13.2 0-24 10.8-24 24v792c0 13.2 10.8 24 24 24h376.1v0.6L836.7 683h0.8V118.7c0-13.2-10.8-24-24-24zM637.2 835.4l-0.5-113.2h107.7L637.2 835.4z m160.3-153.2H600.6c-2.2 0-4 1.8-4 4l0.8 208.5H237.5v-760h560v547.5z" fill="#5ABE64" ></path><path d="M309 263.8h382c2.2 0 4-1.8 4-4v-32c0-2.2-1.8-4-4-4H309c-2.2 0-4 1.8-4 4v32c0 2.2 1.8 4 4 4zM309 379.9h272c2.2 0 4-1.8 4-4v-32c0-2.2-1.8-4-4-4H309c-2.2 0-4 1.8-4 4v32c0 2.2 1.8 4 4 4zM309 612.2h172c2.2 0 4-1.8 4-4v-32c0-2.2-1.8-4-4-4H309c-2.2 0-4 1.8-4 4v32c0 2.2 1.8 4 4 4zM309 496.1h272c2.2 0 4-1.8 4-4v-32c0-2.2-1.8-4-4-4H309c-2.2 0-4 1.8-4 4v32c0 2.2 1.8 4 4 4z" fill="#5ABE64" ></path></symbol></svg>',
    t = (e = document.getElementsByTagName("script"))[e.length - 1].getAttribute("data-injectcss");
  if (t && !l.__iconfont__svg__cssinject__) {
    l.__iconfont__svg__cssinject__ = !0;
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")
    } catch (e) {
      console && console.log(e)
    }
  }! function (e) {
    if (document.addEventListener)
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) setTimeout(e, 0);
      else {
        var t = function () {
          document.removeEventListener("DOMContentLoaded", t, !1), e()
        };
        document.addEventListener("DOMContentLoaded", t, !1)
      }
    else document.attachEvent && (c = e, o = l.document, i = !1, (d = function () {
      try {
        o.documentElement.doScroll("left")
      } catch (e) {
        return void setTimeout(d, 50)
      }
      n()
    })(), o.onreadystatechange = function () {
      "complete" == o.readyState && (o.onreadystatechange = null, n())
    });

    function n() {
      i || (i = !0, c())
    }
    var c, o, i, d
  }(function () {
    var e, t;
    (e = document.createElement("div")).innerHTML = n, n = null, (t = e.getElementsByTagName("svg")[0]) && (t.setAttribute("aria-hidden", "true"), t.style.position = "absolute", t.style.width = 0, t.style.height = 0, t.style.overflow = "hidden", function (e, t) {
      t.firstChild ? function (e, t) {
        t.parentNode.insertBefore(e, t)
      }(e, t.firstChild) : t.appendChild(e)
    }(t, document.body))
  })
}(window);
 