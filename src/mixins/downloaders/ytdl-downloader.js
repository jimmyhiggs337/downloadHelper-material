const youtubedl = require("youtube-dl-exec");
const fs = require("fs");
const lookups = require("../lookup.json");
export default {
  //download function
  download(url, flags, options) {},

  //---------------------------------- helper functions -----------------------------------------------

  translateOptions(options) {
    var objOptions = {};
    for (let i = 0; i < options.length; i++) {
      if (options[i].length < 2) {
        if (options[i] in lookups.optionsAbreviations) {
          //uses lookup table to convert options abbreviations to full option
          // ex: -k => --keep-video
          options[i] = lookups.optionsAbreviations[options[i]];
        }
      }

      // to convert options from cmd formate to camel case
      // ex: --dump-single-json to dumpSingleJson
      options[i] = options[i].replace(/-([a-z])/g, (g) => {
        return g[1].toUpperCase();
      });
      options[i] = options[i].replace("-", "");

      //convert options array to object
      //ex: array: 'dumpSingleJson'
      // object: { dumpSingleJson : true }
      objOptions[options[i]] = true;
    }
    return objOptions;
  },
};
