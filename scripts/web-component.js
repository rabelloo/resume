const fs = require('fs');
const path = require('path');
const sass = require('sass');

const srcFolder = 'src';

module.exports = (source) =>
  source.replace(
    /(template|styles)\s*:\s*(['"`])(?:~(.+?)|(.+?\.(html|css|s[ac]ss)))\2/g,
    (_, prop, __, component, file, extension) => {
      if (component) {
        [file, extension] = findFile(prop, component);
      }

      return `${prop}: \`${getContent(file, extension)}\``;
    }
  );

//////////////

const findFile = (prop, component) => {
  const path = ref(component);
  const extension = prop === 'template' ? 'html' : whatStyle(path);

  if (!extension)
    throw new Error(`Provided file not found: ${path}.css|scss|sass`);

  return [`${path}.${extension}`, extension];
};

const getContent = (file, extension) => {
  if (/s[ac]ss/.test(extension)) {
    return wrapStyles(
      sass
        .renderSync({ file: path.resolve(file) })
        .css.toString()
        .replace(/:host([^() ,{]+)/g, ':host($1)')
    );
  }

  if (extension === 'css') {
    return wrapStyles(read(file));
  }

  return read(file);
};

const ref = (path) => {
  const folders = path.split('/');
  const name = folders.pop();

  return `${srcFolder}/${folders.join('/')}/${name}/${name}`;
};

const fileExists = (file) => fs.existsSync(path.resolve(file));
const read = (file) => fs.readFileSync(path.resolve(file)).toString();

const styleIs = (path, extension) =>
  fileExists(`${path}.${extension}`) && extension;

// prettier-ignore
const whatStyle = path => styleIs(path, 'css')
                       || styleIs(path, 'scss')
                       || styleIs(path, 'sass');

const wrapStyles = (styles) => `<style>\n${styles}</style>`;
