const { existsSync, readFileSync } = require('fs');
const { resolve } = require('path');
const { renderSync } = require('sass');

const componentsFolder = 'src/components';

module.exports = (source) =>
  source.replace(
    /(template|styles)\s*:\s*(['"`])(?:~(.+?)|(.+?\.(html|css|s[ac]ss)))\2/g,
    (_, prop, __, component, file, extension) => {
      if (component) {
        [file, extension] = findFile(prop, component);
      }

      return `${prop}: \`${getContent(file, extension)}\``;
    },
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
      renderSync({ file: resolve(file) })
        .css.toString()
        .replace(/:host([^() ,{]+)/g, ':host($1)'),
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
  return [componentsFolder, ...folders, name, name].filter(Boolean).join('/');
};

const fileExists = (file) => existsSync(resolve(file));
const read = (file) => readFileSync(resolve(file)).toString();

const styleIs = (path, extension) =>
  fileExists(`${path}.${extension}`) && extension;

const whatStyle = (path) =>
  styleIs(path, 'css') || styleIs(path, 'scss') || styleIs(path, 'sass');

const wrapStyles = (styles) => `<style>\n${styles}</style>`;
