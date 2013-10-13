var $ = require('jquery');

module.exports = function CodeExecute(selector) {
  $(document).on('click', selector, onClickCode);
  $(document).on('click', 'code.execute', onClickCode);

  function onClickCode(click) {
    var code = $(click.currentTarget).text();
    var execute = new Function(code);
    execute();
  }
}
