const path = require("path");
/*
 * Project: Milestone 1
 * File Name: main.js
 * Description:
 *
 * Created Date:
 * Author:
 *
 */

const IOhandler = require("./IOhandler");
const zipFilePath = path.join(__dirname, "myfile.zip");
const pathUnzipped = path.join(__dirname, "unzipped");
const pathProcessed = path.join(__dirname, "grayscaled");
const unzipper = require('unzipper');
const fs = require("fs");
const PNG = require('pngjs').PNG;

//read zip file
//unzip zip file.then() promises..
//read all png img from unzip folder
//send them to grayscale filter function
//after all img grayscaled, show success message
//all errors must show in .catch in promise chain
//promise.all()
//promise.all([2,3,4]).then((values) => {
//     console.log(values)
// }

const transformStream = new PNG({});
// fs.createReadStream("./unzipped/in.png")
//     .pipe(transformStream)
//     .on("parsed", function (){
//         for (var y = 0; y < this.height; y++) {
//             for (var x = 0; x < this.width; x++) {
//                 var idx = (this.width * y + x) << 2;
//                 this.data[idx] = 255 - this.data[idx]
//                 this.data[idx + 1] = 255 - this.data[idx + 1]
//                 this.data[idx + 2] = 255 - this.data[idx + 2]
//                 this.data[idx + 3] = this.data[idx + 3] >> 1;
//                 //the << and >> is the bit shifter, literally moves the bits to the left for right by how much is given
//                 // think of it as faster multiplication
//             }
//         }

//         this.pack().pipe(fs.createWriteStream("out.png"));
//     });

// const ts = zlib.createGunzip(); //returns transform 
// step 1 unzip myfile.zip
fs.createReadStream(zipFilePath)
.pipe(unzipper.Extract({ path: "./unzipped"}));

//  to install the package for the unzipper thingy, use npm install pngjs in terminal
//npm install to just get everything
//unzipper: extracts files
//read png file
//gray = (r+g+b)/3

// fs.createReadStream('png1.png')



