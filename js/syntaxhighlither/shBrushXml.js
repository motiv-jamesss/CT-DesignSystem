(function () {
  function e() {
    function e(e) {
      var t = SyntaxHighlighter.Match,
        r = e[0],
        i = new XRegExp("(&lt;|<)[\\s\\/\\?]*(?<name>[:\\w-\\.]+)", "xg").exec(r),
        s = [];
      if (null != e.attributes)
        for (var n, a = new XRegExp("(?<name> [\\w:\\-\\.]+)\\s*=\\s*(?<value> \".*?\"|'.*?'|\\w+)", "xg"); null != (n = a.exec(r));) s.push(new t(n.name, e.index + n.index, "color1")), s.push(new t(n.value, e.index + n.index + n[0].indexOf(n.value), "string"));
      return null != i && s.push(new t(i.name, e.index + i[0].indexOf(i.name), "keyword")), s
    }
    this.regexList = [{
      regex: new XRegExp("(\\&lt;|<)\\!\\[[\\w\\s]*?\\[(.|\\s)*?\\]\\](\\&gt;|>)", "gm"),
      css: "color2"
    }, {
      regex: SyntaxHighlighter.regexLib.xmlComments,
      css: "comments"
    }, {
      regex: new XRegExp("(&lt;|<)[\\s\\/\\?]*(\\w+)(?<attributes>.*?)[\\s\\/\\?]*(&gt;|>)", "sg"),
      func: e
    }]
  }
  "undefined" != typeof require ? SyntaxHighlighter = require("shCore").SyntaxHighlighter : null, e.prototype = new SyntaxHighlighter.Highlighter, e.aliases = ["xml", "xhtml", "xslt", "html"], SyntaxHighlighter.brushes.Xml = e, "undefined" != typeof exports ? exports.Brush = e : null
})();