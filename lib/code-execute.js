var $ = require('jquery');

module.exports = function CodeExecute(selector) {
  selector = selector || 'code.execute';
  $(document).on('click', selector, onClickCode);

  function onClickCode(click) {
    click.preventDefault();

    var code = $(click.currentTarget).text();
    var execute = new Function(code);

    execute();
  }
}
