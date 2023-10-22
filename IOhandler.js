const path = require("path");
const PNG = require('pngjs').PNG;
const fs = require("fs").promises;
const { createReadStream, createWriteStream } = require("fs");
/*
 * Project: Milestone 1
 * File Name: IOhandler.js
 * Description: Collection of functions for files input/output related operations
 *
 * Created Date:
 * Author:
 *
 */

const unzipper = require("unzipper")
  // fs = require("fs"),
  // PNG = require("pngjs").PNG,
  // path = require("path");

/**
 * Description: decompress file from given pathIn, write to given pathOut
 *
 * @param {string} pathIn
 * @param {string} pathOut
 * @return {promise}
 * 
 */
  const unzip = (pathIn, pathOut) => {
    return new Promise((res, rej) => {
      createReadStream(pathIn)
      .pipe(unzipper.Extract({ path: pathOut}))
      .promise()
      .then( () => res('done'), e => rej('error', e));
    })
  };

/**
 * Description: read all the png files from given directory and return Promise containing array of each png file path
 *
 * @param {string} path
 * @return {promise}
 */
const readDir = (filepath) => {
  return new Promise((res, rej) => {
    files = fs.readdir(filepath, (err, list) => {
      if (err){
          rej(err)
      } else {
        res(list)
      }
    });
  })
};

/**
 * Description: Read in png file by given pathIn,
 * convert to grayscale and write to given pathOut
 *
 * @param {string} filePath
 * @param {string} pathProcessed
 * @return {promise}
 */
const grayScale = (pathIn, pathOut) => {

};

module.exports = {
  unzip,
  readDir,
  grayScale,
};
