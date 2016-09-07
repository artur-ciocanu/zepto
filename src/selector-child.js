//     Zepto.js
//     (c) 2010-2016 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.

;(function($){
  var zepto = $.zepto,
      oldQsa = zepto.qsa,
      childRe  = /^\s*>/,
      classTag = 'Zepto' + (+new Date())

  zepto.qsa = function(node, selector) {
    var sel = selector,
        nodes,
        taggedParent

    try {
      if (!sel) sel = '*'
      else if (childRe.test(sel))
        // support "> *" child queries by tagging the parent node with a
        // unique class and prepending that classname onto the selector
        taggedParent = $(node).addClass(classTag), sel = '.'+classTag+' '+sel

      nodes = oldQsa(node, sel)
    } catch(e) {
      throw e
    } finally {
      if (taggedParent) taggedParent.removeClass(classTag)
    }

    return nodes
  }
})(Zepto)
