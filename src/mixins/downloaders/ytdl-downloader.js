const youtubedl = require("youtube-dl-exec");
const fs = require("fs");
const lookups = require("../lookup.json");
export default {
  //download function
  download(url, flags, options) {},

  //---------------------------------- helper functions -----------------------------------------------

  translateOptions(options) {
    var objOptions = {};
    //splits the string into an array of individual options
    var arrayOptions = options.split(" ");
    for (let i = 0; i < arrayOptions.length; i++) {
      if (arrayOptions[i].length < 2) {
        if (arrayOptions[i] in lookups.optionsAbreviations) {
          //uses lookup table to convert options abbreviations to full option
          // ex: -k => --keep-video
          arrayOptions[i] = lookups.optionsAbreviations[arrayOptions[i]];
        }
      }

      // to convert options from cmd formate to camel case
      // ex: --dump-single-json to dumpSingleJson
      arrayOptions[i] = arrayOptions[i].replace(/-([a-z])/g, (g) => {
        return g[1].toUpperCase();
      });
      arrayOptions[i] = arrayOptions[i].replace("-", "");

      //convert options array to object
      //ex: array: 'dumpSingleJson'
      // object: { dumpSingleJson : true }
      objOptions[arrayOptions[i]] = true;
    }
    return objOptions;
  },
};
