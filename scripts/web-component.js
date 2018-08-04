const fs = require('fs');
const path = require('path');

const srcFolder = 'src';
const componentRegex = /^~\w*$/;
const inlineRegex = /<\w*?>.*?<\/\w*>/;

module.exports = source =>
  source
    .replace(
      /template\('(.*?)'(?:, ?('.*'))?\)/,
      (_, $1, $2) => `template(\`${ html($1) }\`, \`${ scss($2 || $1) }\`)`
    );

const html = file => component(file, 'html');
const scss = file => `<style>\n${ component(file, 'scss') }</style>`;
const read = file => fs.readFileSync(path.resolve(file)).toString();

function component(file, extension) {
  if (!file) {
    return '';
  }

  if (inlineRegex.test(file)){
    return file;
  }

  if (!componentRegex.test(file)) {
    return read(file);
  }

  const component = file.slice(1);

  return read(`${srcFolder}/${component}/${component}.${extension}`);
}
