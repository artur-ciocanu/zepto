(function(global, factory) {
  if (typeof define === 'function' && define.amd)
    define(function () { return factory(global) })
  else if (typeof module !== "undefined" && module.exports)
    module.exports = factory(global);
  else
    factory(global)
}(this, function(window) {
  YIELD
  return Zepto
}))
