const U = {
  scrollToBotom(el, callback) {
    var wrap = document.querySelector(el)
    var nScrollHight = 0
    var nScrollTop = 0
    var t = null
    var nDivHight = wrap.clientHeight
    nScrollHight = wrap.scrollHeight
    nScrollTop = wrap.scrollTop
    if (nScrollTop + nDivHight >= nScrollHight) {
      if (callback && typeof callback === 'function') {
        clearTimeout(t)
        t = setTimeout(function () {
          callback()
        }, 100)
      }
    } else {
      //       console.log('nDivHight滚动元素的高度是:'+nDivHight
      //         +'\n'+'nScrollTop滚动的距离是'+nScrollTop
      //         +'\n'+'nScrollHight滚动条的高度是'+nScrollHight);
    }
  },
  scrollFunc(el, callbackDown, callbackUp) {
    var e = document.querySelector(el)
    var diffY = e.scrollTop
    var endY = e.clientHeight
    console.log(diffY + '下滚高度')
    console.log(endY + '上滚高度')
    if (diffY > 0) {
      // Scroll down
      if (callbackDown && typeof callbackDown === 'function') {
        callbackDown()
      }
    } else if (diffY <= 0) {
      // Scroll up
      if (callbackUp && typeof callbackUp === 'function') {
        callbackUp()
      }
    } else {
      // First scroll event
    }
    // scrollAction.x = window.pageXOffset
    // scrollAction.y = window.pageYOffset
  },
  isPC() { // 判断是否为PC端 (pc政务微信端，pc网页端)
    var userAgents = navigator.userAgent
    var Agents = ['Android', 'iPhone',
      'SymbianOS', 'Windows Phone',
      'iPad', 'iPod'
    ]
    var flag = true
    for (var v = 0; v < Agents.length; v++) {
      if (userAgents.indexOf(Agents[v]) > 0) {
        flag = false
        break
      }
    }
    return flag
  },
  isWeiXin() { //（是否微信浏览器）
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('micromessenger') != -1) {
      return true;
    } else {
      return false;
    }
  }
}

export default U
