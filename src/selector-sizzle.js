;(function($){
  var zepto = $.zepto,
      sizzle = $.Sizzle

  function visible(elem){
    elem = $(elem)
    return !!(elem.width() || elem.height()) && elem.css("display") !== "none"
  }

  function filterHidden( elem ) {
    while ( elem && elem.nodeType === 1 ) {
      if ( !visible(elem) ) {
        return true
      }
      elem = elem.parentNode
    }
    return false
  }

  sizzle.selectors.pseudos.hidden = function( elem ) {
    return filterHidden( elem )
  };

  sizzle.selectors.pseudos.visible = function( elem ) {
    return !filterHidden(elem);
  };

  zepto.qsa = function(node, selector) {
    return sizzle(selector, node)
  }

  zepto.matches = function(node, selector){
    return sizzle.matchesSelector(node, selector);
  }
})(Zepto)
