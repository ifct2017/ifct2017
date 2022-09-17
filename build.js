const build = require('extra-build');

const owner = 'ifct2017';
const repo  = build.readMetadata('.').name.replace(/@.+\//g, '');




function generateCorpusMin() {
  build.exec(`browserify corpus.js -s ifct2017 -o corpus.umd.js`);
  build.exec(`uglifyjs corpus.umd.js -c -m -o corpus.min.js`);
  build.exec(`rm -f corpus.umd.js`);
}




// Publish a root package to NPM, GitHub.
function publishRootPackage(ver) {
  var _package = build.readDocument('package.json');
  var m = build.readMetadata('.');
  m.version = ver;
  build.writeMetadata('.', m);
  build.publish('.');
  try { build.publishGithub('.', owner); }
  catch {}
  build.writeDocument(_package);
}


// Publish root, sub packages to NPM, GitHub.
function publishPackages() {
  var m   = build.readMetadata('.');
  var ver = build.nextUnpublishedVersion(m.name, m.version);
  generateCorpusMin();
  publishRootPackage(ver);
}


// Publish docs.
function publishDocs() {
  var m = build.readMetadata('.');
  build.updateGithubRepoDetails({owner, repo, topics: m.keywords});
}


// Finally.
function main(a) {
  if (a[2]==='publish-docs') publishDocs();
  else if (a[2]==='publish-packages') publishPackages();
  else generateCorpusMin();
}
main(process.argv);
