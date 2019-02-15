const $ = require('dekko');
const chalk = require('chalk');

// $('dist')
$('dist')
  .isDirectory()
  .hasFile('de-dashboard.css')
  .hasFile('de-dashboard.min.css')
  .hasFile('de-dashboard.js')
  .hasFile('de-dashboard.min.js');

// eslint-disable-next-line
console.log(chalk.green('✨ `dist` directory is valid.'));
