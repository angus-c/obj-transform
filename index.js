Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = function(fn) {
  return function(obj, ctxt) {
    return Object.keys(obj).reduce(
      function(result, key) {
        result[key] = fn.call(ctxt, obj[key], key, obj);
        return result;
      }, {}
    );
  };
}

module.exports = exports['default'];
