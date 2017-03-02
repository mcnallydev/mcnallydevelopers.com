module.exports = function (dust) {
  // format
  dust.helpers.navigation = function (chunk, context, bodies, params) {
    let response = '';
    let url = context.resolve(params.url, chunk, context) || '/';
    let item = context.resolve(params.item, chunk, context) || '/';

    // validate to set string class name
    if(url=== item) {
      response = 'android-navigation-selected';
    }

    return chunk.write(response);
  };
};

module.exports.registerWith = module.exports;