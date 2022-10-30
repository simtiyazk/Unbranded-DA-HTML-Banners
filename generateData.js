import pkg from './package.json';
import fs from 'fs';
import path from 'path';
import fileBytes from 'file-bytes';
import prettyBytes from 'pretty-bytes';
import glob from 'glob';

module.exports = function() {
  const SRC_PATH = 'src/banner_list';
  const SRC_PATH_ZIPS = 'dist/ZIPS/*';
  const FOLDER = getFolders(SRC_PATH);
  const sizeArray = [];

  function getFolders(dir) {
    return fs.readdirSync(dir).filter(function() {
      return fs.statSync(path.join(dir)).isDirectory();
    });
  }

  const files = glob.sync(SRC_PATH_ZIPS);

  for (const file of files) {
    const size = prettyBytes(fileBytes.sync(file));
    sizeArray.push(size);
  }

  const getDir = FOLDER.filter((path) => path !== '.DS_Store');

  const getDirUrl = FOLDER.filter((path) => path !== '.DS_Store').map(
      (path) => `${path}/index.html`
  );

  const data = {};
  data.info = [];

  const obj = {
    campaign: pkg.campaign,
    advertiser: pkg.advertiser,
    disclaimer: pkg.disclaimer,
    sizes: getDir,
    path: getDirUrl,
    fileSize: sizeArray,
  };

  data.info.push(obj);

  fs.writeFile('./src/data.json', JSON.stringify(data), function(err) {
    if (err) throw err;
  });

  return getDir;
};
