function pictures(cod) {
  return null;
}

function unpkg(cod) {
  if(cod[0]>='M' && cod[0]<'P') return null;
  return `https://unpkg.com/@ifct2017/pictures/assets/${cod}.jpeg`;
}

function jsdelivr(cod) {
  if(cod[0]>='M' && cod[0]<'P') return null;
  return `https://cdn.jsdelivr.net/npm/@ifct2017/pictures/assets/${cod}.jpeg`;
}


exports.abbreviations = require('@ifct2017/abbreviations');
exports.about = require('@ifct2017/about');
exports.carbohydrates = require('@ifct2017/carbohydrates');
exports.codes = require('@ifct2017/codes');
exports.columns = require('@ifct2017/columns');
exports.compositingCentres = require('@ifct2017/compositingcentres');
exports.compositions = require('@ifct2017/compositions');
exports.contents = require('@ifct2017/contents');
exports.descriptions = require('@ifct2017/descriptions');
exports.energies = require('@ifct2017/energies');
exports.frequencyDistribution = require('@ifct2017/frequencydistribution');
exports.groups = require('@ifct2017/groups');
exports.hierarchy = require('@ifct2017/hierarchy');
exports.intakes = require('@ifct2017/intakes');
exports.jonesFactors = require('@ifct2017/jonesfactors');
exports.languages = require('@ifct2017/languages');
exports.methods = require('@ifct2017/methods');
exports.nutrients = require('@ifct2017/nutrients');
exports.regions = require('@ifct2017/regions');
exports.representations = require('@ifct2017/representations');
exports.samplingUnits = require('@ifct2017/samplingunits');
pictures.unpkg = unpkg;
pictures.jsdelivr = jsdelivr;
exports.pictures = pictures;
