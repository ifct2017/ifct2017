const cp = require('child_process');

cp.execSync(`browserify corpus.js -s ifct2017 -o corpus.umd.js`);
cp.execSync(`uglifyjs corpus.umd.js -c -m -o corpus.min.js`);
cp.execSync(`rm -f corpus.umd.js`);
